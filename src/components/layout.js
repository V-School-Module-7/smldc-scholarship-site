import React from 'react';
import Header from "./header"
import Footer from './footer'
import PropTypes from "prop-types"


const Layout = ({children}) => {
    console.log(PropTypes)
    return (
        <div>
            <Header/>
              {children}
            <Footer/>
        </div>
    );
};

export default Layout