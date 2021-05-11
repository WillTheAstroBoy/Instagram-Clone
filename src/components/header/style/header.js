import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Frame = styled.div`
    padding: 0.7em 20px;
    background-color: #ffffff;
    border-bottom: 1px solid #e4e4e4;
    
`;

export const WidthContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 850px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    
`;

export const Logo = styled.img`
    width: 103px;
    height: 29px;
`;

export const Image = styled.img`
    width: 35px;
    border-radius: 55px;
`;

export const Link = styled(RouterLink)`
    width: 30px;
    margin-right: 15px;
    color: black;
`;

export const Button = styled.button`
    background-color: ${({ background }) => background};
    color: ${({ color }) => color};
    border: none;
    width: 5rem;
    height: 2rem;
    border-radius: 4px;
    font-weight: bolder;
    margin-left: 10px;
    box-sizing: border-box;

    &:hover,
    &:focus {
        cursor: pointer;
        border: ${({ color }) => color } 1.5px solid;
    }
`;

