import Link from 'next/link';

const navStyle = {
  backgroundColor: "red",
  color: "white",
  width: "100%",
  height: "60px"
};

const Nav = ({ children, title = 'This is the default navigation' }) => (
  <div className="Nav" style={navStyle}>
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
    I am the navigation component</div>
)

export default Nav