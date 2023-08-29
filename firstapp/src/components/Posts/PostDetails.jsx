import React from 'react'
import './posts.scss'
import { useParams } from 'react-router-dom'
import { POSTS_KEY_LS } from './usecases.js'
import img from '../../Assets/Images/1.jpg'
import { motion } from 'framer-motion'

export default function PostDetails() {
  const { id } = useParams()
  const allPosts = JSON.parse(localStorage.getItem(POSTS_KEY_LS) || "[]")
  console.log(allPosts)
  console.log(id)
  const post = allPosts.find(el => id == el.id)

  const initialMotion = { transform: 'scale(0)' }
  const animate = { transform: 'scale(1)' }
  const exit = { transform: 'scale(0) rotate(720deg)' }

  return (
    <motion.div
      className='post-details'
      initial={initialMotion}
      animate={animate}
      exit={exit}
    >
      <div>
        <img src={img} alt='post' />
      </div>
      <div>
        <h1> {post.title}</h1>
        <p>
          <em>{post.description}</em>
        </p>
        <p>
          At: <b>{post.location}</b>
        </p>
        <p>
          On: <b>{post.date}</b>
        </p>
        <p>
          Views: <b>{post.views}</b>
        </p>
      </div>
    </motion.div>
  )
}
