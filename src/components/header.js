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
            logo{
              url
            },
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
            },
            title7 {
              html
              text
            },
            title8 {
              html
              text
            },
            title9 {
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
            <Link to="/"><img height='30vh' alt='' src={data.logo.url}/></Link>
            <Link to='/recipients' className={headerStyles.links}>{data.title4.text}</Link>
            <Link to='/apply' className={headerStyles.links}>{data.title5.text}</Link>
            <Link to='/donate' className={headerStyles.links}>{data.title6.text}</Link>
            <Link to='/donor-levels' className={headerStyles.links}>{data.title3.text}</Link>
            <Link to='/events' className={headerStyles.links}>{data.title7.text}</Link>
            <Link to='/board' className={headerStyles.links}>{data.title8.text}</Link>
            <Link to='/contact' className={headerStyles.links}>{data.title9.text}</Link>


        </ul>
    );
};