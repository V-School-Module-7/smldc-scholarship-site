//because many pages are programmatically generated,
//we have to set up this link resolver to tell link


export const linkResolver = doc => {
    
    if(doc.type === 'recipient'){
        return `/recipients/${doc.uid || doc.id || doc.uid}`
    }
    if(doc.type === 'event'){
        return `/events/${doc.slug || doc.id || doc.uid}`
    }

}
