import Form from 'react-bootstrap/Form';

import styles from './CreateComment.module.css';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import * as commentService from '../../services/commentService';

function CreateComment() {

  const { dishId } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);

  const createCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const comment = Object.fromEntries(formData);
    // console.log(comment);


    const newComment = await commentService.create(dishId, 'Stefan', comment.comment)
      .then(setComments(comments => [...comments, newComment]))
      .then(navigate(`/${dishId}/details`))

    setComments(state => [...state, newComment])
    console.log(newComment);
  }

  const changeHandler = (e) => {
    console.log(e.target.value);
    setComments(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Form className={styles.formContainer} onSubmit={createCommentHandler}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h2 className={styles.heading}>Create Comment</h2>
        <Form.Label>Give a Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Comment"
          name='comment'
          value={comments.comment}
          onChange={changeHandler}
        />
      </Form.Group>

      <button className={styles.loginBtn} variant="primary" type="submit">
        Submit Comment
      </button>
    </Form>
  );
}

export default CreateComment;