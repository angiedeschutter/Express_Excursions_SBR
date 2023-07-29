import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { supabase } from '../client'



//GETS A SINGLE DESTINATION FROM THE DB
function Destination() {
    const navigate = useNavigate()
    const [destination, setDestination] = useState([])
    const { name } = useParams() //uses the continent param
   
    const getDestination = async (req) => {
        let { data } = await supabase
            .from('destinations')
            .select()
            .eq('name',name)
        setDestination(data)
        return destination
    }

 


    //DELETE DESTINATION FUNCTION
    const deleteDestination = async () => {
        try {
            await supabase
             .from ("destinations")
             .delete()
             .eq("name",name)
            navigate('/continents') //redirects back to parent destination list
        } catch (Error) {
            console.log(Error)
        }
    }

    useEffect(() => {
        getDestination()
    }, [])

    const country = destination.map((dest) => {
        return dest.country_name
    })
    const continent = destination.map((dest) => {
        return dest.continent_name
    })
    const description = destination.map((dest) => {
        return dest.description
    })
    const author = destination.map((dest) => {
        return dest.author
    })
    const date_visited = destination.map((dest) => {
        return dest.date_visited
    })
    const picture = destination.map((dest) => {
        return dest.picture
    })

    return (
        
        < >
        
            <h1>{destination.name} </h1>
            <hr></hr>
            <Row className="text-center">
                <Col>
                    <Card style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title>{country}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{continent}</Card.Subtitle>
                            <Card.Text>{description}</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">-{author} visited on {date_visited}</Card.Subtitle>
                            <Link to={`/continents/${continent}`}>Back to {continent} destinations</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex flex-row" >
                    <Image src={picture} rounded className="img-fluid" />
                </Col>
            </Row>
            <Col className="d-flex flex-row">
                <Link to={`/edit/${name}`}>
                    <Button variant="success" size="lg"><i className="fa-solid fa-pen-to-square"></i>  EDIT</Button>
                </Link>
                <Button variant="danger" size="" onClick={deleteDestination}><i className="fa-regular fa-trash-can"></i>  DELETE</Button>
            </Col>
        </>
    )
}


export default Destination