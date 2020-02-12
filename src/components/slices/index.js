import React from 'react'
import ImageParagraphSlice from './imageParagraphSlice.js'


//this element will take an array of slices
//detect their type
//and render them accordingly
export default props => {
    return (
        <div>
            {/* TODO: make it detect the type of slice and render accordingly */}
            {props.slices && props.slices.map(slice => <ImageParagraphSlice slice={slice}/>)} {/* slice.slice . . . */}
        </div>
    )
}