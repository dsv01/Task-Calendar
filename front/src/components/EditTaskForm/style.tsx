import styled from 'styled-components';

export const EditTaskFormDiv = styled.form `
    display: grid;
    grid-template-rows: 0.4fr 1fr 0.3fr 0.3fr 0.3fr;

    width: 100%;

    margin: 5px;
    padding: 5px;
    border: 2px solid #ccc;

    background-color: #f9f9f9;
`;

export const EditTaskFormDivLabelInput = styled.form `
    display: flex;
    flex-direction: column;

    padding: 1%;
`;

export const EditTaskFormLabel = styled.label `
    display: flex;

    font-size: 16px;
    font-family: 'Arial', sans-serif;
`;

export const EditTaskFormInput = styled.input `
    display: flex;

    height: 100%;
    font-size: 16px;
    font-family: 'Arial', sans-serif;
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

export const EditTaskFormTextArea = styled.textarea `
    display: flex;

    height: 100%;
    font-size: 16px;
    font-family: 'Arial', sans-serif;
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

