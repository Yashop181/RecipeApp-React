import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import {Routes, Route } from "react-router-dom"
import Layout from "./Layout"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<RecipeList/>} />
      <Route path="/recipes/:id" element={<RecipeDetail/>} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
