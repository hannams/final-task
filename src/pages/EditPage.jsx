import React from 'react'
import { useParams } from 'react-router-dom';
import UserEdit from './../components/User/UserEdit'

function EditPage() {
    
   const {id} = useParams();

   return <UserEdit id={id}/>
}

export default EditPage


  