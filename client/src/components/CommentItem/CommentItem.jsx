import styles from './CommentItem.module.css'

function CommentItem({comment, chef}) {

    console.log(comment);

    return (
      
            <li className={styles.commentLi}>
                <p>{chef}: <span className={styles.comment}>{comment}</span> </p>
            </li>
        

    )
};

export default CommentItem;