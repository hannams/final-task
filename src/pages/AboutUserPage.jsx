import React from 'react'
import { useParams } from 'react-router-dom'
import UserProfile from './../components/User/UserProfile'


function AboutUserPage() {
    const { id } = useParams();
    return <UserProfile id={+id}/>
}


export default AboutUserPage

