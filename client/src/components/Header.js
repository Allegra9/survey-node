import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Header
          </a>
          <ul className="right">
            <li>
              <a>Login w Google+</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
