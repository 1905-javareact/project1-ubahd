export const reimbursementTypes = {
    GET_REIMBURSEMENT_BY_ID: 'GET_REIMBURSEMENT_BY_ID',
    CLEANSTATE: 'CLEANSTATE'
}

export const getreimbursementbyid =(sid:number)=> async(dispatch)=>{
        
    try{
      
        const response = await fetch(`http://localhost:8050/reimbursements/status/${sid}`, {
            method: 'GET',
            credentials: 'include',
            // body:'',
            headers:{
                'Content-type': 'application/json'
            }
        }) 
        
        
        const res = await response.json()
        console.log('we are in the action ', res)
            dispatch({
                payload:{
                    responselist: res
                },
                type: reimbursementTypes.GET_REIMBURSEMENT_BY_ID
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
                type: reimbursementTypes.CLEANSTATE
            })

}