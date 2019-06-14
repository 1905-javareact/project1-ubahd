import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/orion.png';


export default class userinfo extends Component<any, any> {

    componentDidMount() {
        console.log('userinfo', this.props)
    }

    render() {
        return (
            // <div>
            //     myuser
            // {this.props.match && this.props.match.paramas.id}
                <div>
                    <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                        <div className="navbar-header c-pointer shift-left">
                            <Link to="" className="unset-anchor">
                                <img className="img-adjust-position rev-logo App-logo" src={MyLogo} alt="revature" />
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                            <ul className="navbar-nav ml-auto margin-nav">
                                <li className="nav-item active">
                                    <Link to="/mgmtdashboard" className="unset-anchor nav-link"> Welcome {localStorage.getItem('name')} </Link>
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
                <div id='back'>
                <div id ='formdiv'>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="labelfont">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                
                        </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="labelfont">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                            <div className="form-group form-check">
                            </div>
                                    <button type="submit" className="btn btn-primary">Change</button>
                        </form>
                        </div>
                    </div>
                    
                </div>
                        )
                    }
                }
