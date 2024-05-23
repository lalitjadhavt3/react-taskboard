import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
const Home = () =>{
    return(<div className="">
        <h1>Home Page</h1>
        <Link to ={'/taskboard'}>Go to taskboard</Link>
    </div>)
}
export default Home;