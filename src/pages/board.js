import React from 'react'
import Footer from '../components/footer.js'
import BoardMember from '../components/boardMember.js'
import {graphql} from 'gatsby'
import globalStyles from '../styles/global.module.css'

export default props => {

    const boardData = props.data.allPrismicBoardmember.edges.map(edge => edge.node)

    return (
        <>
            <div className={globalStyles.title}>Board of Directors</div>
            <div>   
                {boardData.map(datum => <BoardMember {...datum}/>)}
            </div>
            <Footer/>
        </>
    )
}

export const pageQuery = graphql`
query BoardQuery {
    allPrismicBoardmember {
      edges {
        node {
          data {
            headshot {
              url
            }
            learn_more {
              url
            }
            name {
              text
            }
            position {
              text
            }
          }
        }
      }
    }
  }  
`