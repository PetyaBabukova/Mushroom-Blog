import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './CreateDishForm.module.css';

import * as dishService from '../../services/dishService';
import { useEffect, useState } from 'react';


function CreateDishForm() {
  const [dishes, setDishes] = useState({});
  const [values, setValues] = useState(
    {
        _id: "",
        category: "",
        author: "Chef Petya",
        image: "",
        title: "",
        subtitle: "",
        shortDescription: "",
        ingredients: "",
        description: ""
  });

  const createDishSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

	
    const currentItems = await dishService.getAll();
	const _id = currentItems.length + 1;
	
    const newDish = await dishService.create(data, _id)
	.then(setDishes(dishes => [...dishes, newDish]))
	

	// console.log("newDish: ", newDish);
	console.log("_id: ", _id);
	// console.log("dishes: ", dishes);
};



  const changeHandler = (e) => {
	console.log(e.target.name, '-', e.target.value);

	setValues(state => ({
		...state,
		[e.target.name]: e.target.value
		// [e.target.name]: == "checkbox" ?e.target.checked : e.target.value //if we whant to use one handler for all, including radio btns
	}))
}

return (
	<div className={styles.createDish}>
		<h2 className={styles.h2}>Create Dish</h2>
		<form onSubmit={createDishSubmitHandler}>

			<div className={styles.formInput}>
				<label className={styles.label} >Title:</label>
				<input className={styles.input} type="text" name="title" value={values.title} onChange={changeHandler} />
			</div>
			
			<div className={styles.formInput}>
				<label className={styles.label}>Subtitle:</label>
				<input className={styles.input} type="text" name="subtitle" value={values.subtitle} onChange={changeHandler}/>
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Category:</label>
				<input className={styles.input} type="text" name="category" value={values.category} onChange={changeHandler}/>
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Author:</label>
				<select className={styles.selectAuthor} name='author' value={values.author} onChange={changeHandler}>
					<option value="null">Select Author</option>
					<option value="Chef Petya">Chef Petya</option>
					<option value="Chef Stefan">Chef Stefan</option>
					<option value="Chef Sophie">Chef Sophie</option>
				</select>
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Image URL:</label>
				<input className={styles.input} type="text" name="image" value={values.image} onChange={changeHandler} />
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Ingradients:</label>
				<input className={styles.input} type="text" name="ingradients" value={values.ingradients} onChange={changeHandler} />
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Short Description:</label>
				<textarea className={styles.textarea} name="shortDescription" value={values.shortDescription} onChange={changeHandler} />
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Instructions:</label>
				<textarea className={styles.textarea} name="details" value={values.details} onChange={changeHandler} />
			</div>

			

			<div className={styles.buttonContainer}>
			<button className={styles.buttonSubmit} type="submit">Submit</button>
			</div>
		</form>
	</div>
);
}

  
export default CreateDishForm;






// import styles from './CreateDishForm.module.css';

// function CreateArticle() {

    // return (
    //     <div className={styles.createDish}>
    //         <h2 className={styles.h2} >Create Dish</h2>
    //         <form >
    //             <div className={styles.formInput}>
    //                 <label className={styles.label} >Title</label>
    //                 <input className={styles.input} type="text" name="title"  />
    //             </div>
                
    //             <div className={styles.formInput}>
    //                 <label className={styles.label}>Subtitle</label>
    //                 <input className={styles.input} type="text" name="subtitle" />
    //             </div>

    //             <div className={styles.formInput}>
    //                 <label className={styles.label}>Ingradients</label>
    //                 <input className={styles.input} type="text" name="ingradients" />
    //             </div>

    //             <div className={styles.formInput}>
    //                 <label className={styles.label}>Instructions</label>
    //                 <textarea className={styles.textarea} name="instructions"  />
    //             </div>

    //             <div className={styles.formInput}>
    //                 <label className={styles.label}>Author:</label>
    //                 <input className={styles.input} type="text" name="author"  />
    //             </div>

    //             <div className={styles.buttonContainer}>
    //             <button className={styles.buttonSubmit} type="submit">Submit</button>
    //             </div>
    //         </form>
    //     </div>
    // );
    // }

// export default CreateArticle;



// return (
// 	<>
// 	  <Form className={styles.createNewDishFormContainer} onSubmit={submitCreateDishFormHandler}>
// 		  <h2>Create New Dish</h2>
  
// 		{/* <Form.Group className="mb-3" controlId="formGridAddress1">
// 		  <label htmlFor="title">Title</label>
// 		  <input type="text" name='title' id='title '/>
// 		</Form.Group> */}
  
// 		<Form.Group className="mb-3" controlId="formGridAddress2">
// 		  <Form.Label>Category</Form.Label>
// 		  <Form.Control name='category' id='category' placeholder="Please specify the dish category" value={values.category} onChange={changeHandler}/>
// 		</Form.Group>
  
// 		<Form.Group className="mb-3" controlId="formGridAddress2">
// 		  <Form.Label>Image URL</Form.Label>
// 		  <Form.Control name='image' id='image' placeholder="Put the image URL here" />
// 		</Form.Group>
  
// 		<Form.Group className="mb-3" controlId="formGridAddress2">
// 		  <Form.Label>Title</Form.Label>
// 		  <Form.Control name='title' id='title' placeholder="What is the Dish name?" />
// 		</Form.Group>
  
// 		<Form.Group className="mb-3" controlId="formGridAddress2">
// 		  <Form.Label>Subtitle</Form.Label>
// 		  <Form.Control name='subtitle' id='subtitle' placeholder="Can you write a Subtitle?" />
// 		</Form.Group>
  
// 		<Form.Group className="mb-3" controlId="formGridAddress2">
// 		  <Form.Label>Short Description</Form.Label>
// 		  <Form.Control name='shortDescription' id='shortDescription' placeholder="Short Description" />
// 		</Form.Group>
  
// 		<Form.Group className="mb-3" controlId="formGridAddress2">
// 		  <Form.Label>Ingradients</Form.Label>
// 		  <Form.Control name='ingradients' id='ingradients' placeholder="Please add ingradients here" />
// 		</Form.Group>
  
// 		<Form.Group className="mb-3" controlId="formGridAddress2">
// 		  <Form.Label>Instructions</Form.Label>
// 		  <Form.Control name='description' id='description' placeholder="How is the dish prepared?" />
// 		</Form.Group>
  
		
// 		<Form.Group className="mb-3" controlId="formGridAddress2">
// 		  <Form.Label className={styles.selectAuthor}>Author</Form.Label>
// 		  <select name="author" id="author">
// 			  <option value="Cef Stefan">Chef Petya</option>
// 			  <option value="Cef Stefan">Chef Stefan</option>
// 			  <option value="Cef Stefan">Chef Sophie</option>
// 		  </select>
// 		</Form.Group>
  
// 		<button className={styles.buttonSubmit}>Submit</button>
		
// 	  </Form>
// 	</>
// 	);