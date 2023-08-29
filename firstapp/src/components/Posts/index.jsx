import { Container, Accordion } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import postsStyle from './posts.scss'
import Pagination from './Pagination.jsx'
import locations from '../../locations.js'
import { 
    updateViewsForAllPosts,
    setAllPostsIntoLS,
    getAllPostsFromLS,
    validate
} from './usecases.js'


// HOMEWORK
// 1. Get all useState info into useReducer as a single state object
// RU: Всю информацию useState получить в useReducer в виде одного объекта состояния

// 2. Fill the home page with all posts that are available in the state
// RU: Заполнить домашнюю страницу всеми постами, которые есть в состоянии

// 3. In the posts page, change the page-name into create-post and only leave the 
//    create-post-form in there 
// RU: На странице постов изменить имя страницы на create-post и оставить там 
//    только форму создания поста
// 4. Write 5000 words in monkeytype in 450k
// RU: Написать 5000 слов в monkeytype в 450к

// Create your own project that is similar to this and push it into github
// RU: Создайте свой собственный проект, похожий на этот, и отправьте его в github

// SEE YOU ON 5th OF SEPTEMBER
// RU: УВИДИМСЯ 5 СЕНТЯБРЯ

function Posts() {
    const [title, setTitle] = useState('')
    const [country, setCountry] = useState()
    const [description, setDescription] = useState('')
    const [posts, setPosts] = useState(getAllPostsFromLS())
    const [errorFields, setErrorFields] = useState({})

    useEffect(() => { setPosts(updateViewsForAllPosts(posts)) }, [])

    function submit(e) {
        e.preventDefault()

        if (validatedInfo()) {
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

    useEffect(() => { setAllPostsIntoLS(posts) }, [posts])

    function validatedInfo() {
        const validatedObj = validate(posts, title, description, country)
        setErrorFields(validatedObj.result)
        return validatedObj.validated
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