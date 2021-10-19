import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile ,signOut,onAuthStateChanged   } from "firebase/auth";
import InitiaLization from "../../firebase/firebase.init";

InitiaLization();

const auth = getAuth();
const useFirebase=()=>{
    const Googleprovider = new GoogleAuthProvider();
    const [user, setUser]=useState({});
    const [error, setError]=useState("");
    const [email, setEmail]=useState("");
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [isLogin, setIsLogin]=useState(false);
    const [isLoading, setIsLoading]=useState(true);

    const  SignWithGoogle=()=>{
        setIsLoading(true)
        signInWithPopup(auth,Googleprovider)
        .then(res=>{
            setUser(res.user)
            setError('')
        }).catch(error=>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }
//handle registration
const HandleRegistation=(e)=>{
    e.preventDefault();
  if(password.length<6){
      setError("password Should have minimum 6 charecters")
      return;
  } 
  isLogin? CreateLogin(email,password): CreateRegister(email,password)
   }

   //create Login
   const CreateLogin=(email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(res=>{
        console.log(res.user);
        setError('')
        GetUserName()
    }).catch(error=>{
        setError(error.message)}
    )
   }
   //create register
   const CreateRegister=(email, password)=>{
    createUserWithEmailAndPassword (auth,email, password)
    .then(res=>{
        console.log(res.user);
        setError('')
        GetUserName()
    }).catch(error=>{
        setError(error.message)
    })
   }

///handle email
    const HandleName=(e)=>{
       setName(e.target.value);
    }
///handle email
    const HandleEmail=(e)=>{
       setEmail(e.target.value);
    }

    ///handle password
    const HandlePassword=(e)=>{
       setPassword(e.target.value);
    }

    //toggol
    const toggleLogin=(e)=>{
      setIsLogin(e.target.checked);
    }

    //get user name
    const GetUserName=()=>{
        updateProfile (auth.currentUser,{
            displayName:name
        })
        .then(res=>{
             
        })
    }

    //state change
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
          
            } else {
            setUser({})
        
            }
            setIsLoading(false)
          })
    },[])

    //sgin out
    const SignOut=()=>{
       
        signOut(auth).then(() => {
            setUser({})
           setError("")
          }).catch((error) => {
            setError(error.msg)
          })
          .finally(()=> setIsLoading(false))
    }
    return{
        HandleName,
        toggleLogin,
        HandleRegistation,
        HandlePassword,
        HandleEmail,
        user,
        isLogin,
        SignWithGoogle,
        error,
        SignOut,
        isLoading
    }

}
export default useFirebase;