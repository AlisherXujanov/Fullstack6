import { Container, Accordion } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import postsStyle from './posts.scss'
import Pagination from './Pagination.jsx'
import locations from '../../locations.js'

function Posts() {
    const POSTS_KEY_LS = 'posts'
    const [title, setTitle] = useState('')
    const [country, setCountry] = useState()
    const [description, setDescription] = useState('')
    const [posts, setPosts] = useState(getAllPostsFromLS())
    const [errorFields, setErrorFields] = useState({})

    function updageViewsForAllPosts() {
        const updatedPosts = posts.map(post => {
            post.views = post.views + 1
            return post
        })
        setPosts(updatedPosts)
    }
    useEffect(() => {
        updageViewsForAllPosts()
    }, [])

    function submit(e) {
        e.preventDefault()

        if (validated()) {
            const newPost = {
                id: new Date().getTime(),
                title: title,
                description: description,
                views: 0,
                date: new Date().toLocaleDateString(),
                location: country,
            }
            setPosts([...posts, newPost])
            e.target.reset()
        }
    }

    function setAllPostsIntoLS(posts) {
        localStorage.setItem(POSTS_KEY_LS, JSON.stringify(posts))
    }

    function getAllPostsFromLS() {
        const all_posts = localStorage.getItem(POSTS_KEY_LS)
        return JSON.parse(all_posts) || []
    }

    useEffect(() => {
        setAllPostsIntoLS(posts)
    }, [posts])

    function validated() {
        const result = posts.find(post => post.title == title)

        if (result) {
            setErrorFields({ titleError: 'This title is already in use!' })
            return false
        } else if (title.length == 0) {
            setErrorFields({ titleError: 'This field is required!' })
            return false
        } else if (!description) {
            setErrorFields({ descriptionError: 'This field is required!' })
            return false
        } else if (!country) {
            setErrorFields({ countryError: 'This field is required!' })
            return false
        } else {
            setErrorFields({ titleError: "", descriptionError: "" })
            return true
        }
    }

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

    const initialMotion = { transform: 'translateY(-100vw)' }
    const animate = { transform: 'translateY(0)' }
    const exit = { transform: 'translateY(100vw) scale(0) rotate(720deg)' }


    return (
        <motion.div
            style={postsStyle}
            initial={initialMotion}
            animate={animate}
            exit={exit}
        >
            <Container className='main-posts-body'>
                <Accordion id='my-accordion' className="custom-accordion">
                    <Accordion.Item className="custom-accordion-item" eventKey="0">
                        <Accordion.Header>Create a new post</Accordion.Header>
                        <Accordion.Body className="custom-accordion-body">
                            <form onSubmit={submit}>
                                <h1>Create Post</h1>

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
                                    <label htmlFor="where">Where</label>
                                    <select
                                        id="country-select"
                                        value={country}
                                        onChange={e => setCountry(e.target.value)}
                                    >
                                        <option value="">Select a location</option>
                                        {
                                            locations.map((location, idx) => {
                                                return <option key={idx} value={location}>{location}</option>
                                            })
                                        }
                                    </select>
                                    <p>
                                        <small className='error'>{errorFields.countryError}</small>
                                    </p>
                                </div>
                                <div className="form-control">
                                    <button>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <hr />

                <div>
                    {posts.length > 0 ?
                        <Pagination
                            elements={posts}
                            elClass="post"
                            containerClass="all-posts"
                            itemsPerPage={6}
                        />
                        : <h4 style={{ textAlign: 'center' }}>
                            <em>No posts today!!!</em>
                        </h4>}
                </div>

            </Container>
        </motion.div>
    );
}

export default Posts;