import React from 'react'
import RecipientCard from './recipientCard.js'
import globalStyles from '../styles/global.module.css'
import cardStyles from '../styles/personCard.module.css'

export default props => {

    return (
        <>
            <div
                className={globalStyles.sectionTitle}
            >
                {props.yearNumber}
            </div>
            <div 
                className={cardStyles.cardContainer}
            >
                {props.recipients.map(recipe => <RecipientCard {...recipe}/>)}
            </div>
        </>
    )
}