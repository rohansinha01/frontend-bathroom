import Restroom from "../components/Restroom"
import { Form, useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allRestrooms = useLoaderData()

    return (
        <>
            <h1>Add A Bathroom</h1>
            <Form action="/create" method="post">
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
                <button>Add New Bathroom</button>
            </Form>
            <hr />
            {allRestrooms.map((restroom, i) => <Restroom restroom={restroom} key={i}/>)}
        </>
    )
}
    