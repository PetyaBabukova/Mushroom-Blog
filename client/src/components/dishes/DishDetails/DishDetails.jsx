import { useContext, useEffect, useState, } from 'react';
import styles from './DishDetails.module.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as dishService from '../../../services/dishService';
import * as commentService from '../../../services/commentService';

import CommentItem from '../../comments/commentItem/CommentItem';
import AuthContext from '../../../contexts/authContext';

function DishDetails() {
  
  const { dishId } = useParams();
  const [comments, setComments] = useState([]);
  const {userId} = useContext(AuthContext);
  const navigate = useNavigate();
  const [dish, setDish] = useState({});

  useEffect(() => {
    dishService.getOne(dishId)
      .then(searchedDish => setDish(searchedDish))
    // console.log(dish);

    commentService.getAll(dishId)
      .then((comments) => {
        setComments(comments)
      })
    }, [dishId]);
    
    // console.log("comments: ", comments);

    const deleteDishBtnClickHandler = async (dishId) => {
      try {
        const confirmRemoveDish = confirm(`Do you whant to delete ${dish.title}?`)
          await dishService.deleteDish(dishId);
          navigate('/');
      } catch (error) {
          console.error("Error deleting dish: ", error);
          // handle error (show error message to user, etc.)
      }
  };

  const commentDeleteHandler = (commentId) => {
    setComments(currentComments => currentComments.filter(comment => comment._id !== commentId));
};
  
  return (
    <div className={styles.dishDetailsContainer}>
      <div className={styles.imageContainer}>
        <img src={dish.image} alt='Dish Image' />
      </div>
      <div className={styles.details}>
        <h2 className={styles.dishTitle}> {dish.title} </h2>
        <p className={styles.ingradients}> <span className={styles.ingradientsWord}>Ingradients: </span>{dish.ingredients}</p>
        <p className={styles.ingradients}><span className={styles.ingradientsWord}>Instructions: </span>{dish.instructions}</p>
        <h4 className={styles.author}>{dish.author}</h4>
        <div className={styles.actions}>
          <Link to={`/${dish._id}/create-comment`} className={styles.actionBtn}>Comment</Link>

          {userId === dish._ownerId &&
          <>
          <Link to={`/${dish._id}/edit-dish`} className={styles.actionBtn} >Edit</Link>
          <button className={styles.actionBtn} onClick={() => deleteDishBtnClickHandler(dishId)}>Delete</button>
          </>
          
          }
          {/* <button className={styles.actionBtn}>Like</button> */}
        </div>
        <div className={styles.comments}>
          <h5 className={styles.commentsHeading}>Comments: {dish.rating}</h5>
          <ul className={styles.commentsContainer}>
          {comments.map(comment => (<CommentItem key={comment._id} {...comment} onDelete={commentDeleteHandler}/>))}
          </ul >
          {/* <span className={styles.dishes}>Dishes</span> */}
        </div>
      </div>
    </div>
  );
}

export default DishDetails;
