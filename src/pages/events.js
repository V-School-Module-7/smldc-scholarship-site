import React from 'react'
import {EventCardSmall, EventCardLarge} from '../components/events/index.js'
import {graphql} from 'gatsby'
import PrismicDOM from 'prismic-dom'

export default props => {
    console.log('events props')
    console.log(props)
    const data = props.data.allPrismicEvent.edges.map(edge => edge.node.data)
    //data = array of events
    const now = new Date().getTime()

    const filterEventPast = (event) => {
        const eventDate = PrismicDOM.Date(event.date).getTime()
        return eventDate < now
    }

    const filterEventFuture = (event) => {
        const eventDate = PrismicDOM.Date(event.date).getTime()
        return eventDate > now
    }

    const largeEvents = data.filter(event => filterEventFuture(event));
    //upcoming events are rendered big
    const smallEvents = data.filter(event => filterEventPast(event));
    //past events are rendered small

    return (
        <>
            <div>
                {largeEvents.map((e, i) => <EventCardLarge key={i+'bigE'} event={e}/>)}
            </div>
            <div>
                {smallEvents.map((e, i) => <EventCardSmall key={i+'smallE'} event={e}/>)}
            </div>
        </>
    )
}

export const query = graphql`
query eventsQuery {
    allPrismicEvent {
      edges {
        node {
          data {
            cta_button_text
            date
            event_name {
              text
            }
            main_image {
              url
              alt
            }
            main_info {
              text
              raw {
                text
                type
                spans {
                  start
                  end
                  type
                }
              }
            }
          }
        }
      }
    }
  }
`

