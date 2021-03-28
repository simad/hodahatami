import React from "react"
import { Link } from "gatsby"
import SocialIcons from "../components/social/socialIcons"
const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
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
              <img className="logo" src={'/hh_logo_white.png'} alt="Logo" />
            </Link>
          </nav>
          <div id="swup" className="site-head-right">
            <ul className="nav" role="menu">
              {/* <li className="nav-insights" role="menuitem">
                <Link to={`/insights`}>Insights</Link>
              </li> */}
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
       <div className="site-foot-container">
        <div>&copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash; Made with ♥ by <a href="https://divisionbyzero.co" target="_blank">Division by Zero</a></div>
         <SocialIcons />
        </div>
      </footer>
    </div>
  )
}

export default Layout
