import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"


const Header = (props) => {
    const {heading} = props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
          <div className="container">
            <a href="/" className="navabr-brand text-white">{heading}</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">Add</Link>
                    </li>
                </ul>
            </div>
          </div>
      </nav>
    )
}

Header.defaultProps = {
    heading: "My App"

}

Header.propTypes = {
    heading: PropTypes.string.isRequired
}
export default Header;