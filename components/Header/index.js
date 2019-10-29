import Nav from '../Nav'
import Link from 'next/link'
import logo from '../../public/logo.jpeg'
import './Header.css'


const Header = () => (
  <div className='Header' >
    <Link href='/'>
      <img src={logo} alt='AAC' />
    </Link>
    
    <Nav/>
  </div>
);

export default Header;