import React from 'react'
import {RichText} from 'prismic-reactjs'
import linkResolver from '../../linkResolver.js'

export default props => {
    const slice = props.slice
    const {paragraph} = slice
    return (
        <>
        <div>
            <hr/>
                {paragraph.text}
            <hr/>
        </div>
        </>
    )
}