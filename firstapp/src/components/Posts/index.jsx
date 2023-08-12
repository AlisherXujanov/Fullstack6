import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import postsStyle from './posts.scss'

function Posts() {
    return (
        <>
            <form>
                <h1>Create Post</h1>

                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Title" />
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="3" placeholder="Description"></textarea>
                </div>
                <Button variant='outline-success'>Submit</Button>
            </form>
        </>
    );
}

export default Posts;