import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'



function Destinations() {

    const [destinations, setDestinations] = useState([])
    const { name } = useParams()

    //GET THE DESTINATIONS FROM THE DB WHERE ALL ARE FORM THE SAME CONTINENT
    const getDestinations = async () => {
       let {data} = await supabase
        .from ('destinations')
        .select()
        .eq('continent_name', name)
        setDestinations(data)
        }
    

    useEffect(() => {
        getDestinations()
    }, [])

        
    
    //TAKES THE DESTINATIONS FROM DB ABOVE AND MAKES A LIST OF LINKS 
    const getDestinationList = 
         
    destinations.map((destination, i) => {
        
        return (
            <div key={i}>
                <li><i className="fa-solid fa-plane"></i>
                    <Link to={`/destination/${destination.name}`}>
                        {destination.name}
                    </Link>
                </li>
            </div>)
    })

    return (

        <div >
            <ul>
                {getDestinationList}
            </ul>
            <Link to={`/continents`}> Back to Continents</Link>
        </div>
    )
}


export default Destinations