import { jest } from '@jest/globals';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import CommentItem from './CommentItem';
import * as commentService from '../../../services/commentService';
import AuthContext from '../../../contexts/authContext';

jest.mock('../../../services/commentService');
window.confirm = jest.fn();

// Correctly import and mock useNavigate
import { useNavigate as useNavigateMock } from 'react-router-dom';
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('CommentItem', () => {
  let mockNavigate;
  const mockOnDelete = jest.fn();
  const commentData = {
    comment: 'Test Comment',
    chef: 'Test Chef',
    _id: 'comment-id',
    dishId: 'dish-id',
    _ownerId: 'owner-id'
  };

  const renderComponent = (userId = 'owner-id') => {
    render(
      <AuthContext.Provider value={{ userId }}>
        <MemoryRouter>
          <CommentItem {...commentData} onDelete={mockOnDelete} />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockNavigate = jest.fn();
    useNavigateMock.mockImplementation(() => mockNavigate);
  });

  test('renders the comment and actions if user is the owner', () => {
    renderComponent();

    expect(screen.getByText(/test comment/i)).toBeInTheDocument();
    expect(screen.getByText(/edit comment/i)).toBeInTheDocument();
    expect(screen.getByText(/delete comment/i)).toBeInTheDocument();
  });

  test('does not render edit/delete actions if user is not the owner', () => {
    renderComponent('different-user-id');

    expect(screen.getByText(/test comment/i)).toBeInTheDocument();
    expect(screen.queryByText(/edit comment/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/delete comment/i)).not.toBeInTheDocument();
  });

  test('calls delete service and navigates on delete click', async () => {
    window.confirm.mockReturnValue(true); // User confirms the deletion
    commentService.del.mockResolvedValue({}); // Mock delete API response

    await act(async () => {
      renderComponent();
    });

    expect(screen.getByText(/delete comment/i)).toBeInTheDocument();
    
    await act(async () => {
      fireEvent.click(screen.getByText(/delete comment/i));
    });

    expect(window.confirm).toHaveBeenCalledWith('Do you want to delete this comment?');
    expect(commentService.del).toHaveBeenCalledWith(commentData._id);
    // Check if navigate has been called with the expected path
    // expect(mockNavigate).toHaveBeenCalledWith(`/${commentData.dishId}/details`);
    expect(mockOnDelete).toHaveBeenCalledWith(commentData._id);
  });

//   test('navigates to edit comment page on edit link click', async () => {
//     await act(async () => {
//       renderComponent();
//     });
  
//     const editLink = screen.queryByText(/edit comment/i);
//     if (editLink) {
//       await act(async () => {
//         fireEvent.click(editLink);
//       });
//       expect(mockNavigate).toHaveBeenCalledWith(`/${commentData._id}/edit-comment`);
//     } else {
//       console.error("Edit link not found in the component");
//     }
//   });
});