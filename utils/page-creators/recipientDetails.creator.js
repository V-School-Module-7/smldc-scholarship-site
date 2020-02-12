const {recipientDetailsInternal} = require('../../src/fragments/index.js')
const path = require('path')

const createRecipientDetails = async (graphql, createPage) => {
    console.log('creating!')

    const recipientDetailsTemplate = path.resolve('../../src/templates/recipientDetails.js')
    const pages = await graphql(`
        {
            allPrismicRecipient {
                edges {
                    node {
                      uid
                      data {
                        year_received
                        name {
                          text
                        }
                        headshot {
                          url
                        }
                        about {
                          url
                        }
                      }
                    }
                }
            }
        }
    `)

    pages.data.allPrismicRecipient.edges.forEach(edge => {
        const {year_received, name, headshot, uid} = edge.node.data
        const pageId = `${name.text}_${uid}`
        console.log('making page:', pageId)
        createPage({
            path: `/recipients/${pageId}`,
            component: recipientDetailsTemplate,
            context: {
              id: edge.node.id,
            },
        })
    })
}

module.exports = {createRecipientDetails}