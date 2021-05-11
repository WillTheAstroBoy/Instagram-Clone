import React from "react";
import { 
    Container, 
    Frame, 
    FlexContainer,
    PostContainer,
    PostImage,
    Button, 
    Image,
    Text, 
    BigText, 
    BoldText ,
    NoPostContainer
} from "./style/profile";

export default function Profile({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

Profile.Frame = function ProfileFrame({ children, ...restProps }){
    return <Frame {...restProps} >{children}</Frame>
}

Profile.FlexContainer = function ProfileFlexContainer({ children, ...restProps }){
    return <FlexContainer {...restProps} >{children}</FlexContainer>
}

Profile.PostContainer = function ProfilePostContainer({ children, ...restProps }){
    return <PostContainer {...restProps} >{children}</PostContainer>
}

Profile.NoPostContainer = function ProfileNoPostContainer({ children, ...restProps }){
    return <NoPostContainer {...restProps} >{children}</NoPostContainer>
}

Profile.Button = function ProfileButton({ children, ...restProps }){
    return <Button {...restProps} >{children}</Button>
}

Profile.Image = function ProfileImage({ src, alt, ...restProps }){
    return <Image src={src} alt={alt} {...restProps} />
}

Profile.PostImage = function ProfilePostImage({ src, alt, ...restProps }){
    return <PostImage src={src} alt={alt} {...restProps} />
}

Profile.Text = function ProfileText({ children, ...restProps }){
    return <Text {...restProps} >{children}</Text>
}

Profile.BigText = function ProfileBigText({ children, ...restProps }){
    return <BigText {...restProps} >{children}</BigText>
}

Profile.BoldText = function ProfileBoldText({ children, ...restProps }){
    return <BoldText {...restProps} >{children}</BoldText>
}