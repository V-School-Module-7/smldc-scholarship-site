import React from 'react'
import RecipientYear from '../components/recipientYear.js'
import {graphql} from 'gatsby'
import globalStyles from '../styles/global.module.css'
import Footer from '../components/footer.js'

export default props => {
    const data = props.data.allPrismicRecipient.edges.map(edge => edge.node.data)

    let currentYear = new Date().getFullYear()
    let firstYear = 2007
    const yearsArray = []
    for(let i = currentYear + 1; i > firstYear; i--){
        let year = data.filter(datum => datum.year_received == i)
        if(year.length > 0)
            yearsArray.push({number: i, year})
    }

    return (
        <div
          className={globalStyles.container}
        >
            <div className={globalStyles.title}>Recipients</div>
            {yearsArray.map(year => <RecipientYear yearNumber={year.number} recipients={year.year} />)}
            <Footer/>
        </div>
    )
}

export const pageQuery = graphql`
query RecipientQuery {
    allPrismicRecipient {
      edges {
        node {
          data {
            year_received
            name {
              text
            }
            headshot {
              url
            }
          }
        }
      }
    }
  }
`