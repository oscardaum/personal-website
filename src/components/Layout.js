import React from 'react';
import {Container} from 'react-bootstrap';

export const Layout = (props) => (
    //anything rendered should be in the middle
    <Container> 
        {props.children}
    </Container>
)