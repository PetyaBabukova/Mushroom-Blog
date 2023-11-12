import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './CreateDishForm.module.css';


function CreateDishForm() {
  return (
  <>
    <Form className={styles.createNewDishFormContainer}>
        <h2>Create New Dish</h2>

      {/* <Form.Group className="mb-3" controlId="formGridAddress1">
        <label htmlFor="title">Title</label>
        <input type="text" name='title' id='title '/>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Title</Form.Label>
        <Form.Control name='title' id='title' placeholder="What is the Dish name?" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Subtitle</Form.Label>
        <Form.Control name='subtitle' id='subtitle' placeholder="Can you write a Subtitle?" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Ingradients</Form.Label>
        <Form.Control name='ingradients' id='ingradients' placeholder="Please add ingradients here" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Instructions</Form.Label>
        <Form.Control name='instructions' id='instructions' placeholder="How is the dish prepared?" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Author</Form.Label>
        <Form.Control name='author' id='author' placeholder="Author" />
      </Form.Group>

      <button className={styles.buttonSubmit}>Submit</button>
      
         {/* <Button variant="primary" type="submit" className={styles.buttonSubmit}>
        Submit
      </Button> */}
    </Form>
  </>
  );
}

export default CreateDishForm;






// import styles from './CreateDishForm.module.css';

// function CreateArticle() {

//     return (
//         <div className={styles.createDish}>
//             <h2 className={styles.h2} >Create Dish</h2>
//             <form >
//                 <div className={styles.formInput}>
//                     <label className={styles.label} >Title</label>
//                     <input className={styles.input} type="text" name="title"  />
//                 </div>
                
//                 <div className={styles.formInput}>
//                     <label className={styles.label}>Subtitle</label>
//                     <input className={styles.input} type="text" name="subtitle" />
//                 </div>

//                 <div className={styles.formInput}>
//                     <label className={styles.label}>Ingradients</label>
//                     <input className={styles.input} type="text" name="ingradients" />
//                 </div>

//                 <div className={styles.formInput}>
//                     <label className={styles.label}>Instructions</label>
//                     <textarea className={styles.textarea} name="instructions"  />
//                 </div>

//                 <div className={styles.formInput}>
//                     <label className={styles.label}>Author:</label>
//                     <input className={styles.input} type="text" name="author"  />
//                 </div>

//                 <div className={styles.buttonContainer}>
//                 <button className={styles.buttonSubmit} type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
//     }

// export default CreateArticle;
