
document.getElementById("search").addEventListener("click",searchCountry 
)


function searchCountry()
{  
    let countryName = document.getElementById("countryname");
     document.getElementById("welcomeContainer").style.display="none";
     document.getElementById("countryDetail").style.display="block";
        fetch(`https://restcountries.com/v3.1/name/${countryName.value}`)
            .then((Response) => {
                return Response.json()
            })
            .then((result) => {
                // console.log(result);
                document.getElementById("displayCoun").innerText=`There are ${result.length} country for your result`;
                renderCountryCard(result);
            })
       

}

function renderCountryCard(result)
{
console.log("nvn+",result);

let CountryList = document.getElementById("countryList");

result.forEach(element => {
    CountryList.innerHTML += `
    
    <div class="countryCard">
           <div class="img"><img src="${element.flags.png}" alt="" srcset=""></div>
           <p class="name">${element.altSpellings[1]}</p>
           <p class="commonName">${element.altSpellings[2]}</p>
           <p class="capitalName"><b>Capital</b>- ${checkError(element)}</p>
           <p class="continent"> <b>Continent</b>- ${element.continents[0]}</p>
           <p class="population"> <b>Population</b>- ${((element.population)/1000000).toFixed(2)}M</p>
           <p class="currencies"> <b>Currency</b>-${Object.keys(element.currencies)}</p>
           <div class="location"><a href="${element.maps.googleMaps}"><button>Locate on Map</button></a></div>
        </div>

    `;
});

}
 function checkError(element)
{
          if(element.capital == undefined)
          return "No Capital";
          else
          return element.capital[0];
}