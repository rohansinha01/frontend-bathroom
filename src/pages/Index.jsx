import Restroom from "../components/Restroom"
import { useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allRestrooms = useLoaderData()

    return (
        <>
            <h1>Index</h1>
            <hr />
            {allRestrooms.map((restroom, i) => <Restroom restroom={restroom} key={i}/>)}
        </>
    )
}