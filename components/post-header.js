import DateFormatter from '../components/date-formatter'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, date }) {
  return (
    <>
      <div className="mb-6 text-lg text-slate-700 post-content">
        <DateFormatter dateString={date} />
      </div>
      <PostTitle>{title}</PostTitle>
    </>
  )
}
