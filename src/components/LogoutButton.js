import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {  } from "../index.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <button className="bg-yellow-600 rounded-full p-2 text-white my-2 mx-2" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    )
  );
};

export default LogoutButton;