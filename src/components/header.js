import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {Link} from 'gatsby'
import headerStyles from '../styles/header.module.css'

export default () => {

    const _data = useStaticQuery(graphql`
    query HeaderQuery{
        allPrismicHeader{
             nodes{
          data{
            title1 {
             html
             text
            },
            title2 {
              html
              text
            },
            title2 {
              html
              text
            },
            title3 {
              html
              text
            },
            title4 {
              html
              text
            },
            title5 {
              html
              text
            },
            title6 {
              html
              text
            }
          }
        }
      }
    }
    `)

    let data = _data.allPrismicHeader.nodes[0].data
    console.log(data)

    return (
        <ul className={headerStyles.headerContainer}>
            <Link to="/">{data.title1.text}</Link>
            <li className={headerStyles.links}>{data.title2.text}</li>
            <li className={headerStyles.links}>{data.title3.text}</li>
            <li className={headerStyles.links}>{data.title4.text}</li>
            <li className={headerStyles.links}>{data.title5.text}</li>
            <li className={headerStyles.links}>{data.title6.text}</li>
        </ul>
    );
};