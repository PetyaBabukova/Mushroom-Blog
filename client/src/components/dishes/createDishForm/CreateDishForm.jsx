import styles from './CreateDishForm.module.css';

import * as dishService from '../../../services/dishService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CreateDishForm() {
	const navigate = useNavigate()
	const [dishes, setDishes] = useState({});
	const [values, setValues] = useState(
		{
			_id: "",
			category: "",
			_ownerId: "",
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
			.then(navigate('/'))


		// console.log("newDish: ", newDish);
		// console.log("_id: ", _id);
		// console.log("dishes: ", dishes);
	};

	const changeHandler = (e) => {
		// console.log(e.target.name, '-', e.target.value);

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
					<input className={styles.input} type="text" name="subtitle" value={values.subtitle} onChange={changeHandler} />
				</div>

				{/* <div className={styles.formInput}>
					<label className={styles.label}>Category:</label>
					<input className={styles.input} type="text" name="category" value={values.category} onChange={changeHandler} />
				</div> */}

				<div className={styles.formInput}>
					<label className={styles.label}>Category:</label>
					<select className={styles.selectAuthor} name='author' value={values.author} onChange={changeHandler}>
						<option value="main-dishes">Main Dish</option>
						<option value="appetizers">Appetizer</option>
						<option value="salads">Salad</option>
						<option value="desserts">Dessert</option>
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
					<button className={styles.buttonSubmit} type="submit">Create</button>
				</div>
			</form>
		</div>
	);
}


export default CreateDishForm;

