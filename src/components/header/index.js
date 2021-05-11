import React from 'react';
import { Container, Frame, WidthContainer, Logo, Link, Image, Button } from "./style/header";
import { Link as RouterLink } from "react-router-dom";

export default function Header({ children, ...restProps }){
    return <Frame {...restProps} >
                <WidthContainer>{children}</WidthContainer>
           </Frame>
}

Header.Container = function HeaderContainer({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

Header.Logo = function HeaderLogo({src, alt, ...restProps }){
    return <Logo src={src} alt={alt} {...restProps}  />
}

Header.Link = function HeaderLink({to, children, ...restProps }){
    return <Link to={to} {...restProps} >{children}</Link>
}

Header.Image = function HeaderImage({to, src, alt, ...restProps}){
    return <RouterLink to={to} {...restProps}>
                <Image src={src} alt={alt} />
            </RouterLink>
}

Header.Button = function HeaderButton({ background, color, children, ...restProps}){
    return <Button {...restProps} background={background} color={color} >{children}</Button>
}
