import { auth } from "../../../Firebase/firebase";
import { SUCCESS } from "../../../HTTPStatus";
import {request} from "../../../Axios"
export var signUp = async (userObj)=>{
    var {firstName,lastName,email,password} = userObj;
  
        try {
          if(firstName && lastName && email && password){
            // var createdUser = await auth.createUserWithEmailAndPassword(email,password)
        
            // var user = auth.currentUser;

            //Save in mongoDB
            const result = await request.post(`/user`,userObj);
        
            if(result.status === 201){
                // await user.sendEmailVerification();
          
                return {
                    code: SUCCESS,
                    message:"Successfully registered",
                    userObj:result.data
                }
            }
            else{
                throw "An error occured"
            }
          }
          else{
              throw "Please fill all fields"
          }
  
           } catch (error) {
               console.log(error)
               if(error.code === "auth/email-already-in-use"){
             throw "Email is already in use"
    
             
               }
               else{
                   throw error.message
               }
           }
   
    
}
// export const logout = async ()=>{
// try {
//     // await auth.signOut();
  
//     return 1;
// } catch (error) {
//     console.log(error)
//     throw error;
// }
// }

export const signin = async (userObj)=>{
    try {
        var {email,password} = userObj;
    // var {user} = await auth.signInWithEmailAndPassword(email,password);
    // const userFromMongo = await request.get("/user/find/"+user.uid);
   const query = await request.post("/user/login",{
       email,password
   })

   if(query.status == 200){
       localStorage.setItem("jwt",query.data.token)
    return {
        code: SUCCESS,
        message:"Successfully registered",
        user:{
            ...query.data.data,
            token:query.data.token
        }
        
    }
    
   }
   else{
       
    throw "Authentication Failed";
   }

    } catch (error) {
        console.error(error)
        throw "Wrong email or password";
    }
}