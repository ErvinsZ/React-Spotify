import React from 'react'


class SideBar extends React.Component{
    render(){
        return(
            
                <div className="wrapper">
                    <nav id="sidebar">
                    <div className="sidebar-header">
                <img src={"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"} alt = {''}style={{objectfit : "cover", width:"150px"}}></img>
            </div>

            <ul className="list-unstyled components">
        
               
                <li>
                     <a href="#"><i className="fas fa-home"></i> Home</a>
                </li>
               
                <li>
                    <a href="#"><i className="fas fa-search"></i> Search</a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-stream"></i> Your Library</a>
                </li>
            </ul>

            <div className="footerSB"> <a href="#" class="p-3"><i class="fa fa-download pr-2" aria-hidden="true"></i>Install App</a>
              <br></br> <h6 class=" border-top ml-2"> <img src={"https://tshirt-factory.com/images/detailed/34/Cool-santa-T-shirt-design-34491.jpg"}  alt={""} className="mt-1 mr-1" style={{objectfit: "cover", width: "30px", borderradius:"40%"}}></img>Santa Claus</h6>
          </div>

                    </nav>
                </div>
            
        )
    }
}

export default SideBar