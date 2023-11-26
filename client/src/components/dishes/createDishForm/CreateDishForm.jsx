import styles from './CreateDishForm.module.css';

import * as dishService from '../../../services/dishService';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';

import AuthContext from '../../../contexts/authContext';


function CreateDishForm() {
	const {_id, username} = useContext(AuthContext)
	const navigate = useNavigate()
	const [dishes, setDishes] = useState({});
	const initialValues = {
		category: "",
		author: "",
		_ownerId: "",
		image: "",
		title: "",
		subtitle: "",
		shortDescription: "",
		ingredients: "",
		instructions: ""
	}
	
	const [values, setValues] = useState(initialValues)

	// const onCreateDisdSubmit = async (values) =>{
	// 	try {
	// 		const result = await dishService.create({
	// 			category: values.category,
	// 			author: username,
	// 			_ownerId:_id,
	// 			image:values.image,
	// 			title:values.title,
	// 			subtitle: values.subtitle,
	// 			shortDescription: values.shortDescription,
	// 			ingredients: values.ingredients,
	// 			description: values.description,
	// 		})
	// 		console.log('Created Dish:', result);
	// 	} catch (error) {
	// 		console.error('Error in creating dish:', error);
	// 	}
	// }


	const onCreateDisdSubmit = async (e) => {
		e.preventDefault();
	
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		data._ownerId = _id;
		data.author = username;
	
		try {
			const newDish = await dishService.create(data);
			console.log("newDish: ", newDish);
			setDishes(state => [...state, newDish]);
		} catch (error) {
			console.error("Error creating dish: ", error);
		} finally {
			navigate('/');
		}
	};
	
	const changeHandler = (e) => {
			// console.log(e.target.name, '-', e.target.value);
		
			setValues(state => ({
					...state,
					[e.target.name]: e.target.value
					// [e.target.name]: == "checkbox" ?e.target.checked : e.target.value //if we whant to use one handler for all, including radio btns
				}))
			}
			// const { values, changeHandler, onSubmit } = useForm(initialValues, onCreateDisdSubmit);


	return (
		<div className={styles.createDish}>
			<h2 className={styles.h2}>Create Dish</h2>
			<form onSubmit={onCreateDisdSubmit}>

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
					<select className={styles.selectCategory} name='category' value={values.category} onChange={changeHandler}>
						<option value="main-dishes">Main Dish</option>
						<option value="appetizers">Appetizer</option>
						<option value="soups">Soup</option>
						<option value="salads">Salad</option>
						<option value="desserts">Dessert</option>
					</select>
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Image URL:</label>
					<input className={styles.input} type="text" name="image" value={values.image} onChange={changeHandler} />
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Ingredients:</label>
					<input className={styles.input} type="text" name="ingredients" value={values.ingredients} onChange={changeHandler} />
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Short Description:</label>
					<textarea className={styles.textarea} name="shortDescription" value={values.shortDescription} onChange={changeHandler} />
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Instructions:</label>
					<textarea className={styles.textarea} name="instructions" value={values.instructions} onChange={changeHandler} />
				</div>



				<div className={styles.buttonContainer}>
					<button className={styles.buttonSubmit} type="submit">Create</button>
				</div>
			</form>
		</div>
	);
}

export default CreateDishForm;