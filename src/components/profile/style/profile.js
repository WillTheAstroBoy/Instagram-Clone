import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    margin-top: 1.5em;

`;


export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ align }) => align};
    width: ${({ width }) => width};
    text-align: left;
`;

export const PostContainer = styled.div`
    margin-top: 2em;
    border-top: 1.5px solid #efefef;
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 1fr)); 
    grid-gap: 15px;
    padding-top: 2em;
`;

export const NoPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    border-top: 1.5px solid #efefef;
`;

export const Frame = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button``;

export const Image = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    
`;

export const PostImage = styled.img`
    width: 100%;
    max-height: 270px;
    object-fit: cover;

`;

export const Text = styled.p`
    margin: 0;
    margin-right: 2.5em;
    margin-bottom: 15px;
`;

export const BigText = styled.p`
    font-size: 1.8rem;
    font-weight: lighter;
    margin: 0;
    margin-bottom: 10px;
`;

export const BoldText = styled.p`
    font-weight: bolder;
    margin: 0;
    margin-bottom: 5px;
`;
