import React from 'react'
import RecipientCard from './recipientCard.js'
import globalStyles from '../styles/global.module.css'

export default props => {

    return (
        <>
            <div
                className={globalStyles.sectionTitle}
            >
                {props.yearNumber}
            </div>
            <div>
                {props.recipients.map(recipe => <RecipientCard {...recipe}/>)}
            </div>
        </>
    )
}