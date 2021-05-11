import React, {useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user";
import { FirebaseContext } from "../context/firebase";
import { Sidebar, Footer } from "../components";
import useUser from "../hooks/use-user";
import Skeleton, { SkeletonTheme} from "react-loading-skeleton";
import {
    getSuggestedUsersProfile,
    updateFollowingUserFollowers,
    updateLoggedInUserFollowing
} from "../services/firebase";

export function SidebarContainer(){
    const { firebase, FieldValue } = useContext(FirebaseContext);
    const { user: loggedInUser } = useContext(UserContext);
    const {user} = useUser(loggedInUser?.uid);
    console.log(loggedInUser?.uid);
    const [ followersProfile, setFollowersProfile ] = useState(null);
    const followers = user?.followers.filter((follower) => !user.following.includes(follower));

    async function handleFollow(e, follower) {
        e.target.textContent = e.target.textContent === "Follow" ? "Following" : "Follow";
        const isFollowing = user.following.includes(follower.userId);

        try{
            await updateLoggedInUserFollowing(follower.userId, user.docId, isFollowing);
            await updateFollowingUserFollowers(follower.docId, user.userId, isFollowing);
        } catch(e){
            console.log("something went terribly wrong LOL");
        }
        
    }

    useEffect(()=> {
        async function getSuggestedProfiles(){
            setFollowersProfile(await getSuggestedUsersProfile(followers));
        }

        if(followers) {
            getSuggestedProfiles();
        }
        
    }, [user]);

    return (
        user ?
            (<Sidebar>
                <Sidebar.Frame direction="row" width="120px">
                    <Sidebar.Link to={`/p/${user.username}`}>
                        <Sidebar.ProfilePicture width="35" height="35" src={`/images/avatars/${user.username}.jpg`} alt={`${user.username}'s profile picture`} />
                    </Sidebar.Link>
                    <Sidebar.Link to={`/p/${user.username}`}>
                        <Sidebar.FlexContainer direction="column">
                            <Sidebar.BoldText color="black">{user.username}</Sidebar.BoldText>
                            <Sidebar.Text>{user.fullName}</Sidebar.Text>
                        </Sidebar.FlexContainer>
                    </Sidebar.Link>
                </Sidebar.Frame>
                <Sidebar.BoldText marginTop="1" color="gray">Suggestions for you</Sidebar.BoldText>
                <Sidebar.Frame direction="column" width="100%">
                    { followersProfile?.map( (follower) =>
                        (
                            <Sidebar.FlexContainer  margin="1em" key={follower.userId} width="100%" direction="row">
                                <Sidebar.FlexContainer direction="row">
                                    <Sidebar.Link to={`/p/${follower.username}`}>
                                        <Sidebar.ProfilePicture width="20" height="20" src={`/images/avatars/${follower.username}.jpg`} alt="" />
                                    </Sidebar.Link>
                                    <Sidebar.Link to={`/p/${follower.username}`}>
                                        <Sidebar.BoldText color="black" >{follower.username}</Sidebar.BoldText>
                                    </Sidebar.Link>
                                </Sidebar.FlexContainer>
                                <Sidebar.Text cursor="pointer" color="#0095f6" onClick={(e) => handleFollow(e, follower)} >Follow</Sidebar.Text>
                            </Sidebar.FlexContainer>
                        )
                        )}
                </Sidebar.Frame>
                <Footer width="100%">
                    <Footer.Frame align="flex-start">
                        <Footer.Link fontSize="9px" margin="3px" >About</Footer.Link>
                        <Footer.Link fontSize="9px" margin="3px" >Help</Footer.Link>
                        <Footer.Link fontSize="9px" margin="3px" >Press</Footer.Link>
                        <Footer.Link fontSize="9px" margin="3px" >API</Footer.Link>
                        <Footer.Link fontSize="9px" margin="3px" >Jobs</Footer.Link>
                        <Footer.Link fontSize="9px" margin="3px" >Privacy</Footer.Link>
                        <Footer.Link fontSize="9px" margin="3px" >Terms</Footer.Link>
                        <Footer.Link fontSize="9px" margin="3px" >Locations</Footer.Link>
                    </Footer.Frame>
                    <Footer.Frame align="flex-start">
                        <Footer.Link fontSize="9px" margin="3px" >Top Accounts</Footer.Link>
                        <Footer.Link fontSize="9px" margin="3px" >Hashtags</Footer.Link>
                        <Footer.Link fontSize="9px" margin="3px" >Language </Footer.Link>
                    </Footer.Frame>
                    <Footer.Frame align="flex-start">
                        <Footer.Text>&copy; 2021 Instagram from Facebook</Footer.Text>
                    </Footer.Frame>
                </Footer>
            </Sidebar>)
        :   <SkeletonTheme>
                <Skeleton circle={true} height={40} width={40}  />
                <Skeleton count={1} width={100} height={20} />
            </SkeletonTheme>
    )
}