import { IUser } from "./index";
import { userinfotypes } from "../actions/userinfoaction";

// import { IReimbursement } from "./index";
// import { reimbursementTypes } from "../actions/reimbursementactions";


// const initialState: IReimbursement[]=[] 

// export const getreimbursementbyid = (state = initialState, action) => {

//     switch (action.type){

//         case reimbursementTypes.GET_REIMBURSEMENT_BY_ID:{
//             console.log('We are in the reducer',action.payload.responselist)
//             const list = action.payload.responselist
//             return [...list]
//         }

//         case reimbursementTypes.CLEANSTATE:{
//             console.log('No more information', action.payload.emptyresponselist)
//             const list = action.payload.emptyresponselist
//             return [...list]
//         }

//         }
//     return [...state]
// }

const initialState: IUser = {
    currentuser: {}
}

export const getuserinfo = (state = initialState, action) => {

    switch (action.type) {

        case userinfotypes.GET_USER_INFO:
            console.log('We are in the reducer', action.payload.responselist)
            // currentuser: action.payload.responselist
            return {
                ...state,
                currentuser: action.payload.responselist
            }


        case userinfotypes.CLEANUSERINFOSTATE:
            console.log('No more information', action.payload.emptyresponselist)
            return {
                ...state,
                currentuser: action.payload.emptyresponselist
            }
            default:
    }
                
return state


}