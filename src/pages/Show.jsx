import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aRestroom = useLoaderData()
    console.log(aRestroom.purchase)

    const id = aRestroom?.url.split("/")[4]
    return (
        <div>
            <h1>{aRestroom.name}</h1>
            <h1>{aRestroom.location}</h1>
            <h2>{aRestroom.cleanliness}</h2>
            <h2>{aRestroom.purchase}</h2>
            <div>
                {/* Update form */}
                <Form action={`/update/${id}/`} method="POST">
                    <label htmlFor="name">
                        Do you want to change their name?
                        <input type="text" id="name" name="name" defaultValue={aRestroom.name}/>
                    </label>
                    
                    <label htmlFor="location">
                        Did they move?
                        <input type="text" id="location" name="location" defaultValue={aRestroom.age}/>
                    </label>
                    <label htmlFor="cleanliness">
                        Did they clean up?
                        <input type="number" id="cleanliness" name="cleanliness" defaultValue={aRestroom.cleanliness}/>
                    </label>
                    <label htmlFor="purchase">
                        Did they update their policy?
                        <input type="boolean" id="purchase" name="purchase" defaultValue={aRestroom.purchase}/>
                    </label>
                    <button style={{"backgroundColor": "blue"}}>Update our Bathroom</button>
                </Form>

                {/* Delete Form */}
                <Form action={`/delete/${id}/`} method="post">
                    <button style={{"backgroundColor": "red"}}>Remove Bathroom</button>
                </Form>
            </div>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}