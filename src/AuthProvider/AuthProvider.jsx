import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../components/firebase/firebase.init";
import { useLocation } from "react-router-dom";

export const authcontext = createContext()


const AuthProvider = ({amardesh}) => {
const [user,setuser] = useState(null)

const [loading,setloading] = useState(true)





// console.log(`this is loading value ${loading} and this is ${user}`);



// auth value store in there
const auth = getAuth(app);

const CreateNewUser = (email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)}

const Sign_IN_User = (email,password)=>{
    setloading(true)
   return signInWithEmailAndPassword(auth,email,password)
}

const Log_out_user = ()=>{
    setloading(true)
    signOut(auth)
}



const User_Update_Profile = (updatedata)=>{
    return updateProfile(auth.currentUser,updatedata)
}







useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentuser=>{
    //    console.log( setuser(currentuser));
    setuser(currentuser)
       setloading(false)
     
    
    })

return ()=>{
    unsubscribe()
}

},[])



const authinfo = {
user,
setuser,
CreateNewUser,
Log_out_user,
Sign_IN_User,
loading,
User_Update_Profile
}

    return (
    <authcontext.Provider value={authinfo}>
        {amardesh}
    </authcontext.Provider>
    );
};

export default AuthProvider;