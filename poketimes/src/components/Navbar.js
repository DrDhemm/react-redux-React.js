import React from 'react'
// NavLink for additional style active, Link for only no-request link
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Link exact='true' to='/' className="brand-logo" style={{margin:0}}>ReactRouter App</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link exact="true" to="/">Home</Link></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar