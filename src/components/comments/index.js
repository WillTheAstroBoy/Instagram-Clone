import React from "react";
import { 
    Container, 
    ButtonContainer, 
    Button, 
    BoldText, 
    Text, 
    SmallText 
} from "./style/comments";

export default function Comments({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

Comments.ButtonContainer = function CommentsButtonContainer({ margin, children, ...restProps }){
    return <ButtonContainer margin={margin} {...restProps} >{children}</ButtonContainer>
}

Comments.Button = function CommentsButton({ children, ...restProps }){
    return <Button {...restProps} >{children}</Button>
}

Comments.BoldText = function CommentsBoldText({ children, ...restProps }){
    return <BoldText {...restProps} >{children}</BoldText>
}

Comments.SmallText = function CommentsSmallText({ children, ...restProps }){
    return <SmallText {...restProps} >{children}</SmallText>
}

Comments.Text = function CommentsText({ children, ...restProps }){
    return <Text {...restProps} >{children}</Text>
}



