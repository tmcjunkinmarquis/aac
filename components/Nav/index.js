import Link from 'next/link';
import './Nav.css'


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
    <Link href="/messageUs">
      <a title="Message Us Page">Message Us</a>
    </Link></div>
)

export default Nav