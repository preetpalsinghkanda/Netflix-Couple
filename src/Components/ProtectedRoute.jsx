import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (!isLoggedIn) {
      toast("Login First :)", {
        icon: "😎",
        style: {
          borderRadius: "14px",
          background: "white",
          color: "black",
          fontSize : "18px"
        },
      });
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;