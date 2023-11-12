import styles from './CreateDishBtn.module.css';
import { Link } from 'react-router-dom';

function CreateDishBtn() {
  return (
    <Link to='/create-dish' className={styles.createDishLink}>
      <button className={styles.createDishButton}>
        Create Dish
      </button>
    </Link>
  );
}

export default CreateDishBtn;
