import React from "react";
import { 
    Container, 
    Frame, 
    Wrapper,
    Input, 
    Button, 
    Text, 
    Link, 
    Image, 
    Logo, 
    BoldText, 
    Error 
} from "./style/form";


export default function Form({ children, ...restProps}){
    return children;
}

Form.Container = function FormContainer({ children, ...restProps}){
    return <Container {...restProps} >{children}</Container>
}

Form.Wrapper = function FormWrapper({ children, ...restProps }){
    return <Wrapper {...restProps} >{ children }</Wrapper>
}

Form.Frame = function FormFrame({ children, ...restProps}){
    return <Frame {...restProps} >{children}</Frame>
}

Form.Input = function FormInput({...restProps}){
    return <Input {...restProps} />
}

Form.Button = function FormButton({ opacity, children, ...restProps }){
    return <Button opacity={opacity} {...restProps} >{children}</Button>
}

Form.Text = function FormText({ children, ...restProps}){
    return <Text {...restProps} >{children}</Text>
}

Form.Link = function FormLink({ to, children, ...restProps }){
    return <Link to={to} { ...restProps } >{children}</Link>
}

Form.Image = function FormImage({ src, alt, ...restProps }){
    return <Image src={src} alt={alt} {...restProps} />
}

Form.Logo = function FormLogo({ src, alt, ...restProps}){
    return <Logo src={src} alt={alt} />
}

Form.BoldText = function FormBoldText({ children, ...restProps }){
    return <BoldText {...restProps} >{children}</BoldText>
}

Form.Error = function FormError({ children, ...restProps }){
    return <Error {...restProps} >{children}</Error>
}