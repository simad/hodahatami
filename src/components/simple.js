import React from "react"
import { Link } from "gatsby"
import Cover from "./cover/cover"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`${toggleNav ? `site-head-open` : ``}`}>
      {<Cover props {...props}/>}

      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav className="site-head-left">
              <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </nav>
          <div id="swup" className="site-head-right">
            <ul className="nav" role="menu">
            <li className="nav-work" role="menuitem">
                <Link to={`/work`}>Work</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
      </footer>
    </div>
  )
}

export default Layout
