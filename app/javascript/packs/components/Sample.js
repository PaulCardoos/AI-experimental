import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemAction } from '../actions/dataActions'
import Loader from '../components/Loader'
import {Table} from 'react-bootstrap'

const Sample = () => {
    //switch this state over to redux when we refactor
    const dispatch = useDispatch()
    
    const fakeData = useSelector(state => state.fakeData)
    
    const {loading, items} = fakeData

    useEffect(() => {
        dispatch(itemAction())
    }, [dispatch])

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
            {loading && <Loader/> }
            <tbody>
                {items.map((item ) => 
                (<tr key={item.id}>
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
