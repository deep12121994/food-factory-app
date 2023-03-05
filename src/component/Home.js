import React, { useState } from "react";
import Axios from "axios";
import { API_ID, API_KEY } from "../key";
import Recipe from "./Recipe";
import Header from "./Header";
import LoadingSpinner from "./Loader";

import ErrorPage from "./DefaultError";



const Home = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const url = `https://api.edamam.com/search?q=${searchRecipe}$&app_id=${API_ID}&app_key=${API_KEY}`;

  const getRecipes = async () => {
    setIsLoading(true)
   await Axios(url) .then((respose) => {
      if (!respose.data.more) {
        setIsLoading(false)
        return setAlert("No food with such name");
      }
      setRecipes(respose.data.hits);
      setIsLoading(false)
      setAlert("");
     
   })
   .catch(() => {
    setAlert("Unable to fetch receipe list");
      setIsLoading(false);
   }); 
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="main-header">
      <Header />
      <form className="form-container" onSubmit={onSubmitData}>
        {alert !== "" && <ErrorPage alert={alert} />}
        <input
          type="text"
          className="search-bar"
          placeholder="Enter Recipe"
          autoComplete="off"
          val={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
        />
        <button id="btn-search">Search</button>
      </form>
      {
        isLoading ? <LoadingSpinner/>: <div className="recipe-container">
        {recipes !== [] &&
          recipes.map((val) => {
            return <Recipe recipeList={val} key={val.id} />;
          })}
      </div>
      }
      
     
    </div>
  );
};

export default Home;
