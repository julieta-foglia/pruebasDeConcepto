import styled from 'styled-components';

export const Input = styled.input`
    font-family: 'Poppins';
    margin: 0.5em 0.5em 0.5em;
    padding: 1em 1em 2em;
    border: 2px solid #363636;
    border-radius: 5px;
    width: 50%;
    height: 3px;
    font-size: 1em;
`;

export const Container = styled.section`
    height: 86.5vh;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: 90%;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    background-color: #73dabf;
    color: #fff;
    height: 3em;
    width: 30%;
    border-radius: 5px;
    border: 2px solid;
    font-size: 1em;
    font-family: 'Poppins';
    margin-top: 2em;
`;