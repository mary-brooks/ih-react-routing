import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
      <ul>
        {/* In react we cannot use a tags because they reload the application, instead we use Link */}
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link> */}

        {/* NavLink knows if a link is active which allows us to do conditional rendering */}
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
