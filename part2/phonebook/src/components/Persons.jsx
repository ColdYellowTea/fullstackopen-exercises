const PhonebookEntry = ({name, number, id, deleteHandler}) => {
  return (
      <li className="person">
        {name} {number} 
        <button onClick={() => deleteHandler(id)}>delete</button>
      </li>
    )
  }
  

const Persons = ({persons, deleteHandler}) =>{
  return(
      <ol>
      {persons.map(person => 
      <PhonebookEntry key={person.id} id={person.id} name={person.name} number={person.number}  deleteHandler={deleteHandler}/>
      )}
      </ol>
    )
  }

export default Persons