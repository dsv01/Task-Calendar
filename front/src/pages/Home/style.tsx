import styled from 'styled-components';

export const HomeDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

export const Header = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 15%;

    background-color: #aaaccc;
`;

export const Content = styled.div `
    display: flex;
    flex-direction: row;

    height: 75%;

    // background-color: blue;
`;

export const Footer = styled.div `
    display: flex;
    flex-direction: row;

    height: 10%;

    background-color: #aaaccc;
`;

export const Logo = styled.h1 `
    display: flex;

    width: 4.5 vw;
    height: 4.5 hw;

    margin-left: 30px;

    color: #5F617A;
    font-family: 'Arial', sans-serif;
`;

export const LeftSide = styled.div `
    display:flex;

    width: 35%;
    height: 100%;

    background-color: #80fa46;
`;

export const RightSide = styled.div `
    display:flex;

    width: 65%;
    height: 100%;

    background-color: #Fa7d46;
`;
