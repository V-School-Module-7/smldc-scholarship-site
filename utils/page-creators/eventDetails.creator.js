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
                  slugs
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
        const {slugs} = edge.node
        const pageID = `${slugs[0]}`
        
        createPage({
            path: `/events/${pageID}`,
            component: eventDetailsTemplate,
            context: {
              id: edge.node.id,
            },
        })
    })
}

module.exports = {createEventDetails}