import React from 'react'
import cardStyles from '../styles/personCard.module.css'

export default props => {
    const data = props.data
    return (
        <>
        <div className={cardStyles.card} {...props}>
            <img className={cardStyles.headshot} src={props.headshot.url}></img>
            <div className={cardStyles.name}>{props.name}</div>
            <div className={cardStyles.sub}>{props.position}</div>
        </div>    
        </>
    )
}