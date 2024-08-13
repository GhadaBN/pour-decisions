import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import cocktailsData from "../assets/Recipes.json";
import ".././App.css";

function CocktailDetailsPage() {
  let { cocktailId } = useParams();
  console.log(cocktailId);
  const cocktailRecipe = cocktailsData.find(
    (cocktail) => cocktail.id === cocktailId
  );
  console.log(cocktailRecipe);
  console.log(cocktailsData);

  return (
    <div className="cocktail-page">
      {cocktailRecipe && (
        <>
          <div className="left-section">
            <img src={cocktailRecipe.image} className="drink-detail-img" />
            <h3 className="cocktail-name">{cocktailRecipe.name}</h3>
          </div>
          <div className="right-section-detail">
            <p className="title-recipe">Ingredients</p>
            <ul className="text-recipe">
              {cocktailRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p className="title-recipe">Preparation</p>
            <ul className="text-recipe">
              {cocktailRecipe.preparation.map((step, index) => (
                <li key={index}> {step}</li>
              ))}
            </ul>
            <Link to="/">
              <h4 className="back-button">Back</h4>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CocktailDetailsPage;
