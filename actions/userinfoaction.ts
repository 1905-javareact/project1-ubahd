export const userinfotypes = {
    GET_USER_INFO: 'GET_USER_INFO',
    CLEANUSERINFOSTATE: 'CLEANUSERINFOSTATE'
}

// export const getreimbursementbyid =(sid:number)=> async(dispatch)=>{

//     try{

//         const response = await fetch(`http://localhost:8050/reimbursements/status/${sid}`, {
//             method: 'GET',
//             credentials: 'include',
//             // body:'',
//             headers:{
//                 'Content-type': 'application/json'
//             }
//         }) 


//         const res = await response.json()
//         console.log('we are in the action ', res)
//             dispatch({
//                 payload:{
//                     responselist: res
//                 },
//                 type: reimbursementTypes.GET_REIMBURSEMENT_BY_ID
//             })
//             } catch(err){
//                 console.log(err);        
//             }

// }

// // export const reimbursementTypes = {

// // }

// export const refresh =()=> async(dispatch)=>{

//             const res =''
//             dispatch({
//                 payload:{
//                     emptyresponselist:res
//                 },
//                 type: reimbursementTypes.CLEANSTATE
//             })

// }

export const getuserinfo = (username: string, password: string, history) => async (dispatch) => {

    try {

        const credentials = {
            username,
            password,
        }

        const response = await fetch(`http://localhost:8050/users`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers: {
                'Content-type': 'application/json'
            }
        })

        if (response.status === 401) {
            console.log('Invalid Credentials')

        } if (response.status === 200) {

            const user = await response.json()
            console.log('Im In', user)
            dispatch({
                payload:{
                    responselist: user
                },
                type: userinfotypes.GET_USER_INFO
            })

            // localStorage.setItem('name', JSON.parse(JSON.stringify(user.firstname)))
            // localStorage.getItem('name')
            // localStorage.setItem('role', JSON.stringify(user.roles))
            // let role = localStorage.getItem('role')
            // console.log(role)

            if (user.roles === 3) {
                history.push('/mgmtdashboard')
            }
            if (user.roles === 2) {
                history.push('/dashboard')
            }
            if (user.roles === 1) {
                console.log('You Can\'t login right now')
            }

        }

    }catch(err){
        console.log(err);        
    }
}


export const refresh =()=> async(dispatch)=>{
        
    const res =''
    dispatch({
        payload:{
            emptyresponselist:res
        },
        type: userinfotypes.CLEANUSERINFOSTATE
    })

}