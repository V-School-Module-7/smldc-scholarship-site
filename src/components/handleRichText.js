import React from 'react'
import {RichText} from 'prismic-reactjs'
import linkResolver from '../linkResolver.js'

export default props => {
    console.log('handleRichText.js')
    console.log(props)
    const rt = props.richText
    // if rich text is, in fact, rich text
    // we do rich text magic
    // otherwise we spit out plain text
    if (Object.prototype.toString.call(rt.raw) === '[object Array]'){
        return (
            <>
                {RichText.render(rt.raw, linkResolver)}
            </>
        )
    } else {
        return (
            <div>
                {/* try as hard as possible to find text */}
                {rt.text || rt.raw.text || rt.raw[0].text || 'You are a beautiful person, but there\'s no content here!'}
            </div>
        )
    }
}