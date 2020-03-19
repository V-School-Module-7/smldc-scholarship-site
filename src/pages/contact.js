import React from'react'
import Footer from '../components/footer'
import formStyles from '../styles/form.module.css'
import Layout from '../components/layout'
import globalStyles from '../styles/global.module.css'


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
        <Layout>
            <h1 
                className={globalStyles.title} 
            >
                Contact Us
            </h1>
            <div
                className={globalStyles.container}
            >
            <form onSubmit={handleSubmit}
                  className={formStyles.form}  
            >
                <div>
                    <label htmlFor='name' >Name</label><br/>
                    <input  className={formStyles.input}
                            name='name' ref={refs.name} required={true} type='text'></input>
                </div>
                <div>
                    <label htmlFor='email'>Email</label><br/>
                    <input  className={formStyles.input}
                            name='email' ref={refs.email} required={true} type='text'></input>
                </div>
                <div>
                    <label htmlFor='phone'>Phone</label><br/>
                    <input  className={formStyles.input}
                            name='phone' ref={refs.phone} type='text'></input>
                </div>
                <div>
                    <label htmlFor='subject'>Subject</label><br/>
                    <input  className={formStyles.input}
                            name='subject' ref={refs.subject} type='text'></input>
                </div>
                <div
                   className={formStyles.inputLarge}
                >
                    <label  htmlFor='message'
                            className={formStyles.input}
                    >Message</label><br/>
                    <textarea 
                        className={formStyles.textarea}
                        name='message' ref={refs.message} required={true}>
                    </textarea>
                </div>
                <div 
                    className={formStyles.submitContainer}
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
        </div>
        </Layout>
    )
}