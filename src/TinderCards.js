import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import './TinderCards.css';

function TinderCards(){
    const[people,setPeople] = useState([]);
    //Piece of code which runs based on a condition
    // this will run ONCE when the component loads, and never again
    useEffect(() => {
    //this is where the code runs...
    const unsubscribe = database
    .collection('people')
    .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
    );

    return () => {
        // this is the cleanup..
        unsubscribe();
    };
    }, []);

    //normal way
    // const people = [];
    //people.push('sonny', 'qazi')

    //react way
    // setPeople([...people,'sonny','qazi'])

    return(
        <div>
            <div className="tinderCards_cardContainer">
            {people.map(person =>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div 
                    style={{backgroundImage: `url(${person.url})`}}
                    className="card"
                >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
    
}
export default TinderCards;