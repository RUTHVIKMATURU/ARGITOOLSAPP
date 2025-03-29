import React from 'react'
import { SignIn } from "@clerk/clerk-react";

function signIn() {
  return (
    <div>
      <div className="container-fluid login-bg d-flex align-items-center justify-content-center vh-100">
        <div className="p-4 rounded shadow-lg bg-white text-center">
          <h2 className="fw-bold text-primary">Welcome Back!</h2>
          <p className="text-muted">Sign in to continue</p>
          <div className="mt-3">
            <SignIn />
          </div>
        </div>
    </div>

    </div>
  )
}

export default signIn