import React from 'react'
import SideBar from './SideBar'
import Footer from "./Footer"

class Artist extends React.Component {
    render(){
        return(
            <div>
            <SideBar/>
            <Footer/>
            </div>
        )
    }
}

export default Artist