const Header = (props) =>{
    return(
        <h2>{props.name}</h2>
    )
}

const Part = (props) =>{
    return(
        <p>{props.name} {props.exercises}</p>
    )
}

const Content = (props) =>{
    let parts = props.parts
    console.log("My parts", parts)
    return(
        <div>
        {parts.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises}/>)
        }
        </div>
    )
}



const Course = (props) =>{
    console.log(props)
    let course = props.course
    let parts = course.parts
    console.log("parts", parts);
    const total = parts.reduce((accumulator ,item) => {
        return accumulator += item.exercises;
      }, 0)
    console.log(total);
    return(
        <div>
            <Header name={course.name}/>
            <Content parts={parts}/>
            <b>total of {total} exercises</b>
        </div>
    )
}

export default Course