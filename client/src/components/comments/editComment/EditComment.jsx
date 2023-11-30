import Form from 'react-bootstrap/Form';

import styles from './EditComment.module.css';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as commentService from '../../../services/commentService';

function EditComment() {

    const { commentId } = useParams();
    const navigate = useNavigate();
    const [comment, setComment] = useState({
        comment: ''
    });


    useEffect(() => {
        if (commentId) { 
            commentService.getOne(commentId)
                .then(result => {
                    setComment(result)
                })
        }
    }, [commentId]);

    const changeHandler = (e) => {
        // console.log(e.target.value);
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const editCommentHandler = async (e) => {
        e.preventDefault();
        
        try {
            await commentService.edit(commentId, comment)
            navigate(-1);

        } catch (error) {
            console.log("Error updating comment:", error);
        }
    };

    return (
        <Form className={styles.formContainer} onSubmit={editCommentHandler}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h2 className={styles.heading}>Edit Comment</h2>
                <Form.Label>Change your Comment</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Comment"
                    name='comment'
                    value={comment.comment}
                    onChange={changeHandler}
                />
            </Form.Group>

            <button className={styles.loginBtn} variant="primary" type="submit">
                Submit Comment
            </button>
        </Form>
    );
}

export default EditComment;