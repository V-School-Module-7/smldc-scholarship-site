require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'smldc-website',
        accessToken: `${process.env.PRISMIC_TOKEN}`,
        schemas: {
          testtype: require('./src/prismic-schemas/testtype.json'),
          footer: require('./src/prismic-schemas/footer.json'),
          recipients: require('./src/json-schemas/recipient.json')
        }
      }
    }
  ]
}