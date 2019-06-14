import React from "react";
import { Link } from "react-router-dom";
import MyLogo from '../../assets/orion.png';
import cardpix1 from '../../assets/tree.jpg'
import cardpix2 from '../../assets/id.jpg'
import cardpix3 from '../../assets/status.jpg'
import { IState } from "../../reducers";
import { connect } from "react-redux";
import { refresh } from "../../actions/userinfoaction";




export class MgmtDashboardComponent extends React.Component<any, any>{

  statusref:any
  
  constructor(props){
    super(props)
    this.statusref = React.createRef();
  }

  state = {
    statusid: '',
    userid: '',
  }




  handleChange = (field: string, field2:string) => (event => {
    this.setState({
      ...this.state,
      [field]: event.target.value,
      [field2]:event.target.value
    })

  })

  reimburse = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    
    this.props.history.push(`/reimburseview/${this.statusref.value}`)
  }

  componentDidMount(){
    console.log(localStorage.getItem('name'))
    console.log('this is the dashboard',this.props)
    // if(!this.props..firstname){
    //   this.props.history.push('/')
    // }
  }



  render() {
    // const statusid = this.state.statusid
    // localStorage.setItem('statusid', statusid)

    // // if(statusid!==''){
    // //     this.props.history.push(`/reimburseview/${statusid}`)
    // // }

    // const sid = localStorage.getItem('statusid')
    // console.log(statusid)
    let nname = localStorage.getItem('name')
        localStorage.setItem('nname',nname)
    let nnname = localStorage.getItem('name')
    localStorage.setItem('nnname',nnname)      
    console.log(this.props.statelist.firstname);
    

    
      return (
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
                  <Link to="" className="unset-anchor nav-link"> Welcome {this.props.statelist.currentuser.firstname} </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/reimbursements" className="unset-anchor nav-link">Make a request</Link>
                </li>
                <li className="nav-item active dropdown">
                  <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</div>
                  <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                    <div className="dropdown-item"><Link to="/movies" className="unset-anchor nav-link active">My Profile</Link></div>
                    <div className="dropdown-item"><Link to="/" className="unset-anchor nav-link active">Logout{}</Link></div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div id="cardboard">
            <span>
              <div className="card">
                <img src={cardpix1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">All Users</h5>
                  <p className="card-text">This will allow you to see all users as a financial Manager</p>
                  <Link to="/users" className="btn btn-primary">View Users</Link>
                </div>
              </div>
            </span>
            <span>
              <div className="card">
                <img src={cardpix3} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Get information by Status</h5>
                  <p className="card-text">This will get all reimbursement information using the status</p>
                  <a href="#" className="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">View Reimbursements</a>

                  <div className="collapse" id="collapseExample" >
                    <div className="card-body" id="inputbody">
                      <form onSubmit={this.reimburse}>
                    <select ref={input=>this.statusref =input}
                        defaultValue='2'>
                        <option className="dropdown-item"  value='1'>Approved</option>
                        <option className="dropdown-item"  value='2'>Pending</option>
                        <option className="dropdown-item"  value='3'>Denied</option>
                      </select>
                      <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </span>


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
  // getuserinfo: getuserinfo,
  refresh: refresh
}


export default connect(mapStateToProps, mapDispatchToProps)(MgmtDashboardComponent)