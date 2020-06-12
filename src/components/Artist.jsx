import React from 'react'
import SideBar from './SideBar'
import Footer from "./Footer"
import Jumbotron from './Jumbotron'

class Artist extends React.Component {
    render(){
        return(
            <div>
            <SideBar/>
            <Jumbotron/>
            <Footer/>
            </div>
        )
    }
}

export default Artist