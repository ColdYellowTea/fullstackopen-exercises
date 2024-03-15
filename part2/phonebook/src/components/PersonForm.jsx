
const PersonForm = ({values, handlers}) => {
    console.log(handlers)
    return(
    <div>
        <form onSubmit={handlers.add} id="personForm">
            <div>
                name: <input id="personName" value={values.name} onChange={handlers.name}/>
            </div>
            <div>
                number: <input  id="personNumber" value={values.phone} onChange={handlers.phone}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </div>
    )
}

export default PersonForm