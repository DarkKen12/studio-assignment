import React, { useState } from 'react'
// import twitter from "./images/twitter.svg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Select from "react-select";
// import Person from './images/person.jpg';

const FrontContainer = () => {
  
  // var val=[];
  const [DropProducts, setDropProducts] = useState()
  const fetchProductDetails = async()=>{

    const response= await fetch("https://fakestoreapi.com/products/categories");
    const data =  await response.json();
    console.log(data);
    console.log(data);
    console.log(typeof(data))  
    setDropProducts(data);
    // var values=Object.values(data);
  //  val=values;
  }
  



  return (
    <>
    <div className='front-container'>
        <div className="navbar">
            <div className="header">
            <ul>
                <li>Free Delivery &nbsp;|</li>
                <li> &nbsp;Return Policy</li>
            </ul>
          </div>
        <div className="header-end">
          <ul>
                <li>Login</li>
                <li>Follow US</li>
                <li>f</li>
                <li>in</li>
                {/* <li><FontAwesomeIcon icon="fa-brands fa-twitter" style={{color: "#bdbdbd",}} /></li> */}
                <li>b;</li>
                </ul>
        </div>
        </div>
        </div>
      <div className="container2">
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" id='text2'>ShopKart</a>
        </li>
      </ul>
      <span className="navbar-text" id='text3'>
       My WISHLIST
      </span>
      <span className="navbar-text" id='text3'>
       MY BAG
      </span>
      <hr id='headline'></hr>
    </div>
  </div>
</nav>
 </div>
      <div className="container3">
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li className='dropdown'>              
            <select onClick={fetchProductDetails}
            
              defaultValue='default'
            >  <option value='default'>MY PRODUCTS</option>
              {
                DropProducts
                ? DropProducts.map((vall)=>{
                  return <option key={vall.key} value={vall.id}>{vall}</option>
                })
                :null}
            </select>
            </li>




            <li>CONTACT US</li>
          </ul>
      </div>
      <div className="container4">
            <div className="container4-childleft md-3 ">
                
                <h1 id='text5'> Fresh
                  <h1 id='text6'>2022 </h1><br/>
                  Look
                </h1>
              
              
            </div>
            <div className="container4-childright">
               <img src={require('../images/person.jpg')} alt='person' className='imagePerson'></img>'
            </div>
            </div>
        
      
    </>
  )
}

export default FrontContainer;