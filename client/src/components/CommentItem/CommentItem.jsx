import styles from './CommentItem.module.css'

function CommentItem({ chef, text }) {
    return (
        <ul>
            <li key={_id} >
                <p className="comment">{chef}: {text}</p>
            </li>
        </ul>

    )
}