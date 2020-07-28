import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({gaveOver, text}) => (
    <StyledDisplay gameOver={gaveOver}>{text}</StyledDisplay>
)

export default Display; 