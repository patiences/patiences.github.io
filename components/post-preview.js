import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/writing/${slug}`} href="/writing/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 text-slate-700">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 post-content">{excerpt}</p>
    </div>
  )
}
