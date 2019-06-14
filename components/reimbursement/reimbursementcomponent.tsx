import React from "react";
import { Link } from "react-router-dom";
import MyLogo from '../../assets/orion.png';
import { request } from "http";
import { IState } from "../../reducers";
import { getreimbursementbyid, refresh } from "../../actions/reimbursementactions";
import { connect } from "react-redux";

interface IReimbursestate {
    amount:string
    description:string
    reimbursementtype:string
  }


export class ReimbursementComponent extends React.Component<any, IReimbursestate>{

    state = {
        amount:'',
        description:'',
        reimbursementtype:''
    }

    handleChange =(field:string) => (event => {
      this.setState({
          ...this.state,
          [field]:event.target.value
      })

})

reimburse = async (event: { preventDefault: () => void; })=>{
  event.preventDefault()
  // console.log('trying to login')

  const amount = this.state.amount
  const description = this.state.description
  const reimbursementtype = this.state.reimbursementtype

  localStorage.setItem('amount', amount)
  localStorage.setItem('description', description)
  localStorage.setItem('reimbursementtype', reimbursementtype)

  


  const reimbursereq = {
      amount,
      description,
      reimbursementtype
  }

  try{

      const response = await fetch('http://localhost:8050/reimbursements', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(reimbursereq),
          headers:{
              'Content-type': 'application/json'
          }
      })

      console.log(response);
      console.log(response.status)
      console.log(reimbursereq);
      // localStorage.setItem('amount',JSON.parse(JSON.stringify(reimbursereq.amount)))
      // localStorage.getItem('username')
      

      if(response.status === 401){  
              console.log('Invalid Credentials') 
          
      } else if( response.status === 201){

          const reimbursementinfo = await response.json()
        console.log('sent it', reimbursementinfo)         
         localStorage.setItem('allreimbursements',JSON.stringify(reimbursementinfo))
        let nname = localStorage.getItem('name')
        localStorage.setItem('nname',nname)
        let nnname = localStorage.getItem('name')
    localStorage.setItem('nnname',nnname)
        for( let i=0; i<= reimbursementinfo.length; i++){
          // localStorage.setItem('allreimbursements'[i],JSON.stringify(reimbursementinfo[i]))
          // localStorage.getItem('allreimbursements'[i])
          
          localStorage[i] = JSON.stringify(reimbursementinfo[i]);
          // let datas = JSON.parse(localStorage[i]); 
          this.props.history.push('/reimburseview')

        }
        
        // this.props.history.push('/reimbursements')
      } else {
         console.log('You Can\'t login right now')
      }        
  } catch(err){
      console.log(err);        
  }
}

componentDidMount(){
  console.log(this.props)
}


    render() {
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
                  <Link to="/first" className="unset-anchor nav-link"> Welcome {localStorage.getItem('name')}</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/reimbursements" className="unset-anchor nav-link">Make a request</Link>
                </li>
                <li className="nav-item active dropdown">
                  <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</div>
                  <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                    <div className="dropdown-item"><Link to="/movies" className="unset-anchor nav-link active">My Profile</Link></div>
                    <div className="dropdown-item"><Link to="/" onClick={()=> {this.props.refresh()}} className="unset-anchor nav-link active">Logout</Link></div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div id ='logindiv'>
                    <div id ='formdiv'>
          <form className="form-signin text-center" onSubmit={this.reimburse}>
              <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
              <h1 className="h3 mb-3 font-weight-normal"> Reimbursement Details</h1>
              <h1 className="h3 mb-3 font-weight-normal">Please Enter:</h1>
              <h1 className="h3 mb-3 font-weight-normal">1 (Lodging), 2 (Travel),<br></br> 3 (Food), 4 (Other) </h1>
              <label htmlFor="inputAmount" className="sr-only">Amount</label>
              <input type="text" id="inputAmount" className="form-control" onChange={this.handleChange('amount')} value={this.state.amount}  placeholder="Amount" required autoFocus/>
              <label htmlFor="inputDescription" className="sr-only">Description</label>
              <input type="text" id="inputDescription" className="form-control" onChange={this.handleChange('description')} value={this.state.description} placeholder="Description" required/>
              <label htmlFor="inputRtype" className="sr-only">Reimbursement Type</label>
              <input type="text" id="inputRtype" className="form-control" onChange={this.handleChange('reimbursementtype')} value={this.state.reimbursementtype} placeholder="Reimbursement Type" required/>
              <div className="checkbox mb-3">
              </div>
          
              <p></p>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
              <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
          </form>
          {JSON.stringify(this.state, null, 3)}
              </div>
              </div>
          </div>
        );
      }


}

const mapStateToProps = (state:IState) =>{
  return{
      statelist: state.listReimbursementbyidstate
  }
}

const mapDispatchToProps ={
  getreimbursementbyid: getreimbursementbyid,
  refresh:refresh
}


export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementComponent)