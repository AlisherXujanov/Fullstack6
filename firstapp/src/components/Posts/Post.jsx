import postStyle from './post.scss'
import eiffel from '../../Assets/Images/eiffel.png'
import eye from '../../Assets/Images/eye.png'

function Post(props) {
    return (
        <div style={postStyle} className="post">
            <img src={''} width="100%" height="150" />
            <div className="info">
                <h5>{props.title}</h5>
                <p id='post-description-p'>
                    {props.description}
                </p>
                <div className="footer">
                    <div>
                        <img id='post-logo' src={eiffel} width="40" height="40" />
                        <span className="name">{props.location + " - "} {props.date}</span>
                    </div>
                    <div>
                        <img id='post-views' src={eye} width="25" height="15" />
                        {props.views}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

