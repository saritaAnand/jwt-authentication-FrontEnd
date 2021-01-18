import React from 'react';
import Details from './Details';
export default function Header(props){

    function clearLocalStore(){
        console.log("LogOut btn")
        localStorage.clear();
        props.history.push("/");
        window.location.reload();
    }

    return(
        <article style={{color:'white'}}>
            <Details />
            <button className="submit-button" style={{backgroundColor:"orangered"}} onClick={clearLocalStore}>Logout</button>
        </article>
    )
}