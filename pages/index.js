import Container from '../components/container'
import IntroBlurb from '../components/intro-blurb'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Patience Shyu, Software Engineer</title>
        </Head>
        <Container>
          <Header />
          <IntroBlurb />
        </Container>
      </Layout>
    </>
  )
}
