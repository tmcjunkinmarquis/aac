import React from 'react'
import Layout from '../layouts/Blog'// import { getPosts } from 'api/posts'
import Link from "next/link";
import { getPosts } from '../api/posts'

import Post from '../components/Post'

const Index = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map(p => (
        <Post key={p.title} post={p} />
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default Index