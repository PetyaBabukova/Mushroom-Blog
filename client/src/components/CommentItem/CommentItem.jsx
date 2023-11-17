import styles from './CommentItem.module.css'

function CommentItem({comment, chef}) {

    console.log(comment);

    return (
      
            <li>
                <p className="comment">{chef}: {comment}</p>
            </li>
        

    )
};

export default CommentItem;