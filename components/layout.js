import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="intro">
        <main>{children}</main>
      </div>
    </>
  )
}
