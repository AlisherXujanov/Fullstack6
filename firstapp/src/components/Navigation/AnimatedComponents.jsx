import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navigation from './index'
import Home from "../Home.jsx"
import About from "../About.jsx"
import NotFound from "../NotFound"
import Posts from '../Posts'
import PostDetails from '../Posts/PostDetails.jsx'
import Translation from '../Translation.jsx'
import Email from '../Email.jsx'

export default function AnimatedComponents({ dispatch }) {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About dispatch={ dispatch } />} />
          <Route path="posts" element={<Posts />} />
          <Route path="translation" element={<Translation />} />
          <Route path="email" element={<Email />} />
          <Route path="post-details/:id" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
