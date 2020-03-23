import React from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'

export default () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => {
    return state.posts.fetchPosts
  })

  if (!posts) {
    return (
      <button
        className='btn btn-primary'
        onClick={() => dispatch(fetchPosts())}
      >
        Load...
      </button>
    )
  }
  return posts.map(post => <Post post={post} key={post.id} />)
}
