import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import { IState, IReimbursement } from '../../reducers';
import { getreimbursementbyid, refresh } from '../../actions/reimbursementactions';
import { connect } from 'react-redux';
import { updateinfobyid } from '../../actions/updatereimbursementaction';




class UpdateUserButton extends React.Component<any, any> {
    
    statusref:any
    typeref:any
    amountref:any
    descriptionref:any 

    constructor(props) {
        super(props);
        this.statusref = React.createRef();
        this.typeref = React.createRef();
        this.amountref = React.createRef();
        this.descriptionref = React.createRef()

        this.state = {
            modal: false,

        };
    }


    updatefunc = (event) => {
        event.preventDefault()
        //console.log('trying to update reim',this.amountref.value)
        let reimbursment = {
            reimbursementId : this.props.reimbursement.reimbursementid
            ,author : this.props.reimbursement.author
            ,amount : this.amountref.value
            ,description : this.descriptionref.value
            ,resolver : this.props.userstatelist.currentuser.roles
            ,status : this.statusref.value
            ,reimbursementtype : this.typeref.value
            ,datesubmitted : this.props.reimbursement.dateSubmitted
            ,dateresolved : 'CURRENTDATE'
         }
         console.log('im gonna update to this reimburs::',reimbursment)
         this.props.updateinfobyid(reimbursment);
         this.toggle();
        

    }

    toggle=()=> {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        console.log('this is my user : to edit::',this.props.reimbursement)
            const {
                amount,
                description,
                status,
                reimbursementtype} = this.props.reimbursement;

        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Update</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Reimbursement Information</ModalHeader>
                    <ModalBody>
                        {/* {this.props.reimbursement.reimbursementid} */}
                        <Form onSubmit={this.updatefunc}>
                            <div className="form-group">
                            <input 
                                className = 'my-2 form-control'
                                placeholder="Amount" 
                                ref={input=>this.amountref =input} 
                                defaultValue={amount}/>
                            </div>
                            <div className="form-group">
                            <input 
                                className = 'my-2 form-control'
                                placeholder="description" 
                                ref={input=>this.descriptionref =input} 
                                defaultValue={description}/>
                            </div>
                            <div className="form-group">
                            <select className='form-control' ref={input=>this.statusref =input} defaultValue={String(status)} >
                                <option value="1">Approved</option>
                                <option value="2">Pending</option>
                                <option value="3">Denied</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <select className='form-control' ref={input=>this.typeref =input} defaultValue = {String(reimbursementtype)}>
                                <option value="1">Lodging</option>
                                <option value="2">Travel</option>
                                <option value="3">Food</option>
                                <option value="4">Other</option>
                            </select>
                            </div>
                        
                        <br></br>
                           
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updatefunc}>Update</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );

        
            
    }
}

// export default UpdateUserButton;

const mapStateToProps = (state:IState) =>{
    return{
        statelist: state.listReimbursementbyidstate,
        userstatelist:state.userinfostate
    }


}

const mapDispatchToProps ={
    getreimbursementbyid: getreimbursementbyid,
    refresh:refresh,
    updateinfobyid:updateinfobyid
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserButton)