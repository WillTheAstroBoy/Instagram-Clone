import React, { useState, useEffect, useContext } from "react";
import { Profile } from "../components/";
import { useParams } from "react-router-dom";
import { getUserPhotosByUsername } from "../services/firebase";
import Skeleton from 'react-loading-skeleton';

export function UserProfileContainer(){
    const [ user, setUser ] = useState(null);
    const [ photos, setPhotos ] = useState(null);
    const {username} = useParams();

    useEffect(()=>{
        document.title = "Instagram- Profile page";

        async function getPhotos(){
            const { user, photos } = await getUserPhotosByUsername(username);
            setUser(user);
            setPhotos(photos);
        }

        getPhotos();

    }, [username]);

    //console.log(photos);

    return (
        user ?  <Profile>
                    <Profile.FlexContainer direction="row">
                        <Profile.Frame>
                            <Profile.Image 
                                src={`/images/avatars/${user.username}.jpg`} 
                                alt={`${user.username} profile picture`}
                            />
                        </Profile.Frame>
                        <Profile.FlexContainer width="65%" direction="column" >
                            <Profile.FlexContainer direction="row" >
                                <Profile.BigText>{user.username}</Profile.BigText>
                            </Profile.FlexContainer>
                            <Profile.FlexContainer direction="row" >
                                <Profile.Text><strong>21</strong> posts</Profile.Text>
                                <Profile.Text><strong>{user.followers.length}</strong> followers</Profile.Text>
                                <Profile.Text><strong>{user.following.length}</strong> following</Profile.Text>
                            </Profile.FlexContainer>
                            <Profile.FlexContainer direction="column" >
                                <Profile.BoldText>{user.fullName}</Profile.BoldText>
                                <Profile.Text>Front-End Developer</Profile.Text>
                            </Profile.FlexContainer>

                        </Profile.FlexContainer>
                    </Profile.FlexContainer>
                    
                        { photos?.length > 0 
                            ?
                            (   <Profile.PostContainer>
                                    {photos?.map((photo) => (
                                            <Profile.PostImage key={photo.docId} src={photo.imageSrc} alt={photo.caption} />
                                        )
                                    )}
                                </Profile.PostContainer>
                            )
                            : 
                            <Profile.NoPostContainer>  
                                <svg 
                                    style={{width: "60px"}}
                                    className="w-6 h-6" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                </svg>
                                <Profile.BigText>No post yet</Profile.BigText>
                            </Profile.NoPostContainer>
                        }
                    
                </Profile>
            : <Profile>
                <Profile.FlexContainer direction="row">
                    <Profile.Frame>
                        <Skeleton circle={true} height={170} width={170}  />
                    </Profile.Frame>
                    <Profile.FlexContainer width="65%" direction="column" >
                        <Profile.FlexContainer direction="row" >
                            <Skeleton  height={40} width={200}  />
                        </Profile.FlexContainer>
                        <Profile.FlexContainer direction="row" >
                            <Skeleton  height={20} width={300}  />
                        </Profile.FlexContainer>
                        <Profile.FlexContainer direction="column" >
                            <Skeleton  height={20} width={150}  />
                            <Skeleton  height={20} width={200}  />
                        </Profile.FlexContainer>

                    </Profile.FlexContainer>
                </Profile.FlexContainer>
                <Profile.PostContainer>
                    <Skeleton   height={250} width={250}  />
                    <Skeleton   height={250} width={250}  />
                    <Skeleton   height={250} width={250}  />
                    <Skeleton   height={250} width={250}  />
                    <Skeleton   height={250} width={250}  />
                </Profile.PostContainer>
            </Profile>
    )
}