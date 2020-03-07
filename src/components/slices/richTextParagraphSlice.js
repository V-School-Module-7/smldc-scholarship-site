import React from 'react'
import {RichText} from 'prismic-reactjs'
import linkResolver from '../../linkResolver.js'
import HandleRichText from '../handleRichText.js'
import globalStyles from '../../styles/global.module.css'


export default props => {
    const slice = props.slice
    const {paragraph} = slice
    return (
        <>
        <div
            className={globalStyles.container}
        >
            <hr/>
            <HandleRichText richText={paragraph}/>
            <hr/>
        </div>
        </>
    )
}