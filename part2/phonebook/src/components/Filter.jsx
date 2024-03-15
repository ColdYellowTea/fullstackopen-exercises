

const Filter = ({value, handler}) =>{
    return(
        <div>
            filter shown with: <input id="personFilter" value={value} onChange={handler}/>
        </div>
    )
}

export default Filter