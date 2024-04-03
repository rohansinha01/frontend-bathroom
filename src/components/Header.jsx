import { Link } from "react-router-dom"

export default function Header() {

    return (
        <div className='Header'>
          <h1 className="site">
            People Be Poopin
          </h1>
        <div className="home"><Link to='/' ><button>Home</button></Link></div>
        </div>
    )
}