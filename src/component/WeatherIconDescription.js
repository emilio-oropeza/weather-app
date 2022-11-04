import React from 'react';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const WeatherIconDescription = ({type}) => {
    let WeatherIcon;
    if (type.toLowerCase().includes('cloud')){
        WeatherIcon = CloudQueueIcon;
    } else if (type.toLowerCase().includes('sun')){
        WeatherIcon = WbSunnyIcon;
    }else if (type.toLowerCase().includes('rain') || type.toLowerCase().includes('storm')){
        WeatherIcon = ThunderstormIcon;
    }else if (type.toLowerCase().includes('snow')){
        WeatherIcon = AcUnitIcon;
    } else {
        WeatherIcon = ThermostatIcon;
    }

    return (
        <>
            <WeatherIcon/>
            <span>{type}</span>
        </>
    )

}

export default WeatherIconDescription;