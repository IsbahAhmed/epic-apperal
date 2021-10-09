import { auth } from "../../../Firebase/firebase";
import { SUCCESS } from "../../../HTTPStatus";
import {request} from "../../../Axios"
export var signUp = async (userObj)=>{
    var {firstName,lastName,email,password} = userObj;
  
        try {
          if(firstName && lastName && email && password){
            var createdUser = await auth.createUserWithEmailAndPassword(email,password)
        
            var user = auth.currentUser;

            //Save in mongoDB
            const result = await request.post(`/user`,{...userObj,userId:user.uid});
            if(result.status === 201){
                await user.sendEmailVerification();
          
                return {
                    code: SUCCESS,
                    message:"Successfully registered",
                    userObj:result.data.data
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
export const logout = async ()=>{
try {
    await auth.signOut();
    return 1;
} catch (error) {
    console.log(error)
    throw error;
}
}

export const signin = async (userObj)=>{
    try {
        var {email,password} = userObj;
    var {user} = await auth.signInWithEmailAndPassword(email,password);
    const userFromMongo = await request.get("/user/find/"+user.uid);
   
   if(userFromMongo.status == 200){
    return {
        code: SUCCESS,
        message:"Successfully registered",
        user:userFromMongo.data.data
    }
    
   }
   else{
       await auth.signOut()
    throw "Authentication Failed";
   }

    } catch (error) {
        throw "Wrong email or password";
    }
}