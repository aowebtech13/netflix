import React from 'react'
import './BackgroundImage.css' // Assuming you have a CSS file for styles
import backgroundImage from '../assets/background.jpg'; // Adjust the path as necessary
import { useEffect } from 'react';

const BackgroundImage = () => {
  return (
    <div>
        <img src='{backgroundImage}' alt=''/>

    </div>
  )
}

const container = styled.div`
    height: 100vh;
    width: 100vw;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
`;
