import { Link } from "react-router-dom"

export default function Header() {

    return (
        <div className='Header'>
          <h1>
            People Be Poopin
          </h1>
        <Link to='/' >Home</Link>
        </div>
    )
}