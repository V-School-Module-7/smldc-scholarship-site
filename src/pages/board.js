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
            <div>
                 Stuff about our organization and our board! We value true love, high quality sushi, and 3-day work weeks. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
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