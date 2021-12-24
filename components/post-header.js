import DateFormatter from '../components/date-formatter'
import Tag from '../components/tag'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, date, tags }) {
  return (
    <>
      <div className="mb-4 text-lg text-slate-700 post-content">
        <DateFormatter dateString={date} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-12">
        {tags.map((tag) => (
          <Tag
            key={tag}
            value={tag}
          />
        ))}
      </div>
    </>
  )
}
