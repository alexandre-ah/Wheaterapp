import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState("")

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&unitsy&appid=38444bd806c43f5e16da1714f978e46e'

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className='App'>
      <div className='search'>
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
          placeholder='Enter location'
          type="text"/>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temperature'>
            {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
          </div>
          <div className='description'>
            {data.wheater ? <p>{data.wheater[0].description}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
          <div className='bottom'>
            <div className='ressenti'>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Ressenti</p>
            </div>
            <div className='humiditer'>
             {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humiditer</p>
            </div>
            <div className='vent'>
              {data.wind ? <p className='bold'>{data.main.speed.toFixed}Km/H</p> : null}
              <p>Vitesse du vent</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
