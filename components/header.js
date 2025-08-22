import Link from 'next/link'
import { useRouter } from "next/router";


export default function Header() {
  const router = useRouter();
  return (
    <section className="flex-col md:flex-row items-center">
      <h1 className="text-7xl md:text-8xl tracking-tighter leading-tight hello">
        hi, i'm patience!
      </h1>
      <div className="links md:text-3xl flex flex-wrap">
        <Link as="/" href="/">
          <a className={router.pathname == "/" ? "pr-8 active" : "pr-8"}>home</a>
        </Link>
        <Link as="/writing" href="/writing">
          <a className={router.pathname.startsWith("/writing") ? "pr-8 active" : "pr-8"}>writing</a>
        </Link>
        <Link href="http://github.com/patiences">
          <a className="pr-8">github</a>
        </Link>
        <Link href="http://linkedin.com/in/patienceshyu">
          <a className="pr-8">linkedin</a>
        </Link>
        <Link href="mailto:patienceshyu@gmail.com">
          <a className="pr-8">email</a>
        </Link>
      </div>  
    </section>
  )
}
