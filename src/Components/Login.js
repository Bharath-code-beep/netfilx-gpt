import React, { useRef, useState } from "react"
import Header from "./Header"
import { useNavigate } from 'react-router-dom'
import checkValidData from "../utilis/validate"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilis/firebase"; 


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
 
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

    const handleButtonClick =()=> {
  // checkValidData(email, password)
      console.log(email.current.value) ;
      console.log(password.current.value) ;
      const message = checkValidData(email.current.value, password.current.value)
      setErrorMessage(message) ;
      if(message) return;
      //sign in and sign up logic here
      if(!isSignInForm){
        createUserWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate("/browser")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

      }else{
//Sign in logic here
signInWithEmailAndPassword(
  auth, 
  email.current.value, 
  password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate("/browser")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
      }
    }
    



    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div> <Header/>
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />

    </div>
    <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name} type="text" placeholder="Full name" className="p-4 my-4 w-full bg-gray-700"/>)}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input ref={password}  type="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <p className="text-red-700 font-bold text-lg py-2">{errormessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In": "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up Now":
        "Already registered? Sign In Now" }
            </p>
    </form>
    </div>
  
  )
}

export default Login