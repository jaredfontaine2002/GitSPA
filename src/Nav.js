import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';

class Nav extends Component {
    render() {

        const {user, logOutUser} =this.props;

        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <FaUsers className='mr-1' />Meeting Log
              </Link>
              <div className="navbar-nav ml-auto">
                  {user && (
                      <Link className="nav-item nav-link" to="/Meetings">
                      Meetings
                    </Link>
                  )}
                  {!user &&(  
                  <Link className="nav-item nav-link" to="/login">
                    Log In
                  </Link>)}
                  
                  {!user &&(
                      <Link className="nav-item nav-link" to="/Register">
                      Register
                    </Link>
                  )}
                 {user &&  
                 <Link className="nav-item nav-link" to ="/login"
                 onClick={e => logOutUser(e)}>
                     Log Out
                   </Link>
                 }
              </div>
            </div>
          </nav>  
        );
    }
}

export default Nav;