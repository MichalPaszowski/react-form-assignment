import React from 'react';
import {
    Container,
    Error,
    ErrorLabel,
    FormContainer,
    Text,
    Input,
    Submit,
    Fieldset,
    Label
} from './styles/loginForm';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Label = function ({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>;
}

Form.Form = function ({ children, ...restProps }) {
    return <FormContainer {...restProps}>{children}</FormContainer>;
}

Form.Text = function ({ children, ...restProps }) {
    const { errors, name } = restProps;
    let errorMesseges = '';

    if (errors) {
        errors.forEach(function (error) {
            if (error.field === name) {
                if (!errorMesseges.includes(error.message)) {
                    errorMesseges += error.message;
                }
            }
        })
    }

    return <>
        <Text errorMesseges={errorMesseges} {...restProps}>{children}</Text>
        {(errorMesseges !== '') && <ErrorLabel>{errorMesseges}</ErrorLabel>}
    </>;
}

Form.Error = function ({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
}

Form.Input = function ({ children, ...restProps }) {
    const { errors, name } = restProps;
    let errorMesseges = '';
    if (errors) {
        errors.forEach(function (error) {
            if (error.field === name) {
                if (!errorMesseges.includes(error.message)) {
                    errorMesseges += error.message;
                }
            }
        })
    }
    return <>
        <Input errorMesseges={errorMesseges} {...restProps}>{children}</Input>
        {(errorMesseges !== '') && <Error>{errorMesseges}</Error>}
    </>;
}

Form.Submit = function ({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}

Form.Fieldset = function ({ children, ...restProps }) {
    return <Fieldset {...restProps}>{children}</Fieldset>
}