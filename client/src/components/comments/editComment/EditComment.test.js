import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, useParams, useNavigate } from 'react-router-dom';
import EditComment from './EditComment';
import * as commentService from '../../../services/commentService';
import * as validations from '../../../lib/validations';

jest.mock('../../../services/commentService');
jest.mock('../../../lib/validations');

// Mock useNavigate and useParams
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    useParams: () => ({ commentId: '1' })
}));

describe('EditComment', () => {
    const mockComment = { comment: 'Existing comment' };

    beforeEach(() => {
        jest.clearAllMocks();
        commentService.getOne.mockResolvedValue(mockComment);
    });

    test('renders the form with existing comment', async () => {
        await act(async () => {
            render(
                <MemoryRouter>
                    <EditComment />
                </MemoryRouter>
            );
        });

        expect(screen.getByPlaceholderText(/comment/i).value).toBe(mockComment.comment);
    });

    test('handles input change', async () => {
        await act(async () => {
            render(
                <MemoryRouter>
                    <EditComment />
                </MemoryRouter>
            );
        });

        const input = screen.getByPlaceholderText(/comment/i);
        fireEvent.change(input, { target: { value: 'Updated comment' } });

        expect(input.value).toBe('Updated comment');
    });

    // test('submits the form with valid data', async () => {
    //     const updatedComment = 'Updated comment';
    //     commentService.edit.mockResolvedValue({});

    //     await act(async () => {
    //         render(
    //             <MemoryRouter>
    //                 <EditComment />
    //             </MemoryRouter>
    //         );
    //     });

    //     fireEvent.change(screen.getByPlaceholderText(/comment/i), { target: { value: updatedComment } });
    //     fireEvent.click(screen.getByRole('button', { name: /submit comment/i }));

    //     await act(async () => {
    //         expect(commentService.edit).toHaveBeenCalledWith('1', { comment: updatedComment });
    //         expect(mockNavigate).toHaveBeenCalledWith(-1);
    //     });
    // });

    test('handles validation error', async () => {
        validations.validateProfileField.mockReturnValue('Error message');

        await act(async () => {
            render(
                <MemoryRouter>
                    <EditComment />
                </MemoryRouter>
            );
        });

        fireEvent.change(screen.getByPlaceholderText(/comment/i), { target: { value: '' } });
        fireEvent.click(screen.getByRole('button', { name: /submit comment/i }));

        expect(screen.getByText(/error message/i)).toBeInTheDocument();
        expect(commentService.edit).not.toHaveBeenCalled();
    });

    // Additional tests can be added as needed
});
