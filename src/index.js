const boton=document.getElementById("buscar");

async function fetchData(){
    const lectura=document.querySelector("input").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${lectura}&appid=8fe0ab02dfb594469f3784caedf0ea59&lang=sp`;
    const response= await fetch(url),
    responseJson= await response.json();
    //crear un contenedor padre que contenga todo, como en las imagenes 
    const containerDad= document.createElement("div")
    containerDad.style.display="flex";
    containerDad.style.flexDirection="column";
    containerDad.style.alignItems="center";
    containerDad.style.backgroundImage="linear-gradient(to right top, #ced5df, #becbe7, #b2c1ee, #acb4f3, #ada6f5)"
    containerDad.style.margin="20px";
    containerDad.style.padding="10px";
    containerDad.style.boxShadow="1px 5px 16px 3px rgba(0,0,0,0.6)";
    const nodoRead=document.querySelector("#container");
    console.log(responseJson)
    
    const nodoName= document.createElement("p");
    const nodoNameText= document.createTextNode(`${responseJson.name}`);
    nodoName.append(nodoNameText);
    nodoName.style.fontWeight="bold"

    const nodoCountry=document.createElement("p");
    const nodoCountryText=document.createTextNode(`País: ${responseJson.sys.country}`);
    nodoCountry.append(nodoCountryText);

    const icono=document.createElement("img")
    const iconosrc=responseJson.weather[0].icon;
    const urlimg=`https://openweathermap.org/img/wn/${iconosrc}@2x.png`;
    icono.src=urlimg;
    icono.style.width="100px"

    const nodoWeather=document.createElement("p");
    const nodoWeatherText=document.createTextNode(`Descripción del clima: ${responseJson.weather[0].description}`);
    nodoWeather.append(nodoWeatherText);

    const temp = responseJson.main.temp;
    const tempc = (temp-(273.15)).toFixed(1);
    const nodoDeegres=document.createElement("p");
    const nodoDeegresText= document.createTextNode(`${tempc} C°`);
    nodoDeegres.style.fontWeight="bold";
    nodoDeegres.style.fontSize="20px"
    nodoDeegres.append(nodoDeegresText)
    containerDad.append(nodoName, nodoCountry, icono, nodoDeegres,nodoWeather)
    nodoRead.append(containerDad)
};


boton.addEventListener("click",fetchData)



