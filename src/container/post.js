import React, {useState, useRef, useContext } from "react";
import { Post, Comments, AddComment } from "../components";
import { formatDistance } from "date-fns";
import { FirebaseContext } from "../context/firebase";
import { UserContext } from "../context/user";

export function PostContainer({ content }){
    const [ likedPhoto, setLikedPhoto ] = useState(content.userLIkedPhoto);
    const [ totalLikes, setTotalLikes ] = useState(content.likes.length);
    const [ newComment, setNewComment ] = useState('');
    const [ comments, setComments ] = useState(content.comments);
    const inputRef = useRef(null);
    const { firebase, FieldValue } = useContext(FirebaseContext);
    const { user: { uid: userId, displayName}} = useContext(UserContext);
    
    const handleFocus = () => inputRef.current.focus();

    async function handleToggleLiked(){
        setLikedPhoto(prevState => !prevState);

        await firebase
            .firestore()
            .collection('photos')
            .doc(content.docId)
            .update({
                likes: likedPhoto ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
            });

        setTotalLikes(prevState => likedPhoto ? prevState - 1 : prevState + 1 );
    }

    async function handleCommentSubmit(e){
        e.preventDefault();

        await firebase  
            .firestore()
            .collection("photos")
            .doc(content.docId)
            .update({
                comments: FieldValue.arrayUnion({ displayName, comment: newComment })
            })
            .then(()=>{
                setNewComment('');
                setComments(prevComments => [ ...prevComments, { displayName, comment: newComment} ]);
            })
            .catch(e => console.log("sorry your comment could not be added ", e.message));

        
    }

    return (
        <Post>
            <Post.Header 
                to={`/p/${content.username}`}
                src={`/images/avatars/${content.username}.jpg`}
                alt={`${content.username} profile picture`}
            >
                {content.username}
            </Post.Header>
            <Post.Image src={content.imageSrc} alt={content.caption} />
            <Comments>
                <Comments.ButtonContainer margin="10">
                    <Comments.Button
                        onClick={handleToggleLiked}
                    >
                    { !likedPhoto ? 
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
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                            />
                        </svg>
                        : 
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    }
                    </Comments.Button>
                    <Comments.Button
                        onClick={handleFocus}
                    >
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
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                        />
                    </svg>
                    </Comments.Button>
                </Comments.ButtonContainer>
                <Comments.BoldText>{totalLikes > 0 ? `${totalLikes} likes` : "No like" }</Comments.BoldText>
                {
                    comments.map(({ comment, displayName }, i) => (
                        <Comments.ButtonContainer margin="5"  key={i}>
                            <Comments.BoldText>{displayName}</Comments.BoldText>
                            <Comments.Text>
                                {comment}
                            </Comments.Text>
                        </Comments.ButtonContainer>
                    ) )
                }
                <Comments.SmallText>{formatDistance(content.dateCreated, new Date())} ago</Comments.SmallText>
            </Comments>
            <AddComment>
                <AddComment.Form method="POST" onSubmit={handleCommentSubmit}>
                    <AddComment.Input 
                        inputRef={inputRef}
                        value={newComment} 
                        type="text" placeholder="Add a comment" 
                        autocomplete="off" 
                        onChange={({ target }) => setNewComment(target.value) }
                    />
                    <AddComment.Button 
                        color={newComment.length > 3 ? "#0095f6" : "#b7e1fc"} 
                        disabled={newComment.length < 3}
                    >
                        Post
                    </AddComment.Button>
                </AddComment.Form>
            </AddComment>
        </Post>
    )
}