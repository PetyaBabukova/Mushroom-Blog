import Form from 'react-bootstrap/Form';

import styles from './CreateComment.module.css'
import { useState } from 'react';

function CreateComment() {
  const [comments, setComments] = useState([])
  
  return (
    <Form className={styles.formContainer}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <h2 className={styles.heading}>Create Comment</h2>
        <Form.Label>Give a Comment</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Comment" 
        name='comment'
        value={comment}
        />
      </Form.Group>

      <button className={styles.loginBtn} variant="primary" type="submit">
        Submit Comment
      </button>
    </Form>
  );
}

export default CreateComment;