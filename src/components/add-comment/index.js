import React from "react";
import { Container, Form, Input, Button } from "./style/add-comment";

export default function AddComment({ children, ...restProps }){
    return <Container {...restProps} >{children}</Container>
}

AddComment.Form = function AddCommentForm({ onSubmit, children, ...restProps }){
    return <Form onSubmit={onSubmit} {...restProps} >{children}</Form>
}

AddComment.Input = function AddCommentInput({ inputRef, ...restProps }){
    return <Input ref={inputRef} {...restProps}  />
}

AddComment.Button = function AddCommentButton({ color, disabled, children, ...restProps }){
    return <Button color={color} disabled={disabled} {...restProps} >{children}</Button>
}