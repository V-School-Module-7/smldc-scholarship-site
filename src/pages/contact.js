import React from'react'
import Footer from '../components/footer'


export default props => {

    //we're using uncontrolled state for the form
    //because it's simpler

    const refs = {
        name: React.createRef(),
        email: React.createRef(),
        phone: React.createRef(),
        subject: React.createRef(),
        message: React.createRef(),
    }

    const handleSubmit = event => {
        event.preventDefault()
        const formData = Object.entries(refs).map(ref => { return {[ref[0]]: ref[1].current.value} })
        console.log(formData)
        //TODO:submit formData to somewhere
        
        //erase form fields
        Object.entries(refs).forEach(ref => ref[1].current.value = '')
    }
    
    return (
        <>
            {/* yes, the styling is inline. Feel free to change this */}
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}
            >
                <div>
                    <label htmlFor='name' >Name</label><br/>
                    <input style={{
                                width: '80%'
                            }}
                            name='name' ref={refs.name} required={true} type='text'></input>
                </div>
                <div>
                    <label htmlFor='email'>Email</label><br/>
                    <input style={{
                                width: '80%'
                            }}
                            name='email' ref={refs.email} required={true} type='text'></input>
                </div>
                <div>
                    <label htmlFor='phone'>Phone</label><br/>
                    <input style={{
                                width: '80%'
                            }}
                            name='phone' ref={refs.phone} type='text'></input>
                </div>
                <div>
                    <label htmlFor='subject'>Subject</label><br/>
                    <input style={{
                                width: '80%'
                            }}
                            name='subject' ref={refs.subject} type='text'></input>
                </div>
                <div
                    style={{
                        gridColumnStart:'1',
                        gridColumnEnd:'-1',
                        textAlign: 'center'
                    }}
                >
                    <label htmlFor='message'
                        style={{
                            width: '80%',
                            textAlign: 'center'
                        }}
                    >Message</label><br/>
                    <textarea 
                    style={{
                        width: '80%',
                        height: '10em'
                    }}
                    name='message' ref={refs.message} required={true}></textarea>
                </div>
                <div 
                    style={{
                        gridColumnStart:'1',
                        gridColumnEnd:'-1',
                        width: '30%',
                        textAlign: 'center',
                        margin: 'auto'
                    }}
                    type='submit'
                ><button>Submit</button></div>
            </form>
            <div>
                <div>
                    <strong>By phone: </strong><br/>
                    817120281238123 <br/>
                    Bla bllAAAA aNme mNae
                </div>
                <div>
                    <strong>Address: </strong><br/>
                    PO Box 57203
                    SLC UT 84157
                </div>
            </div>
            <Footer/>
        </>
    )
}