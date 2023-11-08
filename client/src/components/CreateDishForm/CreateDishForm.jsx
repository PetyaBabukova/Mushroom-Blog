import styles from './CreateDishForm.module.css';

function CreateArticle() {

    return (
        <div className={styles.createDish}>
            <h2 className={styles.h2} >Create Dish</h2>
            <form >
                <div className={styles.formInput}>
                    <label className={styles.label} >Title</label>
                    <input className={styles.input} type="text" name="title"  />
                </div>
                
                <div className={styles.formInput}>
                    <label className={styles.label}>Subtitle</label>
                    <input className={styles.input} type="text" name="subtitle" />
                </div>

                <div className={styles.formInput}>
                    <label className={styles.label}>Ingradients</label>
                    <input className={styles.input} type="text" name="subtitle" />
                </div>

                <div className={styles.formInput}>
                    <label className={styles.label}>Instructions</label>
                    <textarea className={styles.textarea} name="content"  />
                </div>

                <div className={styles.formInput}>
                    <label className={styles.label}>Author:</label>
                    <input className={styles.input} type="text" name="author"  />
                </div>

                <div className={styles.buttonContainer}>
                <button className={styles.buttonSubmit} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
    }

export default CreateArticle;
