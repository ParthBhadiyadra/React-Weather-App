import styled from "styled-components";

export const WeatherInfoIcons = {
    Sunset:"Icon/temp.svg",
    Sunrise :"Icon/temp.svg",
    Humidity:"Icon/humidity.svg",
    Wind:"Icon/wind.svg",
    Pressure:"Icon/pressure.svg",
};
const WeatherCondition = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-content :space-between;
margin:30px auto;

`;
const Condition = styled.span`
margin:20px auto;
font-size:14px;
& span{
    font-size:28px;
}
`;
const WeatherLogo = styled.img`
width :100px;
height : 100px;
margin: 5px auto;
`;

const Location = styled.span`
font-size:28px;
font-weight:bold;
`;
const WeatherInfoLabel=styled.span`
font-size:14px;
font-weight:bold;
margin:20px 25px 10px;
text-align:start;
width:90%;
`;
const WeatherInfoContainer = styled.div`
display:flex;
width:90%;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`;
const InfoContainer = styled.div`
display:flex;
flex-direction:row;
margin:5px 10px;
justify-content:space-evenly;
align-items:center;
`;
const InfoIcon= styled.img`
    width:36px;
    height:36px;
`;
const InfoLabel = styled.span`
display:flex;
flex-direction:column;
font-size:14px;
margin:15px;
& span{
    font-size:12px;
    text-transform:capitalize;
}
`;
const WeatherInfoComponent =(props)=>{
    const {name , value} = props
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )

}
const WeatherComponets = (props)=>
{
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes("d") ;
    const getTime = (timeStamp) =>{
        return `${new Date(timeStamp * 1000).getUTCHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return(
        <>
        <WeatherCondition>
            <Condition><span>{`${Math.floor(weather?.main?.temp-273)} C`}</span>{` | ${weather?.weather[0].description}`}</Condition>
            <WeatherLogo src="Icon/cloud-emoji.png"/>
        </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isDay ? "Sunset" : "Sunrise"} value={getTime(weather?.sys[isDay ? "sunset" : "sunrise" ])}/>
            <WeatherInfoComponent  name="Humidity" value={weather?.main?.humidity}/>
            <WeatherInfoComponent  name="Wind" value={weather?.wind?.speed}/>
            <WeatherInfoComponent  name="Pressure" value={weather?.main?.pressure}/>
        </WeatherInfoContainer>
        </>
    )
};


export default WeatherComponets;