import React from 'react'
import Footer from '../components/footer.js'
import {graphql} from 'gatsby'
import SliceRenderer from '../components/slices/index.js'
import globalStyles from '../styles/global.module.css'

export default props => {

    const data = props.data.prismicDonorLevels.data
    console.log(data.body)

    return (
        <>
            <div>
                <h1>{data.title.text}</h1>
                <SliceRenderer slices={data.body}/>
            </div>
            <Footer/>
        </>
    )
}

export const pageQuery = graphql`
query MyQuery {
    prismicDonorLevels {
      data {
        title {
          text
        }
        body {
            ... on PrismicDonorLevelsBodyImageParagraph {
                slice_type
                items {
                  float_right
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
                  image {
                    url
                  }
                }
              }
        }
      }
    }
  }
`