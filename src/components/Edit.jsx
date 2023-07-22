import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from 'react-datepicker'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { supabase } from '../client'

function Edit() {
    //GETS THE DESTINATION BY NAME FROM THE DATABASE TO USE TO SET INITIAL STATE FOR AUTOFILL
    const getDestination = async () => {
        try {
            const findDestination = await supabase
            .from("destinations")
            .select()
            .eq('name',name)
            setDestination(findDestination)
        } catch (Error) {
            console.log(Error)
        }
    }


    
    useEffect(() => {
        getDestination()
    }, [])
    //SET INITIAL STATE TO CURRENT DB ENTRY
    const navigate = useNavigate()
    const { name } = useParams()
    const [destination, setDestination] = useState([])
    const [continent_name, setContinent_name] = useState(destination.continent_name)
    const [country_name, setCountry_name] = useState(destination.country_name)
    const [description, setDescription] = useState(destination.description)
    const [author, setAuthor] = useState(destination.author)
    const [date_visited, setDate_visited] = useState(destination.date_posted)
    const [picture, setPicture] = useState(destination.picture)




    //EDIT DESTINATION IN THE DB DESTINATION FUNCTION 
    const editDestination = async (e) => {
        e.preventDefault()
        try {
            const edited = { name, continent_name, country_name, description, author, date_visited, picture }
            const response = await supabase
            .from ("destinations")
            .update()
            .eq('name',name)
            console.log(response)
            navigate('/continents')
        } catch (Error) {
            console.log(Error)
        }
    }
    return (
        <>
            <h1>Edit {name}</h1>
            <Form method='POST' onSubmit={editDestination} >
                <Form.Group className="dropdown">
                    <div className="dropdown">
                        <Form.Label htmlFor='continent_name'>Continent</Form.Label>
                        <select defaultValue={destination.continent_name} value={continent_name} onChange={(e) => setContinent_name(e.target.value)} >
                            <option value={destination.continent_name} hidden>{destination.continent_name} </option>
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                            <option value="Australia">Australia</option>
                            <option value="Europe">Europe</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                        </select>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='country_name'>Country</Form.Label>
                    <Form.Control id="country" name="country_name" placeholder={destination.country_name} value={country_name} onChange={(e) => setCountry_name(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='description'>Description</Form.Label>
                    <Form.Control name='description' placeholder={destination.description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='author' >Author</Form.Label>
                    <Form.Control id="author" name="author" placeholder={destination.author} onChange={(e) => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='picture'>Photo</Form.Label>
                    <Form.Control id="picture" name="picture" placeholder={destination.picture} onChange={(e) => setPicture(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='date_visited'>Date Visited</Form.Label>
                    <DatePicker selected={date_visited} onChange={(date_visited) => setDate_visited(date_visited)} />
                </Form.Group>
                <Button variant="primary" type='submit'>Submit</Button>{' '}
            </Form>
            <Link to={'/continents'}>
                <Button variant="danger">Cancel</Button>
            </Link>
        </>
    )
}


export default Edit