import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        
            <Row>
        <Col>
            <ul>
                {continentList.map(continent => (
                    <li key={continent.id}>
                        <Link className='continent' to={`/continents/${continent.name}`}>
                        <i className="fa-solid fa-globe"></i> {continent.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <a href={`/newdestination`}>
                <Button variant="primary">Add New Destination</Button>
            </a>
        </Col>
        <Col className='col-md-4 ml-auto'>
        <img  src='https://images.unsplash.com/photo-1545424920-b978eefcde48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=525&q=80' />
                <div className="ref">
                    Photo by <a href="Author_Link">lilartsy</a> on <a href="https://images.unsplash.com/photo-1545424920-b978eefcde48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=525&q=80">Unsplash</a>
                </div>
        </Col>
        </Row>
        
    )
}


export default Continents