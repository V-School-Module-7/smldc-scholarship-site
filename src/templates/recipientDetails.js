import React from 'react'
import {graphql} from 'gatsby'
import cardStyles from '../styles/personCard.module.css'
import SliceRenderer from '../components/slices/index.js'

export default props => {
    const data = props.data.prismicRecipient.data
    console.log(data)
    return (
        <>
        <div className={cardStyles.card} >
            <img className={cardStyles.headshot} src={data.headshot.url}></img>
            <div className={cardStyles.name}>{data.name.text}</div>
        </div>
        <SliceRenderer slices={data.body}/>
        </>
    )
}

export const pageQuery = graphql`
query MyArticle($id: String!){
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
          body {
            ... on PrismicRecipientBodyRichTextParagraph {
              slice_type
              items {
                paragraph {
                  text
                  html
                  raw {
                    text
                    type
                  }
                }
              }
            }
            ... on PrismicRecipientBodyImageParagraph {
              slice_type
              items {
                float_right
                image {
                  url
                  dimensions {
                    height
                    width
                  }
                }
                paragraph {
                  text
                  raw {
                    text
                    type
                    spans {
                      end
                      start
                      type
                    }
                  }
                }
              }
            }
          }
          
        }
    }
}
`