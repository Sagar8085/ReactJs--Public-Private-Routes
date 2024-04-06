import React, { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Forget from '../component/Forget/Forget'
import Login from '../component/Login/Login'
import Navbar from '../component/Navbar/Navbar'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

const RoutePath = () => {
    const [isVerified, setVerified] = useState(
        sessionStorage.getItem('AUTH_TOKEN') ? true : false
    )
    const setSigninStatus = (status: boolean) => {
        setVerified(status)
        if (status) {
            // navigate("/dashboard");
            // getAllUser();
        }
    }
    return (
        <div>
            {/* <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isVerified={isVerified} redirectPath="/login">
               {loading ? (<Spinner />) : (<AdminPanel userId={userId} />) } 
              </ProtectedRoute>
            }
          /> */}

            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute
                            isVerified={isVerified}
                            redirectPath="/dashboard"
                        >
                            <Login setSigninStatus={setSigninStatus} />
                        </PublicRoute>
                    }
                ></Route>
                <Route
                    path="/forget-password"
                    element={
                        <PublicRoute
                            isVerified={isVerified}
                            redirectPath="/dashboard"
                        >
                            <Forget setSigninStatus={setSigninStatus} />
                        </PublicRoute>
                    }
                ></Route>
                 <Route
                    path="/navbar"
                    element={
                        <PublicRoute
                            isVerified={isVerified}
                            redirectPath="/dashboard"
                        >
                            <Navbar setSigninStatus={setSigninStatus} />
                        </PublicRoute>
                    }
                ></Route>
            </Routes>
        </div>
    )
}

export default RoutePath
