import React from 'react'
import cardStyles from '../styles/personCard.module.css'

export default props => {
    console.log(props)
    return (
        <div 
            className={cardStyles.card}
        >
         <img 
            className={cardStyles.headshot} 
            src={props.headshot.url}
        />
         <div
            className={cardStyles.name}
         >{props.name.text}</div>
         <a href={props.about.url}>About</a>
        </div>
    )
}