import Restroom from "../components/Restroom"
import { Form, useLoaderData } from "react-router-dom"
import {React, useState } from "react"

export default function Index(props) {
    const allRestrooms = useLoaderData()

    const [showForm, setShowForm] = useState(true);

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    return (
        <> 


        {allRestrooms.map((restroom, i) => <Restroom restroom={restroom} key={i}/>)}
        <hr />
            <h1>Add a New Restroom</h1>
            {/* <h1>{showForm && <button onClick={toggleForm}>Hide Button</button>}</h1> */}
            <Form action="/create" method="post" >
                <div className="form">
                <label htmlFor="name">
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </label>
                <label htmlFor="location">
                    <input type="text" name="location" id="location" placeholder="Location"/>
                </label>
                <label htmlFor="cleanliness">
                    <input type="number" name="cleanliness" id="cleanliness" placeholder="Cleanliness (scale 1-5)" />
                </label>
                <label htmlFor="purchase">
                    <input type="boolean" name="purchase" id="purchase" placeholder="Purchase Necessary?" />
                </label>
                <button>Add New Bathroom</button></div>
            </Form>
            
           
        </>
    )
}
    