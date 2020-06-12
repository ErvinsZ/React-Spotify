import React from 'react'

class Jumbotron extends React.Component{
    render(){
        return(
            <div>
                <div className="jumbotron">
            <div className="colllapse-btn">
              <div className="row no-gutters">
                <div className="dropdown dropright">

                  <button type="button" className="btn-sm" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-bars fa-3x"></i></button> 

                  <div className="dropdown-menu" style={{backgroundcolor: "rgba(0, 0, 0, 0.295)"}} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item noHover" href="#"><i className="fas fa-home fa-lg"></i> HOME</a>
                    <a className="dropdown-item noHover" href="#"><i className="fas fa-search fa-lg"></i> SEARCH</a>
                    <a className="dropdown-item noHover" href="#"><i className="fas fa-stream fa-lg"></i> YOUR LIBRARY</a>
                  </div>
                </div>
              </div>
            </div>
       <div className="row no-gutters">
              <div className="col">
            <p className="p" style={{color:"rgba(221, 213, 213, 0.644)", fontweight:"510"}}>10'746'023 montly listeners</p>
            <h1 className="display-5 mr-5 ml-5 artist-name"style={{fontsize:"50px"}}></h1>
            <a className="btn btn-lg" href="#" role="button" style={{backgroundcolor:" #1DB954", color:"white"}}>PLAY</a>
            <a className="btn btn-lg btn-light" href="#" role="button" style={{backgroundcolor:"black", opacity:"0.7", color:"white"}}>FOLLOW</a>          
            <a className="btn1" href="#" role="button" style={{backgroundcolor:"transparent", opacity:"0.7", color:"white"}}><i className="fas fa-ellipsis-h fa-lg"></i></a>
            <div className="jumbo-bottom">
              <button type="button" className="btn-md">OVERVIEW</button>
              <button type="button" className="btn-md">RELATED ARTISTS</button>
              <button type="button" className="btn-md">ABOUT</button>
            </div>
            </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Jumbotron