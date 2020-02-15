import React from 'react'
import {RichText} from 'prismic-reactjs'
import linkResolver from '../../linkResolver.js'
import HandleRichText from '../handleRichText.js'
export default props => {
    const slice = props.slice
    const {paragraph} = slice
    return (
        <>
        <div>
            <hr/>
            <HandleRichText richText={paragraph}/>
            <hr/>
        </div>
        </>
    )
}