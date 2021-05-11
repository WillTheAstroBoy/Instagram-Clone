import { firebase, FieldValue } from "../lib/firebase";

export async function getUserByUserId(userId){
    const result = await firebase.firestore().collection("users").where('userId', "==", userId).get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    return user;
}

export async function getPhotos(userId, following){
    const result = await firebase
        .firestore()
        .collection("photos")
        .where('userId', 'in', following)
        .get();
    
    const userFollowedPhotos = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));

    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map( async photo => {
            let userLIkedPhoto = false;
            if(photo.likes.includes(userId)){
                userLIkedPhoto = true;
            }

            const user = await getUserByUserId(photo.userId);
            const { username } = user[0];

            return { username, ...photo, userLIkedPhoto };
        })
    );

    return photosWithUserDetails;
}

export async function getSuggestedUsersProfile(followers){

    const suggestedUsersProfile = await Promise.all(
        followers?.map( async userId => {
            const [user] = await getUserByUserId(userId);
            return user;
        })
    );
    return suggestedUsersProfile;
}

export async function updateLoggedInUserFollowing(profileId, loggedInUserDocId, isFollowingProfile){
    await firebase
        .firestore()
        .collection('users')
        .doc(loggedInUserDocId)
        .update({
            following: isFollowingProfile 
                ? FieldValue.arrayRemove(profileId)
                : FieldValue.arrayUnion(profileId)
        });
}

export async function updateFollowingUserFollowers(followingUserDocId, loggedInUserId, isFollowingProfile ){
    await firebase
        .firestore()
        .collection('users')
        .doc(followingUserDocId)
        .update({
            followers: isFollowingProfile
                ? FieldValue.arrayRemove(loggedInUserId)
                : FieldValue.arrayUnion(loggedInUserId)
        });
}

export async function getUserPhotosByUsername(username){
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get()

    const [user] = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }))
    console.log(user);
    const photoResult = await firebase
        .firestore()
        .collection('photos')
        .where('userId', '==', user.userId)
        .get();

    const photos = photoResult.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));

    return { user, photos };
}

export async function getUserByUsername(username){
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();

    const user = result.docs.map(item => ({
        ...item.data(),
        docId: item.id
    }));

    return user;
}

export async function doesUsernameExist(username){
    console.log(username);
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();
    
    const user = result.docs.map(item => ({
        ...item.data()
    }));
    return user.length > 0;
}