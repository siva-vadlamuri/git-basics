import React from 'react'
import Nav from '../../components/Common/Header'
import Sidebar from '../../components/Common/Sidebar';
import Footer from '../../components/Common/Footer'


export default ({ children }) => {

    console.log('render Main')

    return (
        <div>
            <Nav />
            <main className="mainContainer">
                <Sidebar />
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

