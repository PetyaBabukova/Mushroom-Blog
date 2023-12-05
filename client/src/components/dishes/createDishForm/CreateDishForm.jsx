import styles from './CreateDishForm.module.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as dishService from '../../../services/dishService';
import * as validations from '../../../lib/validations';
import AuthContext from '../../../contexts/authContext';

function CreateDishForm() {
    const { userId, username } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
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
    };

    const [values, setValues] = useState(initialValues);

    const onCreateDishSubmit = async (e) => {
		e.preventDefault();
	
		let validationErrors = {};
		Object.keys(values).forEach(key => {
			if (key !== 'author' && key !== '_ownerId') {
				const isImageField = key === 'image';
				const error = validations.validateProfileField(values[key], isImageField);
				if (error) {
					validationErrors[key] = error;
				}
			}
		});
	
		const formData = {
			...values,
			_ownerId: userId,
			author: username
		};
	
		const hasErrors = Object.values(validationErrors).some(error => error !== '');
		console.log("Validation Errors:", validationErrors); 
		console.log("Has Errors:", hasErrors); 
	
		if (hasErrors) {
			setErrors(validationErrors);
			return; 
		}
	
		try {
			await dishService.create(formData);
			navigate('/');
		} catch (error) {
			console.error("Error creating dish: ", error);
		}
	};
	
    const changeHandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    return (
		<div className={styles.createDish}>
			<h2 className={styles.h2}>Create Dish</h2>
			<form onSubmit={onCreateDishSubmit}>

            <div className={styles.formInput}>
                <label className={styles.label}>Title:</label>
                <input
                    className={styles.input}
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={changeHandler}
                />
                {errors.title && <div className={styles.errorMsg}>{errors.title}</div>}
            </div>

			<div className={styles.formInput}>
				<label className={styles.label}>Subtitle:</label>
				<input className={styles.input} 
                type="text" 
                name="subtitle" 
                value={values.subtitle} 
                onChange={changeHandler} 
            	/>
            	{errors.subtitle && <div className={styles.errorMsg}>{errors.subtitle}</div>}
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Category:</label>
				<select className={styles.selectCategory} 
                name='category' 
                value={values.category} 
                onChange={changeHandler}>
					<option value="null" >Please Select Category</option>
					<option value="main-dishes" >Main Dish</option>
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
                value={values.image} 
                onChange={changeHandler} 
                />
                {errors.image && <div className={styles.errorMsg}>{errors.image}</div>}
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Ingredients:</label>
				<input className={styles.input} 
                type="text" 
                name="ingredients" 
                value={values.ingredients} 
                onChange={changeHandler} 
                />
                {errors.ingredients && <div className={styles.errorMsg}>{errors.ingredients}</div>}
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Short Description:</label>
				<textarea className={styles.textarea} 
                name="shortDescription" 
                value={values.shortDescription} 
                onChange={changeHandler} 
                />
                 {errors.shortDescription && <div className={styles.errorMsg}>{errors.shortDescription}</div>}
			</div>

			<div className={styles.formInput}>
				<label className={styles.label}>Instructions:</label>
				<textarea className={styles.textarea} 
                name="instructions" 
                value={values.instructions} 
                onChange={changeHandler} 
                />
                {errors.instructions && <div className={styles.errorMsg}>{errors.instructions}</div>}
			</div>

			<div className={styles.buttonContainer}>
				<button className={styles.buttonSubmit} type="submit">Create</button>
			</div>

			</form>
		</div>
	);
}

export default CreateDishForm;