import React from'react'
import {useStaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout.js'
import globalStyles from '../styles/global.module.css'


    export default () => {
        const _data = useStaticQuery(graphql`
        query ApplicationPageQuery {
            prismicApplicationPage {
              data {
                title {
                  text
                }
                deadline {
                  text
                }
                criteria_item1 {
                  text
                }
                criteria_item2 {
                  text
                }
                criteria_item3 {
                  text
                }
                criteria_item4 {
                  text
                }
                criteria_item5 {
                  text
                }
                criteria {
                  text
                }
              }
            }
          }`)

        let data =_data.prismicApplicationPage.data
        const criteriaItems = () => {

        }

        return (
            <Layout>
            <div
              className={globalStyles.container}
            >
                
                <h1>{data.title.text}</h1>
                <h3>{data.deadline.text}</h3>
                <ul>
                    <li>{data.criteria_item1.text}</li>
                    <li>{data.criteria_item2.text}</li>
                    <li>{data.criteria_item3.text}</li>
                    <li>{data.criteria_item4.text}</li>
                    <li>{data.criteria_item5.text}</li>
                </ul>
                <h3>{data.criteria.text}</h3> 
                
            </div>
            </Layout>
            
        )
        
    }