import React from 'react';
import WeatherIconDescription from './WeatherIconDescription';

const WeatherDetails = ({location, temperature_scale, current_weather, forecast}) => {
    
    return (
        <div className='WeatherDetails'>
            <div className='WeatherCity'>
                <h4>Current Weather</h4>
                <h2>{location.name}</h2>
                <p>{current_weather.date}</p>
            </div>

            <div className='WeatherInfo'>
                <div className='WeatherInfo--temperature'>
                    {`${current_weather.temperature}º ${temperature_scale.symbol}`}
                </div>
                <div className='WeatherInfo--description'>
                    <WeatherIconDescription type={current_weather.description} />
                </div>
                <div className='WeatherInfo--humidity'>
                    {`Humidity: ${current_weather.humidity}`}
                </div>
                <div className='WeatherInfo--feelsLike'>
                    {`Feels Like: ${current_weather.feels_like}º`}
                </div>
            </div>

            <div className='WeatherForecast'>
                <h4>5 Days Forecast</h4>
                <div className='WeatherForecast--table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Day</th>
                                {forecast.map(day => (
                                    <th key={day.date}>{`${day.day} ${day.date}`}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Description</td>
                                {forecast.map(day => (
                                    <td key={`${day.date} description`}>{day.description}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>High | Low</td>
                                {forecast.map(day => (
                                    <td key={`${day.date} highlow`}>{`${day.high}º | ${day.low}º`}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>Precipitation</td>
                                {forecast.map(day => (
                                    <td key={`${day.date} precipitation`}>{`${day.precipitation_chance}%`}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default WeatherDetails;