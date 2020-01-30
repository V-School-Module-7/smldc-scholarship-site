require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'smldc-website',
        accessToken: `${process.env.PRISMIC_TOKEN}`,
        schemas: {
          testType: require('./src/json-schemas/testType.json'),
          boardmember: require('./src/json-schemas/boardmember.json')
        }
      }
    }
  ]
}