import { combineReducers } from 'redux'
// import { getreimbursementbyid } from "../actions/reimbursementactions";
import { getreimbursementbyid } from "./reimbursementbystatusid.reducer";
import { getuserinfo } from "./userinforeducer";
// import { usereimbursement } from "./userreimbursementreducer";


export interface IState {
    listReimbursementbyidstate: IReimbursement[]
    userinfostate: IUser


}

export interface IReimbursement {
    reimbursementid: number,
    author: number,
    amount: number,
    dateSubmitted: string
    dateResolved: string,
    description: string,
    resolver: number,
    status: number,
    reimbursementtype: number
}

export interface IUser {

     currentuser: {}

}


// export interface ISelectedreim{
//       selectedreim:{}
// }

export const state = combineReducers<IState>({
    listReimbursementbyidstate: getreimbursementbyid,
    userinfostate: getuserinfo
})