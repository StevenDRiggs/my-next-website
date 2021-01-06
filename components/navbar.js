import React, { Component } from 'react'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'


class Navbar extends Component {
  wtfMouseEnter = event => {
    event.target.textContent = 'Blog'
  }

  wtfMouseLeave = event => {
    event.target.textContent = 'WTF'
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <ul>
            <Link href='/about'>
              <a>
          <li className={styles.navlink}>
              About
          </li>
              </a>
            </Link>
          <li className={styles.navlink}>
            <Link href='/portfolio'>
              <a>Portfolio</a>
            </Link>
          </li>
          <li className={styles.navlink} onMouseEnter={this.wtfMouseEnter} onMouseLeave={this.wtfMouseLeave}>
            <Link href='/blog'>
              <a>WTF</a>
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link href='/resume'>
              <a>Resume</a>
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link href='/contact'>
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}


export default Navbar
