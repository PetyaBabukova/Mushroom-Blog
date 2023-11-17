import { useEffect, useState, } from 'react';
import styles from './DishDetails.module.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as dishService from '../../services/dishService';
import { Button } from 'bootstrap';

function DishDetails() {

  const [dish, setDish] = useState({});
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dishService.getOne(id)
      .then(searchedDish => setDish(searchedDish[0]))
    // console.log(dish);
  }, [id]);

  const deleteBtnClickHandler = (id) => {
    dishService.deleteDish(id)
    .then((res)=> res.json() )
      .then((result) => {
        setDish({})
        console.log(result);
        navigate('/')
      })
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
          <Link to='/create-comment' className={styles.actionBtn}>Comment</Link>
          <Link to={`/${dish._id}/edit-dish`} className={styles.actionBtn}>Edit</Link>
          <button className={styles.actionBtn} onClick={deleteBtnClickHandler}>Delete</button>
        {/* <button className={styles.actionBtn}>Like</button> */}
        </div>
        <div className={styles.comments}>
          <h5 className={styles.ratingContent}>Comments: {dish.rating}</h5>
          <ul>
           
           <li>
               <p>Pesho: Very delisious!</p>
           </li>

  
   </ul>
          {/* <span className={styles.dishes}>Dishes</span> */}
        </div>
      </div>
    </div>
  );
}

export default DishDetails;
