import React, { Component } from 'react';

class GoogleMap extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
        const maps = new google.maps.Map(this.refs.map, {
            zoom:8,
            center:{ 
                lat: 41.8781,
                lng: 87.6298
            }
        });
    }

    render() {
        return (
            <div ref='map' className='mapDivClass'>
                {}
            </div>
        );
    }
}

export default GoogleMap;