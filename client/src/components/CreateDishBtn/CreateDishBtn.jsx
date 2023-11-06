import React from 'react';
import styles from './CreateDishBtn.module.css';

function CreateDishBtn(
  onCreateDishBtn
) {
  return (
    <button className={styles.createDishButton}>
      Create Dish
    </button>
  );
}

export default CreateDishBtn;