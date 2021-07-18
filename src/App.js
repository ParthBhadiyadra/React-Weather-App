import axios from "axios"
import styled from "styled-components";
import WeatherComponets from "./modules/WeatherComponets";
import CityComponents from "./modules/CityComponents";
import { useState } from "react";
const APIKEY ="f26712f8910aa3ca9bbd6e5b8f69dac1";
const Container = styled.div`
display :flex;
flex-direction : column;
margin:auto;
align-items:center;
box-shadow : 0 3px 6px 0 #555;
padding:20px 10px;
border-radius : 4px;
width : 380px;
background:white;

`;


const AppLabel = styled.span`
  color:black;
  font-size : 18px;
  font-weight: bold;
  font-family: 'Noto Serif', serif;
`;


function App() {
  const [city,updateCity] = useState();
  const [weather , updateWeather] = useState();

  const fetchWeather =async (e) =>{
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
   updateWeather(response.data);
    }
  return <Container>
    <AppLabel>React Weather APP</AppLabel>
    {weather ? (<WeatherComponets weather={weather}/>) : 
    (<CityComponents updateCity ={updateCity} fetchWeather={fetchWeather}/>)
   }
    
    {/*  */}
   
    
    </Container>;
}

export default App;
