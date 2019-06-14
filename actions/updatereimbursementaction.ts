import { IReimbursement } from "../reducers";

export const updreimbursementTypes = {
    UPDATE_REIMBURSEMENT_BY_ID: 'UPDATE_REIMBURSEMENT_BY_ID',
    CLEANTHESTATE: 'CLEANTHESTATE'
}
// reimbursementid:number,author:number, amount:number, datesubmitted:string, dateresolved:string, description:string, resolver:number, status:number, type:number
export const updateinfobyid =(r:IReimbursement)=> async(dispatch)=>{
        
    try{
        const credentials = r;
        

        const response = await fetch(`http://localhost:8050/reimbursements/users`, {
            method: 'PATCH',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers:{
                'Content-type': 'application/json'
            }
        }) 
        
        
        const res = await response.json()
        console.log('we are in the updating the reimbursement::::: ', res)
            dispatch({
                payload:{
                    response: res
                },
                type: updreimbursementTypes.UPDATE_REIMBURSEMENT_BY_ID
            })
            
            } catch(err){
                console.log(err);        
            }

}

// export const reimbursementTypes = {
    
// }

export const refresh =()=> async(dispatch)=>{
        
            const res =''
            dispatch({
                payload:{
                    emptyresponselist:res
                },
                type: updreimbursementTypes.CLEANTHESTATE
            })

}