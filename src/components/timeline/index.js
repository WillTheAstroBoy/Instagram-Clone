import React from 'react';
import { Container } from "./style/timeline";

export default function Timeline({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}