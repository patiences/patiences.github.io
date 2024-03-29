export default function PostTitle({ children }) {
  return (
    <h1 className="post-title text-4xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
      {children}
    </h1>
  )
}
