import React from 'react'
import ImageParagraphSlice from './imageParagraphSlice.js'
import RichTextParagraphSlice from './richTextParagraphSlice.js'


//this element will take an array of slices
//detect their type
//and render them accordingly
const renderSlices = slices => {
    return slices.map(slice => {
        switch (slice.slice_type) {
            case "rich_text_paragraph":
                return slice.items.map(slice => <RichTextParagraphSlice slice={slice}/>)
            case "image_paragraph":
                return slice.items.map(slice => <ImageParagraphSlice slice={slice}/>)
            default:
                return <div>Object type <strong>{slice.slice_type}</strong> not recognized</div>
        }
    })
}
export default props => {
    return (
        <>
            {renderSlices(props.slices)}
        </>
    )
}