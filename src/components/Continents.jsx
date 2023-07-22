import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Continents() {
    //creates an array of obejects of contients
    const continentList = [
        { id: 1, name: 'Africa' },
        { id: 2, name: 'Asia' },
        { id: 3, name: 'Australia' },
        { id: 4, name: 'Europe' },
        { id: 5, name: 'North America' },
        { id: 6, name: 'South America' }
    ]



    return (

        <div >
            <ul>
                {continentList.map(continent => (
                    <li key={continent.id}>
                        <Link to={`/continents/${continent.name}`}>
                        <i className="fa-solid fa-globe"></i> {continent.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <a href={`/newdestination`}>
                <Button variant="primary">Add New Destination</Button>
            </a>
        </div>
    )
}


export default Continents