import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartComponent from "../components/chart-component";
import  GoogleMap from "../components/google-map-component";

class WeatherList extends Component {
    renderWeatherForCity(cityData){
        if(!cityData){
            return;
        }
        const tempData = cityData.list.map((weather) => weather.main.temp);
        const pressureData = cityData.list.map((weather) => weather.main.pressure);
        const humidityData = cityData.list.map((weather) => weather.main.humidity);
        const lat = cityData.city.coord.lat;
        const lon = cityData.city.coord.lon;
        return (    
            <tr key={cityData.city.name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td>
                    <ChartComponent chartData={tempData} chartColor = {'Red'} unit={'K'}/>
                </td>

                <td>
                    <ChartComponent chartData={pressureData} chartColor = {'Green'} unit={'hPa'}/>
                </td>

                <td>
                    <ChartComponent chartData={humidityData} chartColor = {'Blue'} unit={'%'}/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th> City </th>
                            <th> Temprature (K)</th>
                            <th> Pressure (hPa)</th>
                            <th> Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weatherData.map(this.renderWeatherForCity)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({weatherData}){
    return {weatherData}
}

export default connect(mapStateToProps)(WeatherList);