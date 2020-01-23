//because many pages are programmatically generated,
//we have to set up this link resolver to tell link

export const linkResolver = doc => {
    
    if(doc.type === 'example'){
        return `/examples/${doc.uid || doc.id}`
    }
}