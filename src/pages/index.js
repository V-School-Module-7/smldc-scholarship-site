import React from "react"
import {useStaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import globalStyles from '../styles/global.module.css'
import buttonStyles from '../styles/buttons.module.css'

export default () => {
    const _data = useStaticQuery(graphql`
    query HomePageQuery {
        prismicHomePage {
            data {
              welcome {
                text
              }
              vision {
                text
              }
              mission {
                text
              }
              how_to_help {
                text
              }
              donations {
                text
              }
              about_scholarship {
                text
              }
              skip_morgan_image {
                url 
                }
              }
            }
          }
        
    `)
let data =_data.prismicHomePage.data
 console.log(data)
return (
    <Layout>
        <div 
          className={globalStyles.container}
        >
            <div>
              <img 
              className = {globalStyles.floatPicture}
              src={data.skip_morgan_image.url}/>
          </div>
            <h3>{data.welcome.text}</h3>
                <p>{data.vision.text}</p>
                <p>{data.mission.text}</p>
                <p>{data.about_scholarship.text}</p>
            <h3>{data.how_to_help.text}</h3>
                <p>{data.donations.text}</p>
                <button
                  className={buttonStyles.donate}
                >
                  Make a Donation
                </button>

          
        </div>
        
    </Layout>
    )

}