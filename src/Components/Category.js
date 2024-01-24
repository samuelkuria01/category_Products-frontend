import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart'

function Category() {
  // const navigate = useNavigate();
  const { addItem} = useCart()
  const [addedItems, setAddedItems] = useState([])
  const { id } = useParams();
  console.log('Category ID:', id);
  
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


    // Function to check if an item has been added
const isItemAdded = (itemId) => {
  return addedItems.includes(itemId);
};

// Function to add an item to the addedItems list
const addItemToAddedItems = (itemId) => {
  setAddedItems((prevAddedItems) => [...prevAddedItems, itemId]);
};



useEffect(() => {
  const fetchData = async () => {
    try {
      // Fetch products and category details in parallel
      const [productsResponse, categoryResponse] = await Promise.all([
        fetch(`http://localhost:3000/categories/${id}/products`),
        fetch(`http://localhost:3000/categories/${id}`),
      ]);

      console.log('Products Response:', productsResponse);
      console.log('Category Response:', categoryResponse);


      // Check if both requests are successful
      if (!productsResponse.ok || !categoryResponse.ok) {
        throw new Error(`Error fetching data. Status: ${productsResponse.status} ${categoryResponse.status}`);
      }

      // Parse the responses
      const productsData = await productsResponse.json();
      const categoryData = await categoryResponse.json();

      console.log('Received Products Data:', productsData);
      console.log('Received Category Data:', categoryData);

      // Set the state for products and category
      setProducts(productsData);
      setCategoryName(categoryData.name); // Add this line to set the category name
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(e.message);
      setIsLoading(false);
    }
  };

  fetchData();
}, [id]);

const {
  // isEmpty,
  items,
  removeItem,
} = useCart();

// if (isEmpty) return <p>
//   <h3 className='emptycart'>
//   Your Cart is empty
//   </h3>
//   <Link >
//   <button className='cartbtn4'>go back</button>
//   </Link>
//   </p>

  //Calculate the total quantit of goods in the cart
  const totalPrice = items.reduce((total, item) =>total + item.price * item.quantity,0)



  return (
    <div className='categorycontainer'>

<div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='mamboyoteyacategory'>

            <div className='categoryheader'>
              <h2><Link to='/'>Home</Link> / {categoryName}</h2>
              <div className='searchcont'>
                  <input 
                  type="text"
                  placeholder='Search...'
                  className='search-input'
                  ></input>
                  <i id='magnify' class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
              </div>
              </div>


          <div className='servercontainerbiggy'>

            <div className='bigmancont'>
          <div>
            <div className='addcart'>
            <button>
             <Link to='/cart'> Head To Cart</Link>
              </button>
            </div>
            {items.map((item) =>(
                <div className='bagdad'>
                <div>
                  <img className='shopdecartimg' src={item.image} alt=''></img>
                </div>
                <div className='bagdadstory'>
                 <h4> {item.title}</h4>
                  <div className='aimy'>
                  <p>Ksh. {item.price}</p>
                  <div >
                  <button  id="dustbin" onClick={() => removeItem(item.id)}>
                  <i  className="fa-sharp fa-solid fa-trash"></i>
                  </button>
                  </div>
                  </div>
                  </div>
                </div>
            ))}
                <span class="titlle">Subtotal: <span className='price2'>Ksh  {totalPrice.toFixed(2)}</span> </span>

          </div>

          <div class="card">
    <span class="card__title">Subscribe</span>
    <p class="card__content">Get fresh web design resources delivered straight to your inbox every week.
    </p>
    <div class="card__form">
        <input placeholder="Your Email" type="text"/>
        <button class="sign-up"> Sign up</button>
    </div>
</div>
           
            </div>


            <div className='servecontainerr'>
            {products.map((product) => (
            <div className='row row-cols-1 row-cols-md-3 g-4' key={product.id}>
              <div className='col'>
                <div className='card h-100 card-custom-width overflow-hidden shadow'>
                  <Link to={`/categories/${id}/products/${product.id}`}>
                    <img class="card-img-top" alt='maguu' src={product.image} />
                  </Link>              
                  <div class="card-body">
                  <h5 className='productname'>{product.title}</h5>
                  <p className='pname'><span className='kshilingiii'>Ksh:</span> {product.price}</p>
                  </div>
                  <div className='addcart'>
                    {/* <button onClick={()=> addItem(product)}>addtocart</button> */}
                  <button
                            onClick={() => {
                              if (!isItemAdded(product.id)) {
                                addItem(product);
                                addItemToAddedItems(product.id);
                              }
                            }}
                            className={`cssbuttons-io-button ${isItemAdded(product.id) ? 'ordered' : ''}`}
                            disabled={isItemAdded(product.id)}
                          >
                            <span>{isItemAdded(product.id) ? 'Ordered' : 'Add'}</span>
                          </button>
                          
                    </div>
                </div>
              </div>
            </div>
          ))}
          </div>

            </div>
            {/* <div>
                <form class="form">
                <span class="title">Subscribe to our newsletter.</span>
                <p class="description">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
                <div>
                  <input placeholder="Enter your email" type="email" name="email" id="email-address"/>
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div> */}

         




        </div>
      )}
    </div>
    
    </div>
  );
}

export default Category;

