import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
    border: 1.5px solid #e4e4e4;
    margin-bottom: 3em;
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 5px 15px;
    border-radius: 3px;
`;

export const Link = styled(RouterLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Avatar = styled.img`
    width: 30px;
    border-radius: 55px;
    margin-right: 5px;
`;

export const Text = styled.p`
    color: black;
    font-size: 14px;
    
    font-weight: bolder;
`;