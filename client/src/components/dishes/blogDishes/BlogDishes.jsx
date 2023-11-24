import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import DishCard from '../dishViewCard/DishCard';
import styles from './BlogDishes.module.css';

import * as dishService from '../../../services/dishService';
import * as chefService from '../../../services/chefServise';


function BlogDishes() {
  const [dishes, setDishes] = useState([]);
  const {category} = useParams();
  const {userFirstName} = useParams();
  // console.log("category from BlogDishes", category);

  useEffect(() => {
    dishService.getAll(category)
      .then(dishes => {
        setDishes(Object.values(dishes))
        // console.log(dishes);
      })
  }, [category]);

  useEffect(() => {
    chefService.getChefRecipies(userFirstName)
      .then(dishes => {
        setDishes(Object.values(dishes))
        // console.log(dishes);
      })
  }, [userFirstName]);

  
  return (
    <div className={styles.blogDishes}>
      {dishes.map((dish) => (
        <DishCard
			key={dish._id}
      id={dish._id}
			title={dish.title}
			ingredients={dish.ingredients}
			description={dish.description}
			author={dish.author}
			image={dish.image}
			optionalExtras={dish.optionalExtras}
			subtitle={dish.subtitle}
			shortDescription={dish.shortDescription}

        />

      ))}

    </div>
  );
}

export default BlogDishes;
