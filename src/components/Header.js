/*
    Using 'React Router' Library in our app allows us to navigate between different pages or components in React, and actually makes these changes to URL of each page or component

    React Router isn't installed with 'create-react-app' by default, so you'll need to install it before start using it

    npm i react-router-dom

    The 'Link' components is used to navigate the different routes on the site 'NavLink' is used to add the sytle attributes to the active routes

    'Link' doesn't recognize the 'activeClassName' prop

*/

import {NavLink,Link} from "react-router-dom"

function Header(props) {
  return (
<header>
    <div className="container flexbox">
        <div className="title"> 
        <h1>{props.title}</h1>
        </div>
    <div>
    <nav className="navigation">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/documentation">Documentation</Link></li>
            <li><NavLink className={navData =>(navData.isActive ? "active": "")} to="/tutorial" >Tutorial</NavLink>
            </li>
            {/* Using object destructuring */}
            <li><Link to="/aboutUS">About us</Link></li>
            
        </ul>
    </nav>
    </div>
    </div>
</header>
  )
}

export default Header
