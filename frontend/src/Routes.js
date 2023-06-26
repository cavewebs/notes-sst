import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import ChangePassword from "./containers/ChangePassword";

export default function Links() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />;
            <Route
                path="/login/reset"
                // element={
                //     <UnauthenticatedRoute>
                //         <ResetPassword />
                //     </UnauthenticatedRoute>
                // }
                element={
                    <ResetPassword />
                }
            />
            <Route
                path="/settings/password"
                element={
                    <ChangePassword />
                }
            />
        </Routes>
    );
}