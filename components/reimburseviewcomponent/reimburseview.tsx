import React from "react";
import { Link } from "react-router-dom";
import MyLogo from '../../assets/orion.png';
import {IReimbursement, IState} from '../../reducers/index'
import { connect } from "react-redux";
import { reimbursementTypes, getreimbursementbyid, refresh } from "../../actions/reimbursementactions";
import UpdateUserButton from "./UpdateUserButton";


class ReimbursementViewComponent extends React.Component<any, any> {

    componentDidMount(){
      // console.log(localStorage.getItem('name'))
      if(!this.props.userstatelist.currentuser.firstname){
        this.props.history.push('/')
      }
      else {
        console.log('These are my props',this.props)
       // const sid = localStorage.getItem('statusid')
       this.props.getreimbursementbyid(this.props.match.params.id)
      }
    }
    
    reimburse = async ()=>{
        // console.log('trying to login')
      
        // try{
      
        //     const response = await fetch('http://localhost:8050/reimbursements/status/3', {
        //         method: 'GET',
        //         credentials: 'include',
        //         // body:'',
        //         headers:{
        //             'Content-type': 'application/json'
        //         }
        //     }) 
        //     // let res = response.
            
        //     const res = await response.json()
        //     this.setState({
        //         ...this.state,
        //         listReimbursment:[...res]

        //     })
                
        // } catch(err){
        //     console.log(err);        
        // }
      }


    render() {
        const list = this.props.statelist;
        if(!list[0]){
            return <>list empty</>

        }else{
            let listofrows = list.map((r:IReimbursement)=>{
                return(<tr key={r.reimbursementid}>
                    <td>{r.reimbursementid}</td>
                    <td>{r.author}</td>
                    <td>{r.amount}</td>
                    <td>{r.dateResolved}</td>
                    <td>{r.dateSubmitted}</td>
                    <td>{r.description}</td>
                    <td>{r.resolver===null? 'No Resolver':r.resolver}</td>
                    <td>{r.status===1? 'Approve': r.status===2 ? 'Pending':'Denied'}</td>
                    <td>{r.reimbursementtype ===1? 'Lodging': r.status===2? 'Travel': r.status===3? 'Food':'Other'}</td>
                    <td><UpdateUserButton reimbursement={r}/></td>
                </tr>) 
                     
            })
            console.log('dfffff',listofrows);
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
                        <Link to="/first" className="unset-anchor nav-link"> Welcome {localStorage.getItem('nname')}</Link>
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
                                <th scope="col">Author ID</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date Submitted</th>
                                <th scope="col">Date Resolved</th>
                                <th scope="col">Description</th>
                                <th scope="col">Resolver</th>
                                <th scope="col">Status</th>
                                <th scope="col">Reimbursement Type</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listofrows}
                            </tbody>
                            </table>
    
                            
                </div>
                </div>
                </div>
            );
        }
        
      }


}

const mapStateToProps = (state:IState) =>{
    return{
        statelist: state.listReimbursementbyidstate,
        userstatelist:state.userinfostate
    }


}

const mapDispatchToProps ={
    getreimbursementbyid: getreimbursementbyid,
    refresh:refresh
}


export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementViewComponent)