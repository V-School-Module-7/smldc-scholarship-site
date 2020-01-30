require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'smldc-website',
        accessToken: `${process.env.PRISMIC_TOKEN}`,
        schemas: {
          testtype: require('./src/json-schemas/testtype.json'),
          recipients: require('./src/json-schemas/recipient.json')
        }
      }
    }
  ]
}
