import React, { useContext } from "react";
import { HeaderContainer } from "./header";
import TimelineContainer from "./timeline";
import { Home } from "../components";
import { UserContext } from "../context/user";
import useUser from "../hooks/use-user";
import { LoggedInUserContext } from "../context/logged-in-user";
import { SidebarContainer } from "./sidebar";

export function HomeContainer(){
    const { user: loggedInUser } = useContext(UserContext);
    const {user, setActiveUser} = useUser(loggedInUser?.uid);

    return(
        <LoggedInUserContext.Provider value={{ user , setActiveUser }}>
        <Home>
            <HeaderContainer />
            <Home.Frame>
                <TimelineContainer />
                <SidebarContainer />
            </Home.Frame>
        </Home>
        </LoggedInUserContext.Provider>
    )
}