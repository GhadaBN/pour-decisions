import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import CocktailDetailsPage from "./pages/CocktailDetailsPage";
import AddRecipe from "./pages/AddRecipe/AddRecipePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/CocktailDetailsPage/:cocktailId"
          element={<CocktailDetailsPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
