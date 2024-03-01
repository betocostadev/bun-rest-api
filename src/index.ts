import { Elysia } from 'elysia'
import posts from './fake_data/posts'

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3000)

app.get('/posts/:id', ({ params }) => {
  const post = posts.find((post) => post.id === params.id)
  if (!post) return 'Post not found'
  return `Post ID: ${post.id}, Title: ${post.title}, Content: ${post.content}`
})

app.get('/posts', () => {
  console.log(posts)
  return JSON.stringify(posts)
})
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
