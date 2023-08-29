import postStyle from './post.scss'
import eiffel from '../../Assets/Images/eiffel.png'
import eye from '../../Assets/Images/eye.png'
import img from '../../Assets/Images/1.jpg'
import { Link } from 'react-router-dom'

function Post({ post }) {
    const postDetailsUrl = `/post-details/${post.id}`
    return (
        <Link to={postDetailsUrl}>
            <div style={postStyle} className="post">
                <img src={img} width="100%" height="150" />
                <div className="info">
                    <h5>{post.title}</h5>
                    <p id='post-description-p'>
                        {post.description}
                    </p>
                    <div className="footer">
                        <div>
                            <img id='post-logo' src={eiffel} width="40" height="40" />
                            <span className="name">{post.location + " - "} {post.date}</span>
                        </div>
                        <div>
                            <img id='post-views' src={eye} width="25" height="15" />
                            {post.views}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Post;

