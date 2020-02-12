import React from 'react'
import {RichText} from 'prismic-reactjs'
import linkResolver from '../../linkResolver.js'

export default props => {
    console.log(props)
    const slice = props.slice
    const {paragraph, image, float_right} = slice
    return (
        <>
        <div>
            Hey
            <p>
            {image && (
                <img    src={image.url} 
                        style={{
                            float: float_right ? 'right' : 'left', 
                            maxWidth: '250px',
                        }}
                />
            )}
            {paragraph.text}
            </p>
        </div>
        </>
    )
}