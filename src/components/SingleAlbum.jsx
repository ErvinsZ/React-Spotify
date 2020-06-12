import React from 'react'


class SingleAlbum extends React.Component {
    constructor(props){
    super(props)
    this.state ={
        Queen:[]
    }
}

componentDidMount(){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=queen", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "60a14be2e2mshc09f8e2d55f2a80p1322bdjsnad6771061050"
	}
}).then((response) => response.json())
.then((responseObject) => this.setState({ Queen: responseObject})
).then(() => this.setState({ loading: false }))
.catch((err) => {
  this.setState({ error: true });
  console.log("An error has occurred:", err);
});

};


render() {
    return(
        <div></div>
    )
}
}

export default SingleAlbum