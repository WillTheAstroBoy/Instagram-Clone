import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    max-width: 650px;
    margin: auto;
    margin-top: 32px;
`;

export const Wrapper = styled.div`
`;

export const Frame = styled.form`
    display:flex;
    flex-direction: column;
    padding: 1.5em;
    border: 1.5px solid rgba(228, 228, 228, 1);
    text-align: center;
    margin-top: 20px;
    max-width: 250px;
`;

export const Input = styled.input`
    padding: 0.9em 1em;
    border-radius: 4px;
    color: gray;
    border: 1px solid rgba(220, 220, 220, 1);
    margin-bottom: 1em;
    width: 90%;
    min-width: 200px;
    background-color: rgb(250, 250, 250);
`;

export const Button = styled.button`
    padding: 0.5em 1em;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: none;
    color: white;
    font-weight: bold;
    background-color: #0095f6;
    opacity: ${({ opacity })=> opacity};

    &:hover {
        cursor: pointer;
    }
`;

export const Text = styled.p`
    color: gray;
    margin: 0;
`;

export const Image = styled.img`
    width: 400px;
`;

export const Logo = styled.img`
    width: 200px;
    margin: auto;
    margin-bottom: 1.4em;
`;

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: #20a6f8;
`;

export const BoldText = styled.p`
    color: gray;
    font-size: 1.1rem;
    margin: 0;
    font-weight: 550;
`;

export const Error = styled.p`
    color: red;
`;