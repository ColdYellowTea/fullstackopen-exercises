import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone:567456345}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const showAll = false
  
  const personsToShow = showAll
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
    const personObject = {
      name: newName,
      phone: newPhone
    }

    if(persons.some(e => e.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handelPhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handelNewFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)

  }

  const personValues = {name: newName, phone: newPhone}
  const personHandlers = {add: addPerson, name: handleNameChange, phone: handelPhoneChange}
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handler={handelNewFilter}/>
      <h2>add a new</h2>
      <PersonForm values={personValues} handlers={personHandlers}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App