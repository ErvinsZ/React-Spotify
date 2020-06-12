import React from 'react'



class Footer extends React.Component {
    render(){
        return(
        <footer>
            <div clasName="container1">
                <div className="row">
                    <div className="col-1">
                        <img src={"https://static.stereogum.com/uploads/2017/10/queen-1507300904-640x596.jpg"} style={{height:"50px", paddingleft:"20px"}}></img>
                    </div>
                    <div className="col-2 mt-3 ml-1">
                        <div style={{color:"white"}}>
                        News Of The World<br></br>
                        <span style={{color:"grey"}}>Queen</span>
                        </div>
                    </div>
                    <div className="col-6 mt-3" style={{textalign: "center"}}>
                    <button type="button" className="btn btn-sm"><i className="fa fa-random fa-lg"></i></button>
                    <button type="button" className="btn btn-sm">  <i className="fa fa-step-backward fa-lg"> </i></button>
                    <button type="button" className="btn btn-sm"> <i className="fa fa-play-circle fa-lg"> </i></button>
                    <button type="button" className="btn btn-sm"> <i className="fa fa-step-forward fa-lg"> </i></button>
                    <button type="button" className="btn btn-sm"> <i className="fa fa-redo-alt"> </i><br></br></button>
                    <div className="w3-light-grey w3-round-xlarge mt-3">
                    <div className="w3-container w3-round-xlarge" style={{height:"5px"}}></div>
                    </div>
                    </div>


                </div>
            </div>
        </footer>
        )
    }
}

export default Footer