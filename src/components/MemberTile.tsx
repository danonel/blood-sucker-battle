import React from 'react';
import { Member } from '../core/entities/member';
import CatIcon from './icons/Cat';

const MemberTile= () => {
  console.log('aqui')
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // In your component
  const color = getRandomColor();


  return (
      <CatIcon size="100px" color={color}/>
  );
}

export default MemberTile;