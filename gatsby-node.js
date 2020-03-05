const path = require('path')
const {allCreators} = require('./utils/page-creators/index.js')

exports.createPages = async ({graphql, actions}) => {

    allCreators.forEach(creator => {
        console.log('\n\n--------')
        console.log('making some pages')
        console.log('--------\n\n')
        creator(graphql, actions)
    }) 
    //this line of code runs all 'page creators'
    //dynamically creating pages based on prismic data
}