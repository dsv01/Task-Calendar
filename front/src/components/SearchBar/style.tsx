import styled from 'styled-components';

export const SearchBarDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 40 vw;

    margin: 20px;
    padding: 3px;

    border-radius: 4px;
    background-color: #f9f9f9;
`;

export const SearchIcon = styled.div `
    width: 10%;
`;

export const SearchField = styled.input `
    display: flex;

    width: 90%;

    padding: 8px;
    font-size: 16px;
    font-family: 'Arial', sans-serif;
    // border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;

    &:hover{
        background-color: #eaeaea;
    }

    &:focus{
        outline: none;
        border-color: #0074d9;
        box-shadow: 0 0 5px rgba(0, 116, 217, 0.5);
    }
`;