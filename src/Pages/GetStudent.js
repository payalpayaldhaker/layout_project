import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Components/Layout'

export default function GetStudent() {
    //state


    //Function
    let param = useParams()

    //return statement jsx syntax 
  return (
    <> 
         
         <Layout> GetStudent{param.stu_id}{param.id}</Layout>
    </>
   
  )
}
