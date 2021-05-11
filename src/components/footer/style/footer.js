import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
    text-align: center;
    padding: 3em 0;
    width: ${({ width }) => width };
`;

export const Frame = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    color: gray;
    justify-content: ${({ align }) => align };
`;

export const Text = styled.p`
`;

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: gray;
    margin: 0 ${({ margin }) => margin ? margin : "10px"};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "12.7px" };
`;

export const Select = styled.select`
    border: none;
    cursor: pointer;
    color: gray;
    margin-right: 10px;
`;

export const Option = styled.option`
    color: gray;
`;