//'page creators' are used to dynamically create pages
//this document exports all page creators
const {createRecipientDetails} = require('./recipientDetails.creator.js')

module.exports = {
    allCreators: [createRecipientDetails]
}