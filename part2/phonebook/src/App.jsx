import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const showAll = false
  
  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const personsToShow = showAll
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    let personObject = {
      name: newName,
      number: newNumber
    }
    
    const search = persons.find(p => p.name === newName)
    if(search){
      if(window
        .confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)
        ){
          personService
          .update(search.id, personObject)
          .then(person => {
            setPersons(persons.map(p => p.id !== search.id ? p : person))})
        }
    } else {
      personService
      .create(personObject)
      .then(person => {
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handelPhoneChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handelNewFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)

  }

  const personDelete = (id) =>{

    if (window.confirm("Do you really want to delete?")) {
      personService
      .remove(id)
      .then(pr => {
        setPersons(persons.filter(p => p.id !== id))
      }
    )
    }
  }

  const personValues = {name: newName, number: newNumber}
  const personHandlers = {add: addPerson, name: handleNameChange, number: handelPhoneChange}
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handler={handelNewFilter}/>
      <h2>add a new</h2>
      <PersonForm values={personValues} handlers={personHandlers}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deleteHandler={personDelete}/>
    </div>
  )
}

export default App