import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Error = styled.h4`
    margin: 0;
    padding: 2px 0 5px 0;
    color: red;
    width: 100%;
    border-radius: 4px;
    font-size: small;
    font-weight: 300;
    text-align: left;
    box-sizing: border-box;
    display: inline-block;
`;

export const ErrorLabel = styled.h4`
    margin: 0;
    padding: 5px 0 5px 0;
    color: red;
    width: 100%;
    font-size: normal;
    font-weight: 300;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 5vh;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    max-width: 350px;
`;
export const Text = styled.h1`
    align-self: center;
    opacity: 0.7;
    margin-bottom: ${(props) => (props.errorMesseges.length > 0 ? '2px' : '30px')};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  margin-bottom: ${(props) => (props.errorMesseges.length > 0 ? '2px' : '25px')};
  display: inline-block;
  border: 1px solid #ccc;
  border-color: ${(props) => (props.errorMesseges.length > 0 ? 'red' : '#ccc')};
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  opacity: 0.8;
  float: left;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  border: 0;
`;

export const Submit = styled.button`
    background: cadetblue;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;
    width: 100%;
    margin-top: 27px;
`;