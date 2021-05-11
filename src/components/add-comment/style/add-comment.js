import styled from "styled-components";

export const Container = styled.div`
    border-top: 1.5px solid #e4e4e4;
    padding: 0 16px;
    margin-top: 4px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    
`;

export const Input = styled.input`
    border: none;
    outline: 0;
    padding: 20px 0;
    width: 90%;
`;

export const Button = styled.button`
    outline: 0;
    border: none;
    background: white;
    color: ${({ color }) => color};
    

    &:hover,
    &:focus {
        cursor: ${({ disabled }) => {
            return  disabled ? "not-allowed" : "pointer";
        } };
    }
`;