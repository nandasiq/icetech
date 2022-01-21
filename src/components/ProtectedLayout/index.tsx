import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: {children: JSX.Element}) => {
    const auth = useAuth();

    if (!auth.email){
        return <h1> Sem acesso, entre na sua conta</h1>
    }

    return children
};