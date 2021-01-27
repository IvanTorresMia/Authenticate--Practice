import React, {createContext, useState, useEffect } from 'react'; // Bringing in React and other things we will use. 
const context = createContext(null) //creating a context and setting it to null


// Creating the provider which will hug the state and im assuming also the component. 
const UserProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch("/user") //fetching from this route. 
        .then(res => res.json()) //sending json data back. 
        .then(res => setUser(res)) //setting the state of the user to the response. 
        .catch(err => {
            console.log(err) //if there is an error we console.log it. 
        })
    })
};