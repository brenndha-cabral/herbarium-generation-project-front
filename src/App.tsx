import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormCategory from './components/category/formcategory/FormCategory'
import ListCategories from './components/category/listcategories/ListCategories'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import DeleteCategory from './components/category/deletecategory/DeleteCategory'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listcategories" element={<ListCategories />} />
            <Route path="/createcategory" element={<FormCategory />} />
            <Route path="/editcategory/:id" element={<FormCategory />} />
            <Route path="/deletecategory/:id" element={<DeleteCategory />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
