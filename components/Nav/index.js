import Link from 'next/link';
import './Nav.scss'


const Nav = ({ children, title = 'This is the default navigation' }) => (
  <div className="Nav" >
    <Link href="/index">
      <a title="Home Page">Home</a>
    </Link>
    <Link href="/about">
      <a title="About Page">About</a>
    </Link>
    <Link href="/mycart">
      <a title="My Cart Page">Cart</a>
    </Link>
    <Link href="/profile">
      <a title="Profile Page">Profile</a>
    </Link>
    I am the navigation component</div>
)

export default Nav