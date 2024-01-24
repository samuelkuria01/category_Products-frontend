import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function NewProducts() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    fetch('http://localhost:3000/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error loading categories:', error));
  }, []);

  const handleCategoryClick = (categoryId) => {
    // Fetch products for the selected category
    fetch(`http://localhost:3000/categories/${categoryId}/products`)
      .then((res) => {
        console.log('Response status:', res.status);
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error loading products:', error));

    // Set the selected category
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <div>
          <h2>Products for Category {selectedCategory}</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    


 {/* <div className='formationcontainer'>
                <p>Add Product</p>
                <form className='formation'>
                    <label>Title</label>
                    <input
                        type='text'
                        className='inputit'
                        placeholder='Enter product title'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                    />        
                       <label>Image</label>
                       <input
                            type='text'
                            className='inputit'
                            placeholder='Enter product image URL'
                            name='image'
                            value={formData.image}
                            onChange={handleChange}
                        />    
                        <label>Catgeory</label>
                        <select
                            type='text'
                            className='inputit'
                            placeholder='Select category'
                            name='category'
                            value={formData.category}
                            onChange={handleChange}
                        > 
                        <option value=''>Select category</option>
                        {categories.map((category) =>(
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                        </select>                   
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </form>
            </div> */}
    </div>
  );
}

export default NewProducts;
