import React from "react";
import { Link } from "react-router-dom";
import MyLogo from '../../assets/orion.png';
import { render } from "react-dom";
import { IState } from "../../reducers";
import { refresh } from "../../actions/userinfoaction";
import { connect } from "react-redux";


interface IUser {
    user_id: string
    username: string
    password: string
    firstname: string
    lastname: string
    email: string
    roles: string
}

interface IAlluser {
    allusers: IUser[]
}


export class UserComponent extends React.Component<any, IAlluser>{
    constructor(props: any) {
        super(props);
        this.state = {
            allusers: []
        }

    }
    //     this.state.users.password = ''
    //       // user_id: 0, // primary key
    //       // username: '', // not null, unique
    //       // password: '' ,// not null
    //       // firstname: '' ,// not null
    //       // lastname: '' ,// not null
    //       // email: '', // not null
    //       // roles: 0, // not null
    //       // errorMessage:'
    // }
    //state is a special react attribute
    // state = {
    //     allusers:[]
    // }

    // handleChange =(field:string) => (event => {
    //         this.setState({
    //             ...this.state,
    //             [field]:event.target.value
    //         })

    // })

    componentDidMount() {
        console.log(localStorage.getItem('name'))
        this.allusersfunc()
    }

    // renderSomething = () => (this.state.username)?<div>something</div>: <div>nothing</div>

    // login = async (event: { preventDefault: () => void; })=>{
    //     event.preventDefault()
    allusersfunc = async () => {
        console.log('trying to login')

        try {
            const response = await fetch('http://localhost:8050/users', {
                method: 'GET',
                credentials: 'include',

                headers: {
                    'Content-type': 'application/json'
                }
            })


            //   localStorage.setItem('username',JSON.parse(JSON.stringify(credentials.username)))
            //   localStorage.getItem('username')
           
            console.log(localStorage.getItem('name'))
            

            if (response.status === 401) {
                console.log('Invalid Credentials')

            } if (response.status === 200) {


                const user = await response.json()
                this.setState({
                    allusers: user
                    
                })

            }

        } catch (err) {
            console.log(err)
        }


    }

    render() {
        if(!this.props.statelist.currentuser.user_id){
            this.props.history.push('/')
        }
        if (!this.state.allusers) {
            return (<></>)
        }
        else {
            const u = this.state.allusers
            console.log(this.state.allusers)
            localStorage.getItem('name')
            let alluserlist = u.map((a) => {
                return (<tr key={a.user_id}>
                    <td>{a.user_id}</td>
                    <td>{a.username}</td>
                    <td>{a.password}</td>
                    <td>{a.firstname}</td>
                    <td>{a.lastname}</td>
                    <td>{a.email}</td>
                    <td>{a.roles}</td>
                </tr>)
            })

            return(
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
                        <Link to="/mgmtdashboard" className="unset-anchor nav-link"> Welcome {this.props.statelist.currentuser.firstname}</Link>
                      </li>
                      <li className="nav-item active">
                        <Link to="/reimbursements" className="unset-anchor nav-link">Make a request</Link>
                      </li>
                      <li className="nav-item active dropdown">
                        <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</div>
                        <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                          <div className="dropdown-item"><Link to="/movies" className="unset-anchor nav-link active">My Profile</Link></div>
                          <div className="dropdown-item"><Link to="/" onClick={()=> {this.props.refresh() }} className="unset-anchor nav-link active">Logout{localStorage.clear()}</Link></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div id='back'>
                <div id="divtable">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Roles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alluserlist}
                            </tbody>
                            </table>
    
                            
                </div>
                </div>
                </div>
            )
        
        
        
        
        
        
        }

    }

}


const mapStateToProps = (state: IState) => {
    return {
      statelist: state.userinfostate
    }
  }
  
  const mapDispatchToProps = {
    // getuserinfo: getuserinfo,
    refresh: refresh
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
