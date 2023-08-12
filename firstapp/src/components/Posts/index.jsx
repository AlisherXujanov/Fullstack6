import { Row, Col, Button, Container, Accordion } from 'react-bootstrap'
import { useState } from 'react'
import postsStyle from './posts.scss'



function Posts() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [posts, setPosts] = useState([])
    const [errorFields, setErrorFields] = useState({})

    function submit(e) {
        e.preventDefault()

        if (validated()) {
            const newPost = {
                title: title,
                description: description
            }
            setPosts([...posts, newPost])
        }
    }

    function validated() { }


    function setTitleFunction(e) {
        const value = e.target.value
        const titlePattern = /^[a-zA-Z0-9 ]*$/
        if (!titlePattern.test(value)) {
            return setErrorFields({
                titleError: 'Title must be alphanumeric'
            })
        } else {
            setErrorFields({
                titleError: ""
            })
        }
        setTitle(value)
    }


    function setDescriptionFunction(e) {
        const value = e.target.value
        setDescription(value)
    }

    return (
        <div style={postsStyle}>
            <Container className='main-posts-body'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Create a new post</Accordion.Header>
                        <Accordion.Body>
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
                                        <small className='error'>{errorFields.titleError}</small>
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
                                        <small className='error'>{errorFields.descriptionError}</small>
                                    </p>
                                </div>
                                <div className="form-control">
                                    <Button variant='outline-success'>
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <hr />


            </Container>
        </div>
    );
}

export default Posts;