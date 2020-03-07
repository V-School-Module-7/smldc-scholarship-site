import React from 'react'
import BoardMember from '../components/boardMember.js'
import {graphql} from 'gatsby'
import globalStyles from '../styles/global.module.css'
import cardStyles from '../styles/personCard.module.css'
import Layout from '../components/layout'
import SliceRenderer from '../components/slices/index.js'

export default props => {
    const {board_members, body} = props.data.prismicBoard.data
    return (
        <Layout>
            <div className={globalStyles.title}>Board of Directors</div>
            <div
              className={cardStyles.cardContainer}
            >   
                {board_members.map(datum => <BoardMember {...datum}/>)}
            </div>
            <SliceRenderer slices={body}/>
        </Layout>
    )
}

export const pageQuery = graphql`
  {
    prismicBoard {
      data {
        board_members {
          headshot {
            url
          }
          name
          position
        }
        body {
          slice_type
          items {
            float_right
            image {
              url
            }
            paragraph {
              raw {
                spans {
                  end
                  start
                  type
                }
                text
                type
              }
              text
            }
          }
        }
      }
    }
  }
`