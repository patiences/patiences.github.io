import { getAllPosts } from '../lib/api'
import Layout from '../components/layout'
import Container from '../components/container'
import PostPreview from '../components/post-preview'
import Header from '../components/header'


export default function Writing({ allPosts }) {
  return (
    <>
      <Layout>
        <Container>
          <Header />
          {allPosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
          
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
