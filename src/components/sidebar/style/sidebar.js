import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    width: 27%;
    height: 100%;
    max-height: 100vh;
    justify-content: space-between;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction };
    justify-content: space-between;
    width: ${({ width }) => width};
    margin-bottom: ${({ margin }) => margin};
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    justify-content: space-between;
    width: ${({ width }) => width};
`;

export const ProfilePicture = styled.img`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: 55px;
    margin-right: 5px;
`;

export const BoldText = styled.p`
    font-weight: bolder;
    color: ${({ color }) => color };
    margin: 0;
    margin-top: ${({ marginTop }) => marginTop ? marginTop : 0 }em;
    margin-bottom: ${({ marginTop }) => marginTop ? marginTop : 0 }em;
    font-size: 14px;
`;

export const Text = styled.p`
    color: ${({ color }) => color };
    font-size: 14px;
    margin: 0;
    cursor: ${({ cursor }) => cursor };
`;

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: black;
`;