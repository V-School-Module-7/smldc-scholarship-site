import React from 'react';
import Link from 'Gatsby-link'

const header = () => {
    return (
        <ul>
            <li><Link to=''>Home</Link></li>
            <li><Link to='/donors'>Donors</Link></li>
            <li><Link to='/scholar_recip'>Scholar Recip</Link></li>
            <li><Link to='/apply'>Apply Now</Link></li>
            <li><Link to='/donate'>Donate</Link></li>
        </ul>
    );
};

export default header;