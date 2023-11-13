import { useEffect, useState,  } from 'react';
import styles from './DishDetails.module.css';
import {useParams} from 'react-router-dom';
import * as dishService from '../../services/dishService';

function DishDetails() {

    const [dish, setDish] = useState({});
    const {id} = useParams()
    console.log(id);

    useEffect(() => {
        dishService.getOne(id)
            .then(searchedDish=>setDish(searchedDish[0]))
            console.log(dish);
    }, [id]);

    const editBtnClickHandler = ()=>{
      
    }

    return (
        <div className={styles.dishDetailsContainer}>
            <div className={styles.imageContainer}>
        <img src={dish.image} alt='Dish Image' />
      </div>
      <div className={styles.details}>
        <h2 className={styles.dishTitle}> {dish.title} </h2>
        <p className={styles.ingradients}> <span className={styles.ingradientsWord}>Ingradients: </span>{dish.ingredients}</p>
        <p className={styles.ingradients}><span className={styles.ingradientsWord}>Instructions: </span>{dish.description}</p>
        <h4 className={styles.author}>{dish.author}</h4>
        <div className={styles.actions}>
          <button className={styles.actionBtn}>Create</button>
          <button className={styles.actionBtn}>Edit</button>
          <button className={styles.actionBtn}>Delete</button>
          <button className={styles.actionBtn}>Like</button>
        </div>
        <div className={styles.rating}>
          <span className={styles.ratingContent}>Likes: {dish.rating}</span>
          {/* <span className={styles.dishes}>Dishes</span> */}
        </div>
      </div>
        </div>
    );
}

export default DishDetails;
