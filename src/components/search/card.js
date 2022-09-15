import React from "react";
import { Link } from "react-router-dom";
import './../css/card.css'



const Card = (props)=>{
    const{recipes} = props;
    function card(recipe){
        console.log("working");
        console.log(recipe);
        return (
       
            <div className="card">
            <div className="card__body">
                <img  className="image" src={recipe.recipe.image}/>
                <h2 className="card__title">{recipe.recipe.label}</h2>
                <p className="card__description">There is no love sincerer than the love of food</p>
            </div>
           <button className="card__btn">View Recipe</button>
          </div>
        
        );

    }
      return(
        <div className="wrapper">
              
        {
           recipes.map(card)
        }    
     </div>
      );
};
 

export default Card;

 