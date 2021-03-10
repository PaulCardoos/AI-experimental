import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'

const Sample = () => {
    //switch this state over to redux when we refactor
    const [dataState, setDataState] = useState([])


    const getAllItems = async () => {
    
            const { data }  = await axios.get('http://localhost:3000/api/r/v1/items')
            setDataState(data)

    }

    useEffect(() => {

        getAllItems()


    }, [])

    return (
    
        <Table className='mt-3' striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Object/Person</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {dataState.map((item ) => 
                (<tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.location}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                </tr>
                ))}
               
            </tbody>
        </Table>
    )
}

export default Sample
