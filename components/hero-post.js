import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function HeroPost({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <section>
      <div className="md:grid md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <div className="mb-4 md:mb-0 text-lg text-slate-700 post-content">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="post-title mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/writing/${slug}`} href="/writing/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div>
            <p className="text-lg leading-relaxed mb-4 post-content">{excerpt}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
