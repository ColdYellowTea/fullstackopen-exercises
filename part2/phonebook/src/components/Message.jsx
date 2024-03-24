const Message =(props) =>{
    console.log("message", props)
    if(props.message){
        return(
            <p>{props.message}</p>
        )
    }
}

export default Message