const {recipientDetailsInternal} = require('../../src/fragments/index.js')
const path = require('path')

const createRecipientDetails = async (graphql, actions) => {
    const {createPage} = actions
    const recipientDetailsTemplate = path.resolve('./src/templates/eventDetails.js')
    const pages = await graphql(`
        {
            allPrismicRecipient {
                edges {
                    node {
                      id
                      uid
                      slugs
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
    `)

    pages.data.allPrismicRecipient.edges.forEach(edge => {
        const {slugs} = edge.node
        const pageID = `${slugs[0]}`
        
        createPage({
            path: `/recipients/${pageID}`,
            component: recipientDetailsTemplate,
            context: {
              id: edge.node.id,
            },
        })
    })
}

module.exports = {createRecipientDetails}