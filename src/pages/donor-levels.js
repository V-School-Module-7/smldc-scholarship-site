import React from 'react'
import Footer from '../components/footer.js'
import {graphql} from 'gatsby'
import SliceRenderer from '../components/slices/index.js'
import globalStyles from '../styles/global.module.css'
import Layout from '../components/layout'

export default props => {

    const data = props.data.prismicDonorLevels.data
    console.log(data.body)

    return (
        <Layout>
            <div
              className={globalStyles.container}
            >
                <h1
                  className={globalStyles.headerTitle}
                >{data.title.text}</h1>
                <SliceRenderer slices={data.body}/>
            </div>
        </Layout>
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