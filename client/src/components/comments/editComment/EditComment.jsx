import Form from 'react-bootstrap/Form';
import styles from './EditComment.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as commentService from '../../../services/commentService';
import * as validations from '../../../lib/validations'; // Assuming this path is correct

function EditComment() {
    const { commentId } = useParams();
    const navigate = useNavigate();
    const [comment, setComment] = useState({ comment: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        if (commentId) { 
            commentService.getOne(commentId)
                .then(result => {
                    setComment(result);
                });
        }
    }, [commentId]);

    const editCommentHandler = async (e) => {
        e.preventDefault();

        // Validation
        const validationError = validations.validateProfileField(comment.comment);
        if (validationError) {
            setError(validationError);
            return; // Prevent submission if there is a validation error
        }

        try {
            await commentService.edit(commentId, comment);
            navigate(-1);
        } catch (error) {
            console.log("Error updating comment:", error);
        }
    };

    const changeHandler = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
        setError(''); // Clear error when the user starts editing
    };

    return (
        <Form className={styles.formContainer} onSubmit={editCommentHandler}>
            <Form.Group className="mb-3">
                <h2 className={styles.heading}>Edit Comment</h2>
                <Form.Label>Change your Comment</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Comment"
                    name='comment'
                    value={comment.comment}
                    onChange={changeHandler}
                />
                {error && <div className={styles.errorMsg}>{error}</div>}
            </Form.Group>

            <button className={styles.loginBtn} variant="primary" type="submit">
                Submit Comment
            </button>
        </Form>
    );
}

export default EditComment;