import React from 'react'

class Jumbotron extends React.Component{
    render(){
        return(
            <div>
                <div class="jumbotron">
            <div class="colllapse-btn">
              <div class="row no-gutters">
                <div class="dropdown dropright">

                  <button type="button" class="btn-sm" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-bars fa-3x"></i></button> 

                  <div class="dropdown-menu" style={{backgroundcolor: "rgba(0, 0, 0, 0.295)"}} aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item noHover" href="#"><i class="fas fa-home fa-lg"></i> HOME</a>
                    <a class="dropdown-item noHover" href="#"><i class="fas fa-search fa-lg"></i> SEARCH</a>
                    <a class="dropdown-item noHover" href="#"><i class="fas fa-stream fa-lg"></i> YOUR LIBRARY</a>
                  </div>
                </div>
              </div>
            </div>
       <div class="row no-gutters">
              <div class="col">
            <p class="p" style={{color:"rgba(221, 213, 213, 0.644)", fontweight:"510"}}>10'746'023 montly listeners</p>
            <h1 class="display-5 mr-5 ml-5 artist-name"style={{fontsize:"50px"}}></h1>
            <a class="btn btn-lg" href="#" role="button" style={{backgroundcolor:" #1DB954", color:"white"}}>PLAY</a>
            <a class="btn btn-lg btn-light" href="#" role="button" style={{backgroundcolor:"black", opacity:"0.7", color:"white"}}>FOLLOW</a>          
            <a class="btn1" href="#" role="button" style={{backgroundcolor:"transparent", opacity:"0.7", color:"white"}}><i class="fas fa-ellipsis-h fa-lg"></i></a>
            <div class="jumbo-bottom">
              <button type="button" class="btn-md">OVERVIEW</button>
              <button type="button" class="btn-md">RELATED ARTISTS</button>
              <button type="button" class="btn-md">ABOUT</button>
            </div>
            </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Jumbotron