import { Button, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href='/'>
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Haio Blog
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href='/' active={path == '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link href='/about' active={path == '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link href='/projects' active={path == '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <div className='flex md:order-2'>
        <Button gradientDuoTone='redToYellow'>
          <Link to={'/sign-in'}>Sign In</Link>
        </Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default Header;
