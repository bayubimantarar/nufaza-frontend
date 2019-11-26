import React from 'react';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

let title = '<Bimantara />';

function Navbar() {
  return (
    <Router>
      <div className="Navbar">
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <NavLink to="/" className="font-semibold text-xl tracking-tight hover:text-teal-200">{title}</NavLink>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <NavLink
                to="/blog"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
                activeStyle={{color: '#b2f5ea'}}
              >
                My Blog
              </NavLink>
              <NavLink
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
                activeStyle={{color: '#b2f5ea'}}
              >
                About Me
              </NavLink>
            </div>
            <div>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
      </Switch>
     </Router>
  );
}

export default Navbar;
