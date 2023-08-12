import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import postsStyle from './posts.scss'

function Posts() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [posts, setPosts] = useState([])
    const [errorFields, setErrorFields] = useState({})

    function submit(e) {
        e.preventDefault()
    }

    function setTitleFunction(e) {
        // Note: Validate this first
        setTitle(e.target.value)
    }
    function setDescriptionFunction(e) {
        // Note: Validate this first
        setDescription(e.target.value)
    }

    return (
        <>
            <form onSubmit={submit}>
                <h1>Create Post</h1>

                <p>{title}</p>
                <p>{description}</p>

                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title" type="text" 
                        placeholder="Title" 
                        onChange={e => setTitleFunction(e)}
                    />
                    <p>
                        <small>{errorFields.titleError}</small>
                    </p>
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        id="description" rows="3" 
                        placeholder="Description"
                        onChange={e => setDescriptionFunction(e)}
                    ></textarea>
                    <p>
                        <small>{errorFields.descriptionError}</small>
                    </p>
                </div>
                <div className="form-control">
                    <Button variant='outline-success'>
                        Submit
                    </Button>
                </div>
            </form>
        </>
    );
}

export default Posts;