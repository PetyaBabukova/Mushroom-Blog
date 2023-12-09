import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, useParams, useNavigate } from 'react-router-dom';
import CreateComment from './CreateComment';
import * as commentService from '../../../services/commentService';
import * as validations from '../../../lib/validations';
import AuthContext from '../../../contexts/authContext';

jest.mock('../../../services/commentService');
window.confirm = jest.fn();
jest.mock('../../../lib/validations');

// Mock useParams and useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ dishId: '1' }),
    useNavigate: jest.fn(),
}));

describe('CreateComment', () => {
    let mockNavigate = jest.fn();
    const username = 'testUser';

    const renderComponent = () => {
        render(
            <AuthContext.Provider value={{ username }}>
                <MemoryRouter>
                    <CreateComment />
                </MemoryRouter>
            </AuthContext.Provider>
        );
    };

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(useNavigate).mockReturnValue(mockNavigate);
    });

    test('renders the form correctly', () => {
        renderComponent();

        expect(screen.getByText(/create comment/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/comment/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit comment/i })).toBeInTheDocument();
    });

    // test('submits a valid comment', async () => {
    //     const validComment = 'This is a valid comment';
    //     commentService.create.mockResolvedValue({ id: 'newCommentId', text: validComment });

    //     renderComponent();

    //     fireEvent.change(screen.getByPlaceholderText(/comment/i), { target: { value: validComment } });
    //     fireEvent.click(screen.getByRole('button', { name: /submit comment/i }));

    //     await act(async () => {
    //         expect(commentService.create).toHaveBeenCalledWith('1', username, validComment);
    //         expect(mockNavigate).toHaveBeenCalledWith('/1/details');
    //     });
    // });

    test('handles validation error when comment is invalid', async () => {
        const invalidComment = '';
        validations.validateProfileField.mockReturnValue('Comment is required');

        renderComponent();

        fireEvent.change(screen.getByPlaceholderText(/comment/i), { target: { value: invalidComment } });
        fireEvent.click(screen.getByRole('button', { name: /submit comment/i }));

        await act(async () => {
            expect(screen.getByText(/comment is required/i)).toBeInTheDocument();
            expect(commentService.create).not.toHaveBeenCalled();
        });
    });
});
