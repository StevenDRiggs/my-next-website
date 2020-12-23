import Link from 'next/link'


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/portfolio'>
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>WTF</a>
          </Link>
        </li>
        <li>
          <Link href='/resume'>
            <a>Resume</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}


export default Navbar