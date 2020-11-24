import React from 'react'
import Nav from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';

export default ({children}) => {

    console.log('render Main Admin')

    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

