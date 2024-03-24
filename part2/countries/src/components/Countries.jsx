import Country from "./Country"

const Countries = ({countries, countryName, handler,countryChoice}) => {
    console.log(countries)
    const choice = countries.find(c => c.name.official === countryChoice)

    console.log("choice", choice)
    if(countryName !== '' && countries.length == 0) {
    return(
        <div>
        0 countries found.
        </div>
    ) 
    } else if(countries.length == 1) {
        return(
            <div>
            {countries.map(c => <Country key={c.name} country={c} detailed='true' />)}
            </div>
        )
    } else if(countries.length < 10) {
        return(
            <div>
            {countries.map(c => <Country key={c.name.official} country={c} detailed='false' handler={handler}/>)}
            {choice && <Country key={choice.name.official} country={choice} detailed='true'/>}
            </div>
        )
    } else {
        return(
            <div>
            Please enter more letters.
            </div>
        )
    }
}

export default Countries
