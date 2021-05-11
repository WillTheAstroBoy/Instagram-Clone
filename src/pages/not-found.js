import React from 'react';
import { NotFound } from "../components";

export default function NotFoundPage(){
    return (
        <NotFound>
            <NotFound.BigText>
                404
            </NotFound.BigText>
            <NotFound.Text>
                Oops! page not found.
            </NotFound.Text>
        </NotFound>
    )
}