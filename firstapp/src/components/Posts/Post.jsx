import postStyle from './post.scss'

function Post(props) {

    return (
        <div className="post">
            <img className='post-image' src={''} alt="post-img" />
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <img src={''} />
                    <p>{props.owner}</p>
                    <p>{props.date}</p>
                </div>
                <div className="post-bottom-right">
                    <img src={''} />
                    <p>{props.views}</p>
                </div>
            </div>
        </div>
    );
}

export default Post;

