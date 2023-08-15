import postStyle from './post.scss'

function Post({ title, description }) {
    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <p>
                <em>{description}</em>
            </p>
        </div>
    );
}

export default Post;

