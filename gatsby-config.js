require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'smldc-website',
        accessToken: `${process.env.PRISMIC_TOKEN}`,
        schemas: {
          header: require('./src/prismic-schemas/header.json')
          testtype: require('./src/prismic-schemas/testtype.json'),
          footer: require('./src/prismic-schemas/footer.json'),
          boardmember: require('./src/prismic-schemas/boardmember.json'),
          recipients: require('./src/json-schemas/recipient.json')
        }
      }
    }
  ]
}
