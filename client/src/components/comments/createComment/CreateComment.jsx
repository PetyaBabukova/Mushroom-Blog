import Form from 'react-bootstrap/Form';
import styles from './CreateComment.module.css';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as commentService from '../../../services/commentService';
import * as validations from '../../../lib/validations'; 
import AuthContext from '../../../contexts/authContext';

function CreateComment() {
    const { dishId } = useParams();
    const navigate = useNavigate();
    const { username } = useContext(AuthContext);
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    const createCommentHandler = async (e) => {
        e.preventDefault();

        // Validation
        const validationError = validations.validateProfileField(comment);
        if (validationError) {
            setError(validationError);
            return; 
        }

        try {
            const newComment = await commentService.create(dishId, username, comment);
           
            setComment(currentComments => [...currentComments, newComment]);
            navigate(`/${dishId}/details`);
        } catch (error) {
            console.log("Error creating comment:", error);
        }
    };

    const changeHandler = (e) => {
        setComment(e.target.value);
        setError(""); 
    };

    return (
        <Form className={styles.formContainer} onSubmit={createCommentHandler}>
            <Form.Group className="mb-3">
                <h2 className={styles.heading}>Create Comment</h2>
                <Form.Label>Give a Comment</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Comment"
                    name='comment'
                    value={comment}
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

export default CreateComment;