const PhonebookEntry = ({name, number, id, deleteHandler}) => {
  return (
      <div>
        {name} {number} 
        <button onClick={() => deleteHandler(id)}>delete</button>
      </div>
    )
  }
  

const Persons = ({persons, deleteHandler}) =>{
  return(
    <div>
      {persons.map(person => 
      <PhonebookEntry key={person.id} id={person.id} name={person.name} number={person.number}  deleteHandler={deleteHandler}/>
      )}
    </div>
    )
  }

export default Persons