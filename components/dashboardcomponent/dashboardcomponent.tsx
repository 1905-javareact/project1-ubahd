import React from "react";
import { Link } from "react-router-dom";
import MyLogo from '../../assets/orion.png';




export class DashboardComponent extends React.Component<any,any>{
  
  componentDidMount(){
    console.log(localStorage.getItem('name'))
    console.log('this is the dashboard',this.props)
    if(!localStorage.getItem('name')){
      this.props.history.push('/')
    }
  }

    render() {

      if (localStorage.getItem('name')){
        return (
            <div>
          <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
            <div className="navbar-header c-pointer shift-left">
              <Link to='' className="unset-anchor">
                <img className="img-adjust-position rev-logo App-logo" src={MyLogo} alt="revature" />
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ml-auto margin-nav">
                <li className="nav-item active">
                  <Link to="/first" className="unset-anchor nav-link"> Welcome {localStorage.getItem('name')} </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/reimbursements" className="unset-anchor nav-link">Make a request</Link>
                </li>
                <li className="nav-item active dropdown">
                  <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</div>
                  <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                    <div className="dropdown-item"><Link to="/movies" className="unset-anchor nav-link active">My Profile</Link></div>
                    <div className="dropdown-item"><Link to="/" className="unset-anchor nav-link active">Logout</Link></div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div>
              <span>Welcome</span><span>Welcome</span><span>Welcome</span><span>Welcome</span>
              </div>
          </div>
        )
      } else {
        return (
          <div>
            <h1>fail</h1>
          </div>
        )
      }

    
    
    
    }
    

  }
    