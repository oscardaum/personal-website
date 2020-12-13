import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import FriendsCropped from '../assets/koi.jpg';

const Styles = styled.div`
  .jumbo {
      background: url(${FriendsCropped}) no-repeat fixed bottom;
      background-size cover;
      height: 250px;
      color: #efefef;
      position: relative; 
      z-index: -2;
      display: flex;
      justify-content:center;
      align-items:center;
  }

  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
            <Container>
                <h1>Welcome</h1>
                <p>Welcome to my personal website</p>
            </Container>
        </Jumbo>
    </Styles>

)