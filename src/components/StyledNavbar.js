import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="./"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        home
      </NavLink>
      <NavLink
        to="./About"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to="./Products"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
    </nav>
  )
}

export default Navbar
