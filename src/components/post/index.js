import React from "react";
import { Container, Header, Link, Text, Avatar, Image } from "./style/post";

export default function Post({ children, ...restProps}) {
    return <Container {...restProps} >{children}</Container>
}

Post.Header = function PostHeader({ to, src, alt,  children, ...restProps }){
    return <Header {...restProps}>
                <Link to={to}>
                    <Avatar src={src} alt={alt} />
                    <Text>{children}</Text>
                </Link>
           </Header>
}

Post.Image = function PostImage({ src, alt, ...restProps}){
    return <Image src={src} alt={alt} {...restProps} />
}
