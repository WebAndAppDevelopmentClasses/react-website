import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {  } from "../index.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button className="mx-2 my-2 bg-yellow-600 rounded-full p-2 text-white"  onClick={() => loginWithRedirect()}>Log In</button>
    )
  )
}

export default LoginButton
