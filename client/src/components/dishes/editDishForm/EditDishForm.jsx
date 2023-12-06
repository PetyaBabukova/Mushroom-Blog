import styles from './EditDishForm.module.css';
import * as dishService from '../../../services/dishService';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as validations from '../../../lib/validations'; 

function EditDishForm() {
	const navigate = useNavigate();
	const { dishId } = useParams();
	const [dish, setDish] = useState({
		category: "",
		image: "",
		ingredients: "",
		instructions: "",
		shortDescription: "",
		subtitle: "",
		title: "",
	});
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (dishId) {
			dishService.getOne(dishId)
				.then(searchedDish => setDish(searchedDish))
		}
	}, [dishId]);

	const onEditDishSubmit = async (e) => {
		e.preventDefault();

		let validationErrors = {};
		Object.keys(dish).forEach(key => {
			const isImageField = key === 'image';
			const error = validations.validateProfileField(dish[key], isImageField);
			if (error) {
				validationErrors[key] = error;
			}
		});

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return; 
		}

		try {
			await dishService.update(dishId, dish);
			navigate(`/${dishId}/details`);
		} catch (error) {
			console.log("Error updating dish:", error);
		}
	};

	const changeHandler = (e) => {
		setDish(state => ({
			...state,
			[e.target.name]: e.target.value
		}));
		setErrors({ ...errors, [e.target.name]: "" }); 
	};

	return (
		<div className={styles.createDish}>
			<h2 className={styles.h2}>Edit Dish</h2>
			<form onSubmit={onEditDishSubmit}>

				<div className={styles.formInput}>
					<label className={styles.label} >Title:</label>
					<input className={styles.input}
						type="text"
						name="title"
						value={dish.title}
						onChange={changeHandler}
					/>
                {errors.title && <div className={styles.errorMsg}>{errors.title}</div>}
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Subtitle:</label>
					<input className={styles.input} 
					type="text" 
					name="subtitle" 
					value={dish.subtitle} 
					onChange={changeHandler} 
					/>
                {errors.subtitle && <div className={styles.errorMsg}>{errors.subtitle}</div>}
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Category:</label>
					<select className={styles.selectCategory} 
					name='category' 
					value={dish.category} 
					onChange={changeHandler}
					>
						<option value="main-dishes">Main Dish</option>
						<option value="appetizers">Appetizer</option>
						<option value="soups">Soup</option>
						<option value="salads">Salad</option>
						<option value="desserts">Dessert</option>
					</select>
					{errors.category && <div className={styles.errorMsg}>{errors.category}</div>}
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Image URL:</label>
					<input className={styles.input} 
					type="text" 
					name="image" 
					value={dish.image} 
					onChange={changeHandler} 
					/>
                {errors.image && <div className={styles.errorMsg}>{errors.image}</div>}
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Ingredients:</label>
					<input className={styles.input} 
					type="text" 
					name="ingredients" 
					value={dish.ingredients} 
					onChange={changeHandler} 
					/>
                {errors.ingredients && <div className={styles.errorMsg}>{errors.ingredients}</div>}
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Short Description:</label>
					<textarea className={styles.textarea} 
					name="shortDescription" 
					value={dish.shortDescription} 
					onChange={changeHandler} 
					/>
                {errors.shortDescription && <div className={styles.errorMsg}>{errors.shortDescription}</div>}
				</div>

				<div className={styles.formInput}>
					<label className={styles.label}>Instructions:</label>
					<textarea className={styles.textarea} 
					name="instructions" 
					value={dish.instructions} 
					onChange={changeHandler} 
					/>
                {errors.instructions && <div className={styles.errorMsg}>{errors.instructions}</div>}
				</div>

				<div className={styles.buttonContainer}>
					<button className={styles.buttonSubmit} type="submit">Edit</button>
				</div>
			</form>
		</div>
	);
};

export default EditDishForm;

