import React, {useContext} from "react";
import {Header} from "../components";
import { FirebaseContext } from "../context/firebase";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";
import useUser from "../hooks/use-user";


export function HeaderContainer(){
    const { firebase } = useContext(FirebaseContext);
    const { user: loggedInUser } = useContext(UserContext);
    const { user } = useUser(loggedInUser?.uid);
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            history.push("/signin");
        }).catch((e) => {
            console.log(e.message);
        })

    }

    return (
        <Header>
            <Header.Logo src="/images/logo.png" />
            { loggedInUser ?
                (<Header.Container>
                    <Header.Link to="/">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                            />
                        </svg>
                    </Header.Link>
                    <Header.Link to="/signout" onClick={handleClick} >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                            />
                        </svg>
                    </Header.Link>
                    { user && (<Header.Image to={`/p/${user.username}`} src={`/images/avatars/${user.username}.jpg`} alt={`${user.username}'s avatar`} />)}
                </Header.Container>)
                : <Header.Container>
                    <Header.Button onClick={() => history.push("/signin")} background="#0095f6" color="#fff">Sign In</Header.Button>
                    <Header.Button onClick={() => history.push("/signup")} background="#fff" color="#0095f6">Sign Up</Header.Button>
                </Header.Container>
            }
        </Header>
    )
}