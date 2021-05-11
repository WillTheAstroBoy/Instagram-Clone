import React from "react";
import { Container, Frame } from "./style/home";

export default function Home({ children, ...restProps }){
    return (
        <Container {...restProps} >{children}</Container>
    )
}

Home.Frame = function HomeFrame({ children, ...restProps }){
    return <Frame {...restProps} >{children}</Frame>
}