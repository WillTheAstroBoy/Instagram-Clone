import React from "react";
import { Container, Frame, Text, Link, Select, Option } from "./style/footer";

export default function Footer({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

Footer.Frame = function FooterFrame({ children, ...restProps }){
    return <Frame {...restProps} >{children}</Frame>
}

Footer.Text = function FooterText({ children, ...restProps }){
    return <Text {...restProps} >{children}</Text>
}

Footer.Link = function FooterLink({ to, children, ...restProps }){
    return <Link to={to} {...restProps} >{children}</Link>
}

Footer.Select = function FooterSelect({children,  ...restProps }){
    return <Select {...restProps} >{children}</Select>
}

Footer.Option = function FooterOption({ value, children, ...restProps }){
    return <Option value={value} {...restProps}>{children}</Option>
}