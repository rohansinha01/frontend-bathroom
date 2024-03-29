import { Link, useLoaderData } from "react-router-dom"

export default function Show(props) {

    const aRestroom = useLoaderData()
    return (
        <div>
            <h1>{aRestroom.name}</h1>
            <h2>{aRestroom.age}</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}