import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    padding-top: 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
`;

export const Button = styled.p`
    width: 30px;
    height: 30px;
    border: none;
    background-color: white;
    margin: 0;
    margin-top: 5px;
    margin-right: 10px;
    &:hover {
        cursor: pointer;
    }
`;

export const BoldText = styled.p`
    font-weight: bolder;
    margin-bottom: 0;
    margin-top: 5px;
    margin-right: 10px;
`;

export const SmallText = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    color: gray;
`;

export const Text = styled.p`
    padding: 0;
    margin-bottom: 0;
    margin-top: 5px;
`;