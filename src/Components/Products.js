import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function Products() {
    const { id,productId } = useParams()
    const [ productDetails, setProductDetails] = useState([])

    useEffect(() => {
        const apiurl = (`http://localhost:3000/categories/${id}/products/${productId}`);

       fetch(apiurl)
       .then(res =>{
        console.log('Raw response:',res)
        if (!res.ok) {
            throw new Error(`Failed to fetch data. Status : ${res.status}`)
        }

        return res.json()
       })
       .then(data => {
        console.log('Fetched Data:', data)
        setProductDetails(data)
       })
       .catch(e => console.error('Error fetching data:',e))
    },[id, productId])


    if (!productDetails) {
        return <div>Loading...</div>;
      }
    


      console.log('Product Details State:', productDetails);

  return (
    <div>
    {productDetails && Object.keys(productDetails).length > 0 ? (
      <div className='productcontainer3'>
        <div className='sideimage'>
        <img src={productDetails.image} alt='blodclat' />
        </div>
        <div>
        <h2>Product Details</h2>
        <p>{productDetails.title}</p>
        <p>{productDetails.price}</p>
         </div>
        
      </div>
    ) : (
      <div>Loading...</div>
    )}
  </div>
  )
}

export default Products