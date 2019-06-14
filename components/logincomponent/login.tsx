import React from "react";
import { connect } from "react-redux";
import { refresh, getuserinfo } from "../../actions/userinfoaction";
// import { getuserinfo } from "../../reducers/userinforeducer";
import { IState, IUser } from "../../reducers";
import { RouteComponentProps } from "react-router";
import { stat } from "fs";
// import { Users } from "../../models/user";

interface ISignInState {
  username: string
  password: string
}
interface ISignInProps extends RouteComponentProps{
  statelist: IUser
  getuserinfo(username:string, password:string, history)
}

export class loginComponent extends React.Component<any, any>{

  state = {
    username: '',
    password: '',

  }

  // handleChange = (field: string) => (event => {
  //   this.setState({
  //     ...this.state,
  //     [field]: event.target.value
  //   })

  // })



  updateUsername = (event) => {
    // console.log(event)
    this.setState({
        username: event.target.value
    })
}

updatePassword = (event)=>{
    this.setState({
        password: event.target.value
    })
}
  // renderSomething = () => (this.state.username)?<div>something</div>: <div>nothing</div>

  login = (event) => {
    event.preventDefault()
    console.log('trying to login')

    const username = this.state.username
    const password = this.state.password
    const history = this.props.history
    this.props.getuserinfo(username, password, history)
    //   const credentials = {
    //       username,
    //       password,
    //   }
     // this.props.statelist
    // console.log(this.props.statelist)
    
    // const role = this.props.statelist.currentuser.roles
  
    // if (role === 3) {
    //   this.props.history.push('/mgmtdashboard')
    // }
    // if (role === 2) {
    //     this.props.history.push('/dashboard')
    // }
    // if (role === 1) {
    //     console.log('You Can\'t login right now')
    // }
    //   try{

    //       const response = await fetch('http://localhost:8050/login', {
    //           method: 'POST',
    //           credentials: 'include',
    //           body: JSON.stringify(credentials),
    //           headers:{
    //               'Content-type': 'application/json'
    //           }
    //       })

    //       console.log(response);
    //       console.log(credentials);

    //       localStorage.setItem('username',JSON.parse(JSON.stringify(credentials.username)))
    //       localStorage.getItem('username')


    //       if(response.status === 401){  
    //               console.log('Invalid Credentials') 

    //       } if(response.status === 200){

    //         const user = await response.json()
    //         console.log('Im In', user)
    //         localStorage.setItem('name',JSON.parse(JSON.stringify(user.firstname)))
    //         localStorage.getItem('name')
    //         localStorage.setItem('role', JSON.stringify(user.roles))
    //         let role = localStorage.getItem('role')
    //         console.log(role)

    //         if (role === "3") {
    //             this.props.history.push('/mgmtdashboard')
    //         }
    //         if (role === "2") {
    //             this.props.history.push('/dashboard')
    //         }
    //         if (role === "1") {
    //          console.log('You Can\'t login right now')
    //       }        
    //     }
    //   } catch(err){
    //       console.log(err);        
    //   }
    // console.log(this.props.statelist);
  }

  componentDidMount() {
    console.log(this.props)
    
  }

  render() {
        // console.log(this.props.statelist.currentuser.firstname)
        

    
    localStorage.clear()
    return (
      <div id='logindiv'>
        <div id='formdiv'>
          <form className="form-signin text-center" onSubmit={this.login}>
            <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputUsername" className="sr-only">Username</label>
            <input type="text" id="inputUsername" className="form-control" onChange={this.updateUsername} value={this.state.username} placeholder="Username" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" onChange={this.updatePassword} value={this.state.password} placeholder="Password" required />
            <div className="checkbox mb-3">
            </div>
            {/* <p>{this.state.errorMessage}</p> */}
            <p></p>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
          </form>
          {JSON.stringify(this.state, null, 2)}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state: IState) => {
  return {
    statelist: state.userinfostate
  }
}

const mapDispatchToProps = {
  getuserinfo: getuserinfo,
  refresh: refresh
}


export default connect(mapStateToProps, mapDispatchToProps)(loginComponent)