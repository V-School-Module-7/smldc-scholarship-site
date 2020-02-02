require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'smldc-website',
        accessToken: `${process.env.PRISMIC_TOKEN}`,
        schemas: {
          testType: require('./src/prismic-schemas/testType.json'),
          header: require('./src/prismic-schemas/header.json')
        }
      }
    }
  ]
}
