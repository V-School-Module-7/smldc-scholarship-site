import React from 'react'
import {graphql} from 'gatsby'
import cardStyles from '../styles/personCard.module.css'
const {recipientDetailsInternal} = require('../fragments/index.js')

export default props => {
    const data = props.data.prismicRecipient.data
    console.log(data)
    return (
        <>
        <div className={cardStyles.card} >
            <img className={cardStyles.headshot} src={data.headshot.url}></img>
            <div className={cardStyles.name}>{data.name.text}</div>
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