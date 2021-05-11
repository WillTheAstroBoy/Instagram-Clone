import React from "react";
import { Container, BigText, Text } from "./style/not-found";

export default function NotFound({ children, ...restProps }){
    return (
        <Container {...restProps} >{children}</Container>
    )
}

NotFound.BigText = function NotFoundBigText({ children, ...restProps }){
    return <BigText {...restProps} >{children}</BigText>
}

NotFound.Text = function NotFoundText({ children, ...restProps }){
    return <Text {...restProps} >{children}</Text>
}