import axios from '../../api/config'

export const asyncRegisterUser = (user) => async(dispatch, getState)=>{
    try {
        const res = await axios.post("/users", user);
        console.log(res);
        
    } catch (error) {
        console.log(error);
        
    }
} 


export const asyncLoginUsers = (user) => async(dispatch, getState)=>{
    try {
        
         const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
         console.log(data[0]);
         localStorage.setItem("user", JSON.stringify(data[0]))
    } catch (error) {
        console.log(error);
        
    }
}

export const asyncCurrentUsers = (user) => async(dispatch, getState)=>{
    try {
        
         const user = JSON.parse(localStorage.getItem("user"))
         if(user)  dispatchEvent(loaduser(user))
            else console.log("login not logedin")
    } catch (error) {
        console.log(error);
        
    }
}


export const asyncLogoutUsers = (user) => async(dispatch, getState)=>{
    try {
        
         localStorage.setItem("user", null)
    } catch (error) {
        console.log(error);
        
    }
}