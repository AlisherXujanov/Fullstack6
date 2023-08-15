import postStyle from './post.scss'

function Post({ title, description }) {
    return (
        <div style={postStyle} className="post">
            <h3>{title}</h3>
            <p>
                <em>{description}</em>
            </p>
        </div>
    );
}

export default Post;

