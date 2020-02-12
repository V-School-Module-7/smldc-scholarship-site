import React from 'react'
import cardStyles from '../styles/personCard.module.css'
const {recipientDetailsInternal} = require('../fragments/index.js')

export default props => {
    const data = props.data
    return (
        <>
        <div className={cardStyles.card} {...props}>
            <img className={cardStyles.headshot} src={props.data.headshot.url}></img>
            <div className={cardStyles.name}>{props.data.name.text}</div>
            <div className={cardStyles.sub}>{props.data.position.text}</div>
        </div>    
        </>
    )
}

export const pageQuery = graphql`
query MyTastyArticle($id: String!){
    prismicRecipient(id: {eq: $id}) {
        uid
        data {
          year_received
          name {
            text
          }
          headshot {
            url
          }
          about {
            url
          }
        }
    }
}
`