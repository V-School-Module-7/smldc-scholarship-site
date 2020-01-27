import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'


export default props => {

    const _data = useStaticQuery(graphql`
        query FooterQuery {
            prismicFooter {
                data {
                    footerText {
                        text
                    }
                }
            }
        }
    `)
    const data = _data.prismicFooter.data //so we don't have to type query.data.field.data.query.data.thing.text.otherthing
    
    return (
        <footer>
            <p>{data.footerText.text}</p>
        </footer>
    )
}