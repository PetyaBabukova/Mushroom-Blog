import { useNavigate } from 'react-router-dom';
import * as commentService from '../../../services/commentService';
import styles from './CommentItem.module.css';

function CommentItem({ comment, chef, _id, dishId, onDelete }) {
    const navigate = useNavigate();
    
    const commentId = _id
    const onCommentDeleteClick = async () => {
        const isConfirmed = window.confirm(`Do you want to delete this comment?`);
        if (isConfirmed) {
            try {
                await commentService.del(commentId);
                onDelete(commentId); // Call the function passed from the parent to handle deletion
                navigate(`/${dishId}/details`); // Redirect to dish details
            } catch (error) {
                console.error("Error deleting comment: ", error);
            }
        }
    };

    return (
        <li className={styles.commentLi}>
            <p>{chef}: <span className={styles.comment}>{comment}</span> </p>
            <button className={styles.deleteCommentBtn} onClick={onCommentDeleteClick}>
                Delete Comment
            </button>
        </li>
    );
}

export default CommentItem;
