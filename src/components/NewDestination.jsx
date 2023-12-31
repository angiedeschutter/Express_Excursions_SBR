import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from 'react-datepicker'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { supabase } from '../client'

function NewDestination() {
    //redirects page after submit button
    const navigate = useNavigate()
    //set states for all database columns to be added
    const [name, setName] = useState('')
    const [continent_name, setContinent_name] = useState('')
    const [country_name, setCountry_name] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [date_visited, setDate_visited] = useState('')
    const [picture, setPicture] = useState('')
    const [destinations, setDestinations] = useState([])

    //finds all destinations in the database
    const getDestinations = async () => {
           const {data} = await supabase
            .from ('destinations')
            .select('name')
            setDestinations(data)
        console.log(data)
    }
    

    useEffect(() => {
        getDestinations()
    }, [])

    const checkList = new Set() //CREATES A BLANK LIST
    //MAKES AND ARRAY OF JUST THE DESTINATION NAMES
    const list = destinations.map((destination) => {
        return destination.name
    })
    //goes through the list array of destination names and adds it to the Set() with the addSet funciton
    list.forEach(addSet)
    //adds the desintation name to the Set()
    function addSet(name) {
        checkList.add(name)
    }

    //ADD NEW(POST) TO THE DB DESTINATION FUNCTION 
    const addDestination = async (e) => {
        e.preventDefault()
        try {
            let status = checkList.has(name) //if the checkList already has the value as name, it will return true and set it to status
            //if status is true, the destination exisits in the db and an alert will be displayed 
            if (status === true) {
                alert(`${name} already exisits as a Destination - Go to ${name} page to add comment or add new Destination Name`)
                return
            }
            //creates a new row in the db based on the form data
            const addedDestination = { name, continent_name, country_name, description, author, picture, date_visited }
            const response = await supabase
               .from ("destinations")
               .insert(addedDestination)
            console.log(response)
            navigate('/continents') //redirects to the continents page after successful submit
        } catch (Error) {
            console.log(Error)
        }
    }

    return (

        <>
            <h1>Add a New Destination</h1>
            <Form method='POST' onSubmit={addDestination} >
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='name'>Destination Name</Form.Label>
                    <Form.Control id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group className="dropdown">
                    <div className="dropdown">
                        <Form.Label htmlFor='continent_name'>Continent</Form.Label>
                        <select name='continent_name' id="continent_name" value={continent_name} onChange={(e) => setContinent_name(e.target.value)} >
                            <option value='' selected disabled hidden>Select a continent</option>
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
                    <Form.Control id="country" name="country_name" value={country_name} onChange={(e) => setCountry_name(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='description'>Description</Form.Label>
                    <Form.Control name='description' value={description} onChange={(e) => setDescription(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='author' >Author</Form.Label>
                    <Form.Control id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='picture'>Photo</Form.Label>
                    <Form.Control id="picture" name="picture" value={picture} onChange={(e) => setPicture(e.target.value)} placeholder='Add picture url' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='date_visited'>Date Visited</Form.Label>
                    <DatePicker selected={date_visited} onChange={(date_visited) => setDate_visited(date_visited)} requried />
                </Form.Group>
                <Button variant="primary" type='submit'>Submit</Button>{' '}
            </Form>
            <Link to={'/continents'}>
                <Button variant="danger">Cancel</Button>
            </Link>
        </>

    )
}


export default NewDestination