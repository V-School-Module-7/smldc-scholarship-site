import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

export default props => {
    const data = props.data.prismicEvent.data
    console.log(data)
    console.log(data.event_name)
    return (
        <>
            <Layout>
                <h1>{data.event_name.text}</h1>
                <img
                    style={{
                        float: 'left'
                    }}
                    src={data.main_image.url}
                    alt={data.main_image.alt}
                >
                    
                </img>
                <p>{data.main_info.text}</p>
            </Layout>
        </>
    )
}

export const pageQuery = graphql`
query MyEvent($id: String!){
    prismicEvent(id: {eq: $id}) {
        uid
        data {
            cta_button_text
            date
            event_name {
              text
            }
            main_image {
              url
              alt
            }
            main_info {
              raw {
                text
                type
                spans {
                  start
                  end
                  type
                }
              }
              text
            }
          }
    }
}
`