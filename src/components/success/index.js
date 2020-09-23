import React from 'react';
import {
    Success
} from './styles/success';

export default function SuccessScreen({ children, ...restProps }) {
    return <Success {...restProps}>{children}</Success>;
}
