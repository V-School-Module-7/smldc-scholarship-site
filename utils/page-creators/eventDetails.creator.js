const path = require('path')

const createEventDetails = async (graphql, actions) => {
    const {createPage} = actions
    const eventDetailsTemplate = path.resolve('./src/templates/eventDetails.js')
    const pages = await graphql(`
        {
            allPrismicEvent {
              edges {
                node {
                  id
                  uid
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
                      raw {
                        text
                        type
                        spans {
                          start
                          end
                          type
                        }
                      }
                      text
                    }
                  }
                }
              }
            }
        }
    `)

    pages.data.allPrismicEvent.edges.forEach(edge => {
        const {event_name} = edge.node.data
        const {uid} = edge.node

        const pageId = `${event_name.text}_${uid}`
        console.log('creating page!: ', pageId)
        createPage({
            path: `/events/${pageId}`,
            component: eventDetailsTemplate,
            context: {
              id: edge.node.id,
            },
        })
    })
}

module.exports = {createEventDetails}