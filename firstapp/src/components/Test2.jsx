import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

export default function Test2() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [errors, setErrors] = useState({})

  function submit(e) {
    e.preventDefault()
    console.log(title, desc)
  }

  function setTitleFunction(e) {
    const value = e.target.value
    const titlePattern = /^[a-zA-Z0-9 ]*$/
    if (!titlePattern.test(value)) {
      return setErrors({
        titleError: 'Title must be alphanumeric'
      })
    } else {
      setErrors({
        titleError: ""
      })
    }
    setTitle(value)
  }

  function setDescriptionFunction(e) {
    const value = e.target.value
    setDesc(value)
  }

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="name">Title</label>
          <input
            id='name'
            onChange={setTitleFunction}
            type="text"
            required
            placeholder='Title'
          />
          <p>
            <em className='text-danger'>{errors.titleError}</em>
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="desc">Description</label>
          <textarea
            id='desc'
            onChange={setDescriptionFunction}
            required
            placeholder='Description'
            cols={21}
            rows={3}
          ></textarea>
          <p>
            <em className='text-danger'>{errors.descError}</em>
          </p>
        </div>
        <div className="form-control">
          <Button type='submit' variant='success'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
