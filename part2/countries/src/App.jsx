import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import CountryService from './services/country'

function App() {
  
  const [countryName, setCountryName] = useState('')
  const [countries, setCountries] = useState([])
  const showAll = false
  const [countryChoice, setCountryChoice]= useState('')

  const handelCountryChoice = (name) => {
    setCountryChoice(name)
  }


  useEffect(() => {
    CountryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
   }, [])

   const countriesToShow = showAll
   ? countries
   : countries.filter(c => c.name.official.toLowerCase().includes(countryName.toLowerCase()))

  const countryNameHandler = (event) => {
    setCountryName(event.target.value)
  }
  
  return (
    <>
    find countries
    <input id="countrySearch" value={countryName} onChange={countryNameHandler}/>
    <Countries countries={countriesToShow} countryName={countryName} handler={handelCountryChoice} countryChoice={countryChoice}/>
    </>
  )
}

export default App
