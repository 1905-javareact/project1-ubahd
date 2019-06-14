import { IReimbursement } from "./index";
import { reimbursementTypes } from "../actions/reimbursementactions";
import { updreimbursementTypes } from "../actions/updatereimbursementaction";


const initialState: IReimbursement[]=[] 

export const getreimbursementbyid = (state = initialState, action) => {

    switch (action.type){

        case reimbursementTypes.GET_REIMBURSEMENT_BY_ID:{
            console.log('We are in the reducer',action.payload.responselist)
            const list = action.payload.responselist

            return [...list]
        }

        case reimbursementTypes.CLEANSTATE:{
            console.log('No more information', action.payload.emptyresponselist)
            const list = action.payload.emptyresponselist
            return [...list]
        }
        case updreimbursementTypes.UPDATE_REIMBURSEMENT_BY_ID:
            {   const reimbursement:IReimbursement = action.payload.response;
                console.log('this is gonna be my payload:: to update',reimbursement)
                let newlist = [...state].map((item)=>{
                    if(item.reimbursementid== reimbursement.reimbursementid){
                        return reimbursement
                    }
                    return item
                });
                return [...newlist]
            }

        }
    return [...state]
}

