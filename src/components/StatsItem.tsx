import React from 'react'
import { TextContainer } from '../styles'

interface StatsProps {
    icon: string;
    title: string;
    description: string

}
const StatsItem = ({ title, description, icon }:StatsProps) => {
  return (
    
  <TextContainer stats>
    <figure>
    <img src={`../../images/icon-${icon}.svg`} alt={icon} />
    </figure>
 
      <h4>{title}</h4>
      <p>{description}</p>
    </TextContainer>
    
  
  )
}

export default StatsItem
