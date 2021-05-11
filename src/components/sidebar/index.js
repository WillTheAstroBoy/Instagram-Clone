import React from "react";
import { 
    Container, 
    FlexContainer,
    Frame, 
    ProfilePicture, 
    BoldText, 
    Text, 
    Link 
} from "./style/sidebar";

export default function Sidebar({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

Sidebar.FlexContainer = function SidebarFlexContainer({ direction, children, ...restProps }){
    return <FlexContainer direction={direction} {...restProps} >{children}</FlexContainer>
}

Sidebar.Frame = function SidebarFrame({ children, ...restProps }){
    return <Frame {...restProps} >{children}</Frame>
}

Sidebar.ProfilePicture = function SidebarProfilePicture({ src, alt, ...restProps }){
    return <ProfilePicture src={src} alt={alt} {...restProps} />
}

Sidebar.BoldText = function SidebarBoldText({ color, children, ...restProps }){
    return <BoldText color={color} {...restProps} >{children}</BoldText>
}

Sidebar.Text = function SidebarText({ children, ...restProps }){
    return <Text {...restProps} >{children}</Text>
}

Sidebar.Link = function SidebarText({to, ...restProps }){
    return <Link to={to} {...restProps}  />
}