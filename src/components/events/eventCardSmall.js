import React from 'react'

export default props => {
    console.log('big event')
    console.log(props)
    const {main_info, event_name, main_image} = props.event
    return (
        <div 
            {...props}
            style={{
                display: 'inline-block',
                margin: '10px'
            }}
        >
            <img 
                src={main_image.url} 
                alt={main_image.alt} 
                style={{
                    maxWidth: '200px',
                }}
            />
            <h1>{event_name.text}</h1>
        </div>
    )
}