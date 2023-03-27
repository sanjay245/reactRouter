import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>page not fount</p>
      <Link to="/" className="btn">
        Go to home
      </Link>
    </section>
  )
}
export default Error
