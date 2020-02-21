import React from 'react'

export default props => {
    console.log('big event')
    console.log(props)
    const {main_info, event_name, main_image} = props.event
    return (
        <div {...props}>
            <img 
                src={main_image.url} 
                alt={main_image.alt} 
                style={{
                    float:'left',
                    maxWidth: '200px',
                }}
            />
            <h1>{event_name.text}</h1>
            <p>{main_info.text}</p>
        </div>
    )
}