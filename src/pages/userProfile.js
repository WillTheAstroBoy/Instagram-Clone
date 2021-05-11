import React from "react";
import { useParams } from "react-router-dom";
import { HeaderContainer } from "../container/header";
import { FooterContainer } from "../container/footer";
import { UserProfileContainer } from "../container/userProfile";

export default function UserProfile(){
    const { username } = useParams();
    return (
        <>
            <HeaderContainer />
            <UserProfileContainer />
            <FooterContainer />
        </>
    )
}