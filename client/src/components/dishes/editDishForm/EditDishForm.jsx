import styles from './EditDishForm.module.css';

import * as dishService from '../../../services/dishService';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function EditDishForm() {
	const navigate = useNavigate();
	const  { dishId } = useParams()
	const [dish, setDish] = useState(
		{
			author: "",
			category: "",
			image: "",
			ingredients: "",
			instructions: "",
			shortDescription: "",
			subtitle: "",
			title: "",
		});


	useEffect(() => {
		if (dishId) { // Check if dishId is not undefined
			dishService.getOne(dishId)
				.then(searchedDish => setDish(searchedDish))
		}
	}, [dishId]);

	const onEditDishSubmit = async (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));

		try {
			await dishService.update(dishId, data); 
			navigate(`/${dishId}/details`);
		} catch (error) {
			console.log("Error updating dish:", error);
		}
	};

	const changeHandler = (e) => {
		setDish(state => ({
			...state,
			[e.target.name]: e.target.value
		}))
	};

	return (
		<div className={styles.createDish}>
			<h2 className={styles.h2}>Edit Dish</h2>
			<form onSubmit={onEditDishSubmit}>

				<div className={styles.formInput}>
					<label className={styles.label} >Title:</label>
					<input className={styles.input} type="text" name="title" value={dish.title} onChange={changeHandler} />
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Subtitle:</label>
					<input className={styles.input} type="text" name="subtitle" value={dish.subtitle} onChange={changeHandler} />
				</div>

				{/* <div className={styles.formInput}>
					<label className={styles.label}>Category:</label>
					<input className={styles.input} type="text" name="category" value={values.category} onChange={changeHandler} />
				</div> */}

				<div className={styles.formInput}>
					<label className={styles.label}>Category:</label>
					<select className={styles.selectCategory} name='category' value={dish.category} onChange={changeHandler}>
						<option value="main-dishes">Main Dish</option>
						<option value="appetizers">Appetizer</option>
						<option value="soups">Soup</option>
						<option value="salads">Salad</option>
						<option value="desserts">Dessert</option>
					</select>
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Image URL:</label>
					<input className={styles.input} type="text" name="image" value={dish.image} onChange={changeHandler} />
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Ingredients:</label>
					<input className={styles.input} type="text" name="ingredients" value={dish.ingredients} onChange={changeHandler} />
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Short Description:</label>
					<textarea className={styles.textarea} name="shortDescription" value={dish.shortDescription} onChange={changeHandler} />
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Instructions:</label>
					<textarea className={styles.textarea} name="instructions" value={dish.instructions} onChange={changeHandler} />
				</div>

				<div className={styles.buttonContainer}>
					<button className={styles.buttonSubmit} type="submit">Edit</button>
				</div>
			</form>
		</div>
	);
}


export default EditDishForm;

