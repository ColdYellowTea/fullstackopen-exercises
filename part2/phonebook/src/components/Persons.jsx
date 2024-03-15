const PhonebookEntry = ({name, phone}) => {
    return (
      <p>{name} {phone}</p>
    )
  }
  

const Persons = ({persons}) =>{
  console.log(persons);
  return(
    <div>
      {persons.map(person => 
      <PhonebookEntry key={person.name} name={person.name} phone={person.phone}/>
      )}
    </div>
    )
  }

export default Persons