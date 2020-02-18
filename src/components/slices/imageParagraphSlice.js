import React from 'react'
import HandleRichText from '../HandleRichText.js'

export default props => {
    console.log('imageParagraphSlice.js')
    console.log(props)
    const slice = props.slice
    const {paragraph, image, float_right} = slice
    return (
        <>
        <div>
            {image && (
                <img    src={image.url} 
                        style={{
                            float: float_right ? 'right' : 'left', 
                            maxWidth: '250px',
                        }}
                />
            )}
            <HandleRichText richText={paragraph}/>
        </div>
        </>
    )
}