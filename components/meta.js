import Head from 'next/head'
import { HOME_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        href="/favicons/woman-technologist.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#000000"
      />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;400&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css" />
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>

      <link rel="shortcut icon" href="/favicons/woman-technologist.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Patience Shyu, Senior Software Engineer`}
      />
      <meta property="og:image" content={HOME_IMAGE_URL} />
      <script data-goatcounter="https://patiences.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
    </Head>
  )
}
