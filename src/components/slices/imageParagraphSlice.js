import React from 'react'
import globalStyles from '../../styles/global.module.css'
import HandleRichText from '../HandleRichText.js'

export default props => {
    console.log('imageParagraphSlice.js')
    console.log(props)
    const slice = props.slice
    const {paragraph, image, float_right} = slice
    return (
        <>
        <div
            className={globalStyles.container}
        >
            {image && (
                <img    src={image.url} 
                        style={{
                            float: float_right ? 'right' : 'left', 
                            maxWidth: '250px',
                            padding: float_right ? '0px 0px 10px 10px' : '0px 10px 10px 0px',
                        }}
                />
            )}
            <HandleRichText richText={paragraph}/>
        </div>
        </>
    )
}