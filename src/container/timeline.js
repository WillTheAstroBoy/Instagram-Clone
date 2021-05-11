import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { usePhotos } from "../hooks/use-photos";
import { LoggedInUserContext } from "../context/logged-in-user";
import { PostContainer } from "./post";
import { Timeline } from "../components";

export default function TimelineContainer(){
    const { user } = useContext(LoggedInUserContext);
    const { photos } = usePhotos(user);
    return (
        !photos
             ? 
                (<Skeleton count={4} width={600} height={500} style={{marginBottom: "3em"}} />)
            :   (
                    <Timeline>
                        {photos.map(content => <PostContainer key={content.docId} content={content}  />)}
                    </Timeline>
                )
    )
}