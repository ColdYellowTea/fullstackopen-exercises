
const Country = ({country,detailed,handler}) =>{
   if(detailed === 'false'){
      return(
         <div>
              {country.name.official}
              <button onClick={() => handler(country.name.official)}>show more</button>
         </div>
     )
   } else {
      return(
         <div>
            <p>Name: {country.name.official}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Flag</p>
            <img src={country.flags.svg} height={100}/>
         </div>
     )
   }

}



export default Country