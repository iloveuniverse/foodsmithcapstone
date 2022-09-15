import React, {useState,useEffect} from 'react';
import Footer from './../components/Footer';
import S_hero from "../components/search/S_hero";
import NavBar from "./../components/NavBar"; 
import Card from "./../components/search/card"; 

import axios from 'axios'
//import Header from "./components/Header"
//import Recipes from "./components/Recipes"




function Search(){
    const [search,setSearch] = useState("");
    const [recipes,setRecipes] = useState([]);
  
  //--------- API Request-------------------
    const APP_ID = "4adebcaa";
    const APP_KEY = "083832975b534c3c9b101e6a183a8802";
  
    useEffect(()=>{
            getRecipes();
     },[]);
  
     const getRecipes = async()=>{
      const response = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      //console.log(data);
      setRecipes(response.data.hits);
     }
  //---- 
    const onInputChange = e =>{
         console.log(e.target.value);
           setSearch(e.target.value);
    }
  
    const onSearch = ()=>{
         getRecipes();
    }

  return (
    <div>
      <S_hero search={search} onInputChange={onInputChange} onSearch={onSearch}/>
    
      <Card recipes={recipes}/>
      <Footer/>
    
    </div>
  );
  }
  
export default Search;