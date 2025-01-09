import React from "react";
import Button from "./button.jsx";
import "./joke.css"

const Joke = ()=>{
    const [joke, setJoke] = React.useState("");
    const fetchApi = ()=>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single"
    ).then((res)=>res.json())
        .then((data)=>setJoke(data.joke));
    };
    return(
        <div className="joke">
            <Button callApi={fetchApi}/>
            <p>{joke}</p>

        </div>
    )
}
export default Joke;