import React from 'react'
import Layout from '../layout'
import {Jumbotron} from 'react-bootstrap';


/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
        <Jumbotron style={{background:'#fff'}}>
        <h1>welcome to our Admin dashboard</h1>
        </Jumbotron>
        </Layout>
        
   )

 }

export default Home;