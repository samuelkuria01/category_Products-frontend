import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { useParams } from 'react-router-dom';
// import Simplemap from './Simplemap';
// import { useState } from 'react';



function NavBar() {
   
    const { totalItems} = useCart()
    const { id } = useParams()
    // const [showMap, setShowMap] = useState(false)
    

    // const handleLocateMe = () => {
    //   setShowMap(true); // Set showMap to true when the button is clicked
    // };

  return (
    <div className='Homecontainer'>

        <div className='newnav'>
         <div className='newnav-wrapper'>
            <div className='mugansspanoo'>
            <h2><span className='magunasspan'>M</span>AGUNAS</h2>
            <p>Sherehekea bei ya mwananchi</p>
            </div>

            <div className='searchcont'>
            <input 
            type="text"
            placeholder='Search...'
            className='search-input'
            ></input>
            <i id='magnify' class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
            </div>


            <div className='locateme'>
               <div className='locateicon'>
               <i class="fa-solid fa-location-dot fa-beat"></i>               </div>
               <button className='locatebtn' >
               <div className='locatedata'>
                  <p>Your <span>(location)</span></p>
               </div>
               </button>
            </div>

            {/* {showMap && <Simplemap />} */}

            <div className='signcart'>
               <div className='folder-plus'>
                  <Link  to={`/categories/${id}/newproducts`}>
                  <i class="fa-solid fa-folder-plus"></i>
                  </Link>
               </div>
               <div className='signupuu'>
               <i class="fa-regular fa-circle-user fa-shake"></i>
               {/* <i class="fa-regular fa-circle-user"></i> */}
               </div>

               <div className='loginmee'>
               <button className='signcartbtn'>
                 <Link to='/users/sign_up'>Register & Log In</Link> 
                  </button>
               </div>

               <div className='carticon'>
                        <Link to='cart'> 
                          <i class="fa-solid fa-cart-shopping">
                            <h6>{totalItems}</h6> 
                              </i>
                        </Link> 
                  </div>
            </div>
         </div>

         <div className='allcategorycont'>
            <div className='allcategory-wrapper'>
               <ul className='coverthatshitcategory'>
                  <li>
                     <Link to='/'>All</Link>
                  </li>
                  
                  <li>
                  <div class="dropdown">
                  <a class=" dropdown-toggle" href="/categories/7"  data-bs-toggle="dropdown" aria-expanded="false">
                  Food Cupboard
                     </a>

                        <ul class="dropdown-menu">
                           <li>
                              <a class="dropdown-item" href="/categories/1">Breakfast Cereals</a>
                           </li>
                           <li><a class="dropdown-item" href="/categories/15">Sugar & Homebaking flour</a></li>
                           <li><a class="dropdown-item" href="/categories/16">Rice & Pasta</a></li>
                           <li><a class="dropdown-item" href="/categories/1">Snaks</a></li>
                        </ul>
                     </div>       
                  </li>
                  <li>
                    <div class="dropdown">
                    <a class=" dropdown-toggle" href="/categories/7"  data-bs-toggle="dropdown" aria-expanded="false">
                  Fresh foods
                     </a>

                        <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="/categories/6">Dairy & eggs</a></li>
                           <li><a class="dropdown-item" href="/categories/12">Fish & seafood</a></li>
                           <li><a class="dropdown-item" href="/categories/13">Meat & Poultry</a></li>
                           <li><a class="dropdown-item" href="/categories/4">Fruits & Vegetables</a></li>
                        </ul>
                     </div>      
                   </li>
                  <li>
                     <div class="dropdown">
                        <a class=" dropdown-toggle" href="/categories/7"  data-bs-toggle="dropdown" aria-expanded="false">
                        Beverages
                        </a>

                           <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="/categories/19">Powdered drinks</a></li>
                              <li><a class="dropdown-item" href="/categories/17">Juices</a></li>
                              <li><a class="dropdown-item" href="/categories/18">Soft drinks</a></li>
                           </ul>
                        </div>      
                   </li>
                  <li>
                  <Link to='/categories/2'>Liquor</Link>
 
                     </li>
                  <li>
                     <Link to='/categories/5'>Electricals</Link>
                  </li>
                  <li>
                  <div class="dropdown">
                  <a class=" dropdown-toggle" href="/categories/9"  data-bs-toggle="dropdown" aria-expanded="false">
                  Cleaning & Household
                     </a>

                           <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="/categories/10">Candles & Airfrsheners</a></li>
                              <li><a class="dropdown-item" href="/categories/9">Cleaning Supplies</a></li>
                              <li><a class="dropdown-item" href="/categories/1">Disposable tableware</a></li>
                              <li><a class="dropdown-item" href="/categories/11">Tissue supply </a></li>


                           </ul>
                  </div>           
                   </li>
                  <li>
                         
                    </li>
                  <li>
                     <Link to='/categories/8'>Beauty & cosmetcics</Link>
                  </li>
                  
               </ul>
            </div>
          </div>
          </div>
        
    </div>
  )
}

export default NavBar;
