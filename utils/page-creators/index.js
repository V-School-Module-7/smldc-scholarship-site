//'page creators' are used to dynamically create pages
//this document exports all page creators
const {createRecipientDetails} = require('./recipientDetails.creator.js')
const {createEventDetails} = require('./eventDetails.creator.js')
module.exports = {
    allCreators: [createRecipientDetails, createEventDetails]
}