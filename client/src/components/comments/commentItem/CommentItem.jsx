import { Link, useNavigate } from 'react-router-dom';
import * as commentService from '../../../services/commentService';
import styles from './CommentItem.module.css';
import { useContext } from 'react';
import AuthContext from '../../../contexts/authContext';

function CommentItem({ comment, chef, _id, dishId, _ownerId, onDelete }) {
    const navigate = useNavigate();
    const {userId} = useContext(AuthContext)

    const commentId = _id

    const onCommentDeleteClick = async () => {
        const isConfirmed = window.confirm(`Do you want to delete this comment?`);
        if (isConfirmed) {
            try {
                await commentService.del(commentId);
                onDelete(commentId); 
                navigate(`/${dishId}/details`); 
            } catch (error) {
                console.error("Error deleting comment: ", error);
            }
        }
    };

    return (
        <li className={styles.commentLi}>

            <div className={styles.commentBlock}>
            <p>{chef}: <span className={styles.comment}>{comment}</span> </p>
            </div>

            {userId === _ownerId && 
            <div className={styles.commentActions}>
            <Link to={`/${commentId}/edit-comment`} className={styles.editCommentLink}>Edit Comment</Link>
            <button className={styles.deleteCommentBtn} onClick={onCommentDeleteClick}>
                Delete Comment
            </button>
            </div>
            }

        </li>
    );
}

export default CommentItem;
