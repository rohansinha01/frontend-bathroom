import { Link } from "react-router-dom"

export default function Restroom({ restroom }) {

    const id = restroom.url.split('/')[4]

    
    return (
        <div>
            <Link to={`/restrooms/${id}`}>
                <h1>{restroom.name} - {restroom.cleanliness}/5</h1>
                
            </Link>
        </div>
    )
}