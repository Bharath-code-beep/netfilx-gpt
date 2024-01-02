import React, { useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Login from "./Login"
import Browser from "./Browser"
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilis/firebase"; 
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utilis/userSlice';



const Body = () => {
  const dispatch = useDispatch()
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
    },
    {
        path:"/browser",
        element: <Browser/>,
    }
]);

useEffect (() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email, displayName} = user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName}));
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
    }
  });
},[])

  return (
    <div>
 <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body


