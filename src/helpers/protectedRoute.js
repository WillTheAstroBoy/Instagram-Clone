import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ children, user, ...restProps }){
    return (
        <Route
            {...restProps}
            render={({ location }) => {
                if(user) {
                    return React.cloneElement(children, { user });
                }

                if(!user){
                    return (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: location }
                            }}
                        />
                    );
                }
                return null;
            }}
        
        />
    )
}