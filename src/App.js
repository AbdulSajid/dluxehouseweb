import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
// import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
// import Detail from './Pages/Detail';
import Card from './Pages/Card';
import Checkout from './Pages/Checkout';
import Categories from './Pages/Categories';
// import Thankyou from './Pages/Thankyou';
import Header from './Components/Header';
import Footer from './Components/Footer';

// import demo from './Pages/demo';
// import CategoriesShop from './Pages/CategoriesShop';
import SearchData from './Pages/SearchData';

// import Signup from './Pages/Admin/Signup';
// import EditCard from "./Pages/EditCart"
// import CategoriesBook from './Pages/CategoriesBook';
// import CategoriesBags from './Pages/CategoriesBags';
// import CategoriesShoes from './Pages/CategoriesShoes';
// import ShoesProduct from './Pages/ShoesProduct';
// import ShoesProductDetails from './Pages/ShoesProductDetails';
// import SchoolClassProduct from './Pages/SchoolClassProduct';
// import BagsClassProduct from './Pages/BagsClassProduct';
// import chat from './Pages/chat';
// import SignupOtp from './Pages/SignupOtp';


// import whatapps from './assets/images/what.png';






// import SubCategories from './Pages/Categories';
// import SubCategoriesProduct from './Pages/SubCategoriesProduct';












import "./bootstrap.min.css"
import "./all.css"
import "./custom.css"
import "./bootsnav.css"
import "./responsive.css"
import "./style1.css"
import Privacy from './Pages/Privacy';
import consign from './Pages/consign';
import Shipping from './Pages/Shipping';
import tracking from './Pages/tracking';
import FAQ from './Pages/FAQ';
import Shop from './Pages/Shop';
import SaleSubCategoriesProduct from './Pages/SaleSubCategoriesProduct';
import menSubCategoriesProduct from './Pages/menSubCategoriesProduct';
import womenSubCategoriesProduct from './Pages/womenSubCategoriesProduct';
import SubCategoriesProduct from './Pages/SubCategoriesProduct';
import SubCategoriesProductDetails from './Pages/SubCategoriesProductDetails';
import SizeProductDetail from './Pages/SizeProductDetail';
import thankyou from './Pages/Thankyou';
import chat from './Pages/chat';
import WomenOnlySubCategoriesProduct from './Pages/WomenOnlySubCategoriesProduct';
import MenOnlySubCategoriesProduct from './Pages/MenOnlySubCategoriesProduct';
// import CategoriesUniform from './Pages/CategoriesUniform';
// import UniformClassProduct from './Pages/UniformClassProduct';
// import UniformProductDetails from './Pages/UniformProductDetails';
// import SchoolBookProductDetail from './Pages/SchoolBookProductDetail';
// import BagsProductDetail from './Pages/BagsProductDetail';
// import ArrivalCategoriesProduct from './Pages/ArrivalCategoriesProduct';



// import teacherform from './Pages/teacherform';
// import studentform from './Pages/studentform';
// import Shipping from './Pages/Shipping';
// import Privacy from './Pages/Privacy';
// import MainUserSignup from './Pages/MainUserSignup';
// import MainUserLogin from './Pages/MainUserLogin';
// import forgetpassaccount from './Pages/forgetpassaccount';


// import help from './Pages/help';
// import userDashboard from './Pages/userDashboard';
// import EditNameAddress from './Pages/EditNameAddress';
// import userDashOrderDetails from './Pages/userDashOrderDetails';


// import SchoolCategories from './Pages/SchoolCategories';
// import SchoolClassesCategories from './Pages/SchoolClassesCategories';
// import SchoolClassesCategoriesProduct from './Pages/SchoolClassesCategoriesProduct';
// import SchoolClassesCategoriesProductDetail from './Pages/SchoolClassesCategoriesProductDetail';




function App() {
  const whatappsClick = ()=>{
    console.log("efef");
  }
  return (
    <div className="App">
      <Router>

        <Header />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/term-policy' component={Shipping} />

          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/thankyou' component={thankyou} />
          <Route exact path='/consign' component={consign} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/FAQ' component={FAQ} />
          <Route exact path='/chat' component={chat} />
          <Route exact path='/cart' component={Card} />
          <Route exact path='/all-shop' component={Shop} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/track' component={tracking} />
          <Route exact path='/search/product-item' component={SearchData} />
          {/* <Route exact path='/ab' component={SubCategoriesProduct} /> */}
          {/* <Route exact path='/categories/:categoriesName/all-products' component={SubCategoriesProduct} /> */}
          <Route exact path='/categories/:categoriesName' component={Categories} />
          <Route exact path='/categories/:categoriesName/all-products' component={SubCategoriesProduct} />
          <Route exact path='/categories/:categoriesName/all-products/:productName/:productId' component={SubCategoriesProductDetails} />
          <Route exact path='/main-categories/:categoriesName/all-products/:productName/:productId' component={SizeProductDetail} />
          <Route exact path='/main_categories/men/:categoriesName/all-products' component={menSubCategoriesProduct} />
          <Route exact path='/main_categories/women/:categoriesName/all-products' component={womenSubCategoriesProduct} />
          <Route exact path='/mains-categories/sale/all-products' component={SaleSubCategoriesProduct} />
          <Route exact path='/mains-categories/men/all-products' component={MenOnlySubCategoriesProduct} />
          <Route exact path='/mains-categories/women/all-products' component={WomenOnlySubCategoriesProduct} />

        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
