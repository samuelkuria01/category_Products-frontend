import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      <div className='deliverybar'>
         <div className='deliverybarcontainer'>
             <div className='deliverybarwrapper'>
                  <div className='mambovulae'>
                    
                 
                  <div className='deliverystory'>
                  <div className='cinema'>
                     <i class="fa-solid fa-truck"></i>
                   <p>Scheduled</p>
                     </div>
                     <div>
                        <p>Delivery Time</p>
                        <h5>Starts 10AM</h5>
                     </div>
                     <div>
                        <p>Minimum Order</p>
                        <h5>KES 1000</h5>
                     </div>
                     <div>
                        <p>Products</p>
                        <h5>50,000 +</h5>
                     </div>
                     <div>
                     <i class="fa-solid fa-circle-exclamation"></i>
                     </div>
                  </div>

                  <div className='deliverystory2'>
                     <div className='cinema'>
                     <i class="fa-solid fa-motorcycle"></i>
                        <p>Scheduled</p>
                     </div>
                  

                  <div className='deliverstory'>
                     <div>
                        <p>Delivery Time</p>
                        <h5>Starts 10AM</h5>
                     </div>
                     <div>
                        <p>Minimum Order</p>
                        <h5>KES 550</h5>
                     </div>
                     <div>
                        <p>Delivery fee</p>
                        <h5>KES 120</h5>
                     </div>
                     <div>
                     <i class="fa-solid fa-circle-exclamation"></i>
                     </div>
                  </div>
                  </div>
                  </div>
             </div>
         </div>
      </div>





      <div className='firstcarousel'>
         <div className='carouselcontainer'>
         <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
               <img src="https://media.rnztools.nz/rnz/image/upload/s--OXfQT08L--/c_scale,f_auto,q_auto,w_1050/v1643845745/4NY4SPQ_copyright_image_144498" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
               <img src="https://i.insider.com/569e3768918a0f07033ba8ff?width=1200&format=jpeg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
               <img src="https://bmarketingstrategy.com/wp-content/uploads/2021/11/v1.jpg" class="d-block w-100" alt="..."/>
            </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
         </button>
         </div>
         </div>
      </div>

      <div className='homefirstcategory'>
      <h2 className='featuredproo'>Featured Products</h2>
    
      <div className='homecategory'>
        
         <div className='firstcategory'>
            <Link to='category/meatproducts'>
            <img className='meatimg' alt='meat' src='https://4.imimg.com/data4/QJ/PX/MY-31133/imported-meat.jpeg'></img>
            </Link>
            <div>
            <button>
                  <Link to='category/meatproducts'>Meat products</Link>
               </button>
            </div>
         </div>
           
            <div className='firstcategory'>
            <Link to='category/electricalappliances'>
            <img className='meatimg' alt='meat' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQlsFH08Xn-akiP1Si-6fnBxzBcYDALSoMg&usqp=CAU'></img>
            </Link>        
             <div>
            <button >
               <Link to='category/electricalappliances'>Electrical appliances</Link>
            </button>
            </div>
            </div>
            
            <div className='firstcategory'>
            <Link to='category/alcohal'>
            <img className='meatimg' alt='meat' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9SdunjijY9DceJ26m2cgpgAyCPkQO_TaSkujagksFk0urJWj8jKcSsn2zcMyGQTNwzk&usqp=CAU'></img>
            </Link>
            <div>
            <button >
               <Link to='category/alcohal'>Alcohal</Link>
            </button>
            </div>
            </div>
            
            <div className='firstcategory'>
            <Link to='category/weekenddeals'>
            <img className='meatimg' alt='meat' src='https://img.freepik.com/free-vector/meat-products-advertising-promotion-flat-circular-composition-with-ham-steak-sausages-bacon-meatloaf-beef-shank-illustration_1284-65857.jpg'></img>
            </Link>           
             <div>
            <button >
               <Link to='category/weekenddeals'>Weekend deals</Link>
            </button>
            </div>
            </div>
            
            <div className='firstcategory'>
            <Link to='category/bestdeals'>
            <img className='meatimg' alt='meat' src='https://img.freepik.com/free-vector/meat-products-advertising-promotion-flat-circular-composition-with-ham-steak-sausages-bacon-meatloaf-beef-shank-illustration_1284-65857.jpg'></img>
            </Link>          
              <div>
            <button >
               <Link to='category/bestdeals'>Best deals</Link>
            </button>
            </div>
            </div>
           
            <div className='firstcategory'>
            <Link to='category/freshfoods'>
            <img className='meatimg' alt='meat' src='https://www.supermart.ng/cdn/shop/files/hmpxms04_1024x1024.png?v=1688738780'></img>
            </Link>
            <div>
            <button >
               <Link to='category/foodyproducts'>Food Products</Link>
            </button>
            </div>
            </div>
            
           
            <div className='firstcategory'>
            <Link to='category/vegesproducts'>
            <img className='meatimg' alt='meat' src='https://ww2.kqed.org/app/uploads/sites/35/2018/04/iStock-683044558-1180x787.jpg'></img>
            </Link>
            <div>
            <button >
               <Link to='category/vegesproducts'> Fruits & Veges</Link>
            </button>
            </div>
            </div>
           
           
            <div className='firstcategory'>
            <Link to='category/bevaragesproducts'>
            <img className='meatimg' alt='meat' src='https://images.squarespace-cdn.com/content/v1/5d7f7d5afc39111574811cda/1568637032058-4LLXA7RHPUIR66D0RDFW/BottlesComp.png'></img>
            </Link>
            <div>
            <button >
               <Link to='category/bevaragesproducts'> Beverages</Link>
            </button>
            </div>
            </div>
         
           
            <div className='firstcategory'>
            <Link to='category/babyproducts'>
            <img className='meatimg' alt='meat' src='https://supermarket.kanbkam.com/img/supermarket/baby-diapers.png'></img>
            </Link>
            <div>
            <button>
               <Link to='category/babyproducts'> Baby Products</Link>
            </button>
            </div>
            </div>
           
            
            <div className='firstcategory'>
            <Link to='category/cosmetics'>
            <img className='meatimg' alt='meat' src='https://images.news18.com/ibnlive/uploads/2021/10/makeup-kit-163498771616x9.jpg'></img>
            </Link>
            <div>
            <button>
               <Link to='category/cosmetics'>Beauty & Cosmetics</Link>
            </button>
            </div>
            </div>
           
        </div>
        </div>


<div className='arouselcontainer'>

   <div className='shopnowcontainer'>
    
      <div>
      <h2>Food Supplies</h2>

         <img className='shopnowimage' src='../Images/foodsupply.jpg' alt='shopnow'></img>
      </div>

      <div>
         <button className='homeshopnow'>Shop Now</button>
      </div>
   </div>


{/* <div className='carouselheader001'>
   <h2>Best Deals</h2>
   <div>
         <Link>View More</Link>
  </div>
</div> */}

<div className='faoocard'>
<div className='faoocard-wraper'>
         <div class="cookie-card"> 
         <Link to='category/freshfoods'>
         <img className='cookieimg' alt='mambopoa' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtqL_rYxdp4U-SUK0C-UQd96I8uZ3DiKJhWEXk6ZUWfOSqQcIighYX68CuesSWBfYR9k&usqp=CAU'></img>
         </Link>
               <h5>Egg tray</h5>
               <p class="description">Find the very best and nutritious eggs provided at our convinient stores.</p>
               <div class="actions">
               
               <button class="accept">
                     Quick Look
               </button>
            </div>
         </div>

         <div class="cookie-card"> 
               <img className='cookieimg' alt='mambopoa' src='data:image/jpeg;base64,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'></img>
               <h5>Packed Bread</h5>
               <p class="description">Find truly kenyan classic and  tastiest bread in the market.</p>
               <div class="actions">
               <button class="accept">
                     Quick Look
               </button>
            </div>
         </div>

         <div class="cookie-card"> 
               <img className='cookieimg' alt='mambopoa' src='https://lh3.googleusercontent.com/p/AF1QipN1UUyUmrgWhs-1q6AWhMTMBP2Bb3EM8jJkFeBk=w768-h768-n-o-v1'></img>
              <h5>Packed Milk</h5>
               <p class="description">Find plenty in supply of high-quality milk from different companies. </p>
               <div class="actions">
               <button class="accept">
                     Quick Look
               </button>
            </div>
         </div>

         <div class="cookie-card"> 
               <img className='cookieimg' alt='mambopoa' src='https://www.businesslist.co.ke/img/ke/s/1484685832-44-meat-savana.jpg'></img>
               <h5>Meat Products</h5>
               <p class="description">Buy fresh meat and poultry at the best prices.</p>
               <div class="actions">
               <button class="accept">
                     Quick Look
               </button>
            </div>
         </div>
</div>
</div>


</div>


<div className='shippingcontainer'>

   <div className='shipping-wrapper'>
      <div className='shippingdata'>
         <div className='shippingimage'>
         <i class="fa-solid fa-truck-fast"></i>
         </div>
         <div className='shippingstory'>
            <h2>Free shipping</h2>
            <p>Free shipping for orders above Ksh.1000</p>
         </div>
      </div>

      <div className='shippingdata'>
         <div className='shippingimage'>
         <i class="fa-solid fa-money-bill-trend-up"></i>      
      </div>
         <div className='shippingstory'>
            <h2>Affordable Price</h2>
            <p>Experience quality without breaking</p>
         </div>
      </div>

      <div className='shippingdata'>
         <div className='shippingimage'>
         <i class="fa-solid fa-gift"></i> 
        </div>
         <div className='shippingstory'>
            <h2>Free gifts</h2>
            <p>Enjoy complimentary surprises</p>
         </div>
      </div>

      <div className='shippingdata'>
         <div className='shippingimage'>
         <i class="fa-solid fa-circle-check"></i>  
         </div>
         <div className='shippingstory'>
            <h2>24/7 Support</h2>
            <p>24 Hours a Day,7 Days a week</p>
         </div>
      </div>
   </div>

   


</div>





<div className='promocont' >
         <div className='weoffer'>
            <button>
               <h5>Offers</h5>
            </button>
            <p>Promotions</p>
         </div> 
         <div className='promotioncontainer'>
         <div className='promotionwrapper'>
            <div className='liquorforo'>
               <img className='bomboshopimg' src='https://d3omj40jjfp5tk.cloudfront.net/media_gallery/payments/city_hive/5a04398ee779890ec4deae24/image/63be9791e658f72a0724aa7f.png?1673435025' alt='shopnow'></img>
            </div>
         </div>

         <div>
           
            <div className='liquorforo'>
               <img className='bomboshopimg' src='https://i.pinimg.com/736x/b9/48/c8/b948c80ffccecc462ada75453db9b61b.jpg' alt='bombo'></img>
            </div>
         </div>
         </div>
      </div>


      <div className='arouselcontainer'>

<div className='shopnowcontainer'>
 
   <div>
   <h2>Food Supplies</h2>

      <img className='shopnowimage' src='../Images/foodsupply.jpg' alt='shopnow'></img>
   </div>

   <div>
      <button className='homeshopnow'>Shop Now</button>
   </div>
</div>


{/* <div className='carouselheader001'>
<h2>Best Deals</h2>
<div>
      <Link>View More</Link>
</div>
</div> */}

<div className='faoocard'>
<div className='faoocard-wraper'>
      <div class="cookie-card"> 
      <Link to='category/freshfoods'>
      <img className='cookieimg' alt='mambopoa' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtqL_rYxdp4U-SUK0C-UQd96I8uZ3DiKJhWEXk6ZUWfOSqQcIighYX68CuesSWBfYR9k&usqp=CAU'></img>
      </Link>
            <h5>Egg tray</h5>
            <p class="description">Find the very best and nutritious eggs provided at our convinient stores.</p>
            <div class="actions">
            
            <button class="accept">
                  Quick Look
            </button>
         </div>
      </div>

      <div class="cookie-card"> 
            <img className='cookieimg' alt='mambopoa' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBMTExcTExUYGBcZGx8bGhoaGh8gGx0hGxofHBwhGSEdHysjHx8oHxwhJDUkKCwuMjIyGSU3PDcxOysxMi4BCwsLDw4PHBERHTIoISgxOS4xOy4xMTEyMTEuMTExMTExMTExMTExMTExMTExMTEuMTExMTExMTExMTExMTExMf/AABEIALQBGAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQMEBgECB//EAEQQAAIBAwMCBQIDBgQEBQIHAAECEQADIQQSMQVBBhMiUWFxgTKRoSNCUrHB8BRictEzgpLhBxUkU/EW4kOTorPCw9L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMBBAX/xAAuEQACAgEDAgQFAwUAAAAAAAAAAQIRAxIhMRNBBCJRoTJhcYGxI0KRFFLR4fD/2gAMAwEAAhEDEQA/APs1FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFQ6nUJbG52Cj3JoAloqrd1QVgCMHIIj+XNR3Oo2wCZHpEn1DA92zgVjaRtMv0VU6bq1uoLi8Hjn9JAMfardaYFFFFAHKK8k1Ru9XsK+w3EDe25Z/KZrLRtDGiord5W/CQfoalrTAooooAKKKKACiiigAooooAK5XaKACiiigAooooAKKK5NAHaK4DXaACiiuGgCHU31tqzuYVRJPsK8afUhwpAaGEglSPznIqgl43tUQD+zsCD83HXj/lQ/m/xTN2EDPJx9e1BpKDXahtPOe3A+1SigwKS69PMvLbJ9IG6P9JAWfjdJjvsFMeoalbVtrjmFUEk/T6Ur6XZuvcN1mheAogz8sf4gZwIAnvM0kn2GS7jDV6C3cC7hO3g9/mqHUuiJeeW3ABRt2u65k8hHWe3NX/NuSy7eI2t2IPc8ZHt9KtIoHGBRsw3RyxaCiFEVLXlTQ5pkKR3boXk/bv8Aaqur1rKPRbZz7YH8/wC/5VVbU21MOTuMyYIJ/T/tXL7Js3WizbQCAD8jsfzJpXIZRItWrlXa4SSB/wAO2Tz7FpBP0wK8aK2WUBLaKRMkgQpiQIBzzNTXNwX0r6mMkMcz8/oKg0Vu4sJv3HIJHEk+o/aRj4FZSG7FjomgdHa4zzPbaB9cjkTxNOiYqhfv+Ta3EMQI4BJEmJMZgfoKqK2mKi7cuq8/xXAVB9gBj9JqiSEkxg/UbQxvBPxn+Ve9NqkufgYGOQOR9RyKp6fXbx+xttsH75G1f+QHLfWI+aranVWxdCahNjT+zuDCtnADjKN/lJz2mtoUfUVQNx7cbvUn8X7y/wCr3HyKvCsNO0UUUAFFFcJoA7RXkNXqgAooooAKKKKAOUt6svmRZxDfinuM4j5jH0q3qrm0foPrEj+VZW5rCL6MrSvpW5PY3SvlmY5FwiIxDtxFFPsakNtPozYaELlTEA3GMZgwGJAAnj9aa27wMjuP7/lS/Tp5l1mcghQAq+3uWEc/7VX1OuXd6YgnaDnO39OTAnnPxQzBlrdclsAkgyQOfeoNV1VFts4BeFJCr6iSBgCOSfaluuu2GRTedQsyCW9RIGRBMzPaqdnTLqnW4m+3bRCVYEq2WP4WU8QMgysxyc1Jyd7Gqh50DR+XZG/L3Cblwnu75P5YA+FFWrQVfRAUzIAP8qV6G1cRSLjlwP8AhyNpII4uR6SfkAfSpW1siQ+AJlVkAjtJplLY2m9y8lzcBnaNxHOcTivejLQQxBhiFM8jtPz2+1JendSW4drEeYDAOIb3IjHHP07U+0wAUAe33+9anYNUVOt9OGostaZioYQSPn61Pp7QtggZyT+ZmrDGl5vOTgAD3PelnJR3YRTexe3CvPmAiQQfvUCFu5H2FRE7QSijnImPqaXqIbQXrZr0TVKxqBE5H5V6bVKBLMI5mtWWLMcHZF1O15ilRG6ME+9K7Dsli2dplSFuKQZ4gwT8wauXuo29u5TIPEDJ70s6p1iybJNwOQwwBhpnHtB+9bqiNpaILepe89zaWVmb/mVQPnuIj29Rp/0XTeVbVSM8nM5PyefrWf6RrrFtmYK/mXeF9ogEZMAzzn7mnmn6osgOuwkTkg1ikvUHF+g0K4pZfsetG8tGaSC4Vdwx7kd/b4q+LoYek1BdthjMkH3BI/PsaopCURC+xYqsiAI/h5zB+mK9vsuL5bbXDRKkgyDzz+dUOp27qWyVUEjMDuOT9DOaqdO1Zvr6G2k+kkDiMSAfzzin25DS3wPrC+nbGIgCMQcAfOKugVBbGBOY/vtXnXakWkLkE5AAHJLEAD8zS2LRZqI3hu2d4mKS6PrbNfNgqCQAdwMD1FtoODnahb7j3rj6mdYvoZSEMlsrt78SFMx3E/MYXWhtLHzMAJOBSXrfXLdkbRLXD+FEALke8HCr/naFqDqOtN695FlwCmbh2k7J4A7eZ3g8DPcVBbTT2yAPxbgzbyfMfOWactPbsOIFK5Xsao+p3w/rb25zeKgsN628xC8w7QXbjMAQBAjNPdLrVcCQVJ4VhB+3vVW/at3DbcN6UJcxwQV/+7tU+qZCm64IAyBiZ7d+f962KpA6ZfFFV9DdLorkQSJg8iu04gabUq4kVNWWbUXbgVdOpABJKgROc7miFY84+4M1oen2mS2qs25hyfc0kZWa1RLfthgVPesd1lZuGwvpXbE9yfwIfqpBb/lFbN2AyTFYrxdpGfU24ZirAelOcHJEcnvFURsR5oNR5tlXSFe5G9vYwJ+44HyPiqvVdKwRraW4tBcNIkf6YyDzn5qvZ092wVFtd6liSzgKLc5JA/eaSTA9+e1TDryptttuuscnYhx/q3H+VI5Ua0IfFHV183yZK78bjOSQCVkeygD6tHatZ4fvl1kqFCqiwMwQJInvE9qxfX+p9PbUJeuKylDk5IMkZ2g4PMn5rR9N65ZMJbwpOMhR74DHP2qapMWmNOudY0+nC+fuhuItPc/PYrR96R6rxXpbilZXmAHt3gsf/lVR8fa5dqlWO5QYGRk8fXvkVluga+89z9h5t1zthC7BEH+diYBJn5xSTy1Kkjox4k43ZptRrrRdL6vp1Cj0lpVeCCOPt96baTxdpgs3NRphwMXVAnuJJz8cfaq2m6N1BnV2uIigz5fmXGB/1EESPiI5rzruia8WwFu22YOW/E6yCkASZ7yY+lapSW9MySi9rQ70niXS3W8u1dVnhiNoJX08+oDbOOJrN3+pm6ri3qLRYEEftQrD3Vg0Efl2rFeNNVf0+rUsXV1W221nLKD5ag7O0btw4E5rX3rjhLclbikYDKHIMDDbp7VLLNX5kymPE1w0WNQuoa0FRzcdmBdvNWAPZY7T/favfVXvLZVMqWKlt7gKkZMNw2YMf7VW6xo9PYS0G0ujNxzLDyUGPdto+efrVToujFy67NprNtbcx+z3LPAC7pEz3A96W4p0MlNq6VHNUtp0Vnv2bYAC3Jur6syCDuwZPH5VB4k6hbFpms3SdtvYoS3cNsLAEtc27Pvuq5r/ADbateVtrr+JAi/gP7ykcROY4pd4gu3H6e5e4XuMC+Twqf3NKnEo1Pke+FblsaY27l20+CAfOGQ2YMHAzED2q5pSyWJmwHzywKj2Az+ESKy/hTWbtJaa4UYANu3IjGQxjkTx/Orehul7bObdrbJKr5NuSPfjMxWOcd1uYsUuRnqOpuLcj/D+ZHe6kexjP5UaXVMbfpOnO3PquDP8Q5wTzPGKVazVG2ouL5e0iVAtWwTPaQP6V5N+4qK95F3Hn9mhK/URwKTXD5j9OfyHNvxD5TBmuWAu3KK4Zzn90KSTj90DJqyfFdi6g2XCh92s3l/KbYH61m/EmqdNNcUEy6tGwBQAFlpKxiJPzWX8F2NTdb/0+4kmAzXSlsQeFJPqMdlBInNdWGarZN/chkxb22kfQtfr3uiBft7SMjzFBM8rlo9v196pdO1K2f8AiatBABhSDnMYUMcUw0fQ+qAl31FsDaQEJuMASRn5OP1pf1Xw11JoJ11vv6R5i7jHH4j2HH3q7k64f8k1S2TX8D7oXiMXNi/tLm5tm82XtqPkm4FmRGAOfimHiu+Esls7gRtHuZjOJiMmOADkVkOg9K1Ni+rX0eFI9Ks1wEx+JdoMe3qArR9WbzyFa3cUwQIfbMjglSSPvH9KLbjdUTlFKWzsR6i55Fk3hc/bbxcbdADSBxE+naAqgHAAmcmm3hfXpe1Ny4DlgB+n6D04H1pV1DSWC/l+Xdd7aiSHA/FwPUZ7d/apPDurXSsy+Q8syqGZhuYkYAJ5xn70kZKx3FtGlfQrY9VraiyxIKkqC53MfTBknMmeTVfqN0W7bb0DJ+IFXAI74niPtVq51i0EZnJQLg7wQPsTgj6UPZtXYbDrGByue8cT809p8E6a5E1jWKLhtof2bAgqR+Ez2Ixgn9aa2Xe5ckNttxA9M7z+9M/u8cfNUeqdJkL5KqPWpPIgAyx+cSI7g070OkVM8t7ntmYUHgZoQSrkvDFFVdbdKgAAy2JHb5/KiqExB03q3lQtxEVQQpKsSRP4SQ34RVfrXioK5VHVVH77fgIjJ3CdsHsY4mfbOdaZlO94PohgFMGJIgZ4JrM6/WlPwsVc7W9OADmf6Y+a4MeeUtmd8/DxW6NxqAupz5pFs/w3lOB3LbpGcRJqDUaRt4PnqihdocX1DCce57H+dUNFrS+kRjbsvdJYy9tCcMQoOBOI/WqN/qzA2kW1pw7MCT5KyAPxD6f1NUWaHFszoz5pDs9Z22javX7B2ghS19T2gbiIMe/ehup2ryCzbe0SYBVLpIDHsXAxOOTJkUmfW6jcwR0SGyBbQR7genml3UOpah3dWus6W9h8tgCpYODleDxx80nVhJNbjPFNb7GnHh22QHubVCyGUGQf14B7mr2i6NaFlXZVul3ItDsXYmNsfujLEg8Ka6ujZ7qWES0qsN90eWu0D4HEiIz703Z1VRdtgBUUpZWIAX954HG6AB8fWthBckJSlwV7C6e6DZ2hSZAW5O14MHy2mDn92ZHtSzWdC09xW0wtm0VY3PSsSzIyEgncH9LEdomZBg1Hotfc/aI9tbltp3o0GT2gR7wau6LVk+hAzbf/AMG6w3r7eTdJx8K5P1WqJrkxxaPevXqAD+ReO7Y4W2QoCgWwtvZIMt5gksWI9UHtUfX9Hrw+m2vevIlzdc9NkMIClSsASRuYZgY492XSbpYlBcLAZAuDbdtN7XB3Q8bhj5ODVfqniK7ujTbLmw/tFClzJ4XcrQCJk/AGRIqiZPuYD/xOXVG3ZOpA8xJ3MNuRsSS23AO7mMTxin2m6mqWvKuAfgS5bmQd0AHIPsZ+1ZHxt1K8Xc3J8y4u24WjbGBCKANpwJkn+p0yWVu6SzkeZaQcydyCMcTiR+tQyJydxO3DHbfgtdS1ruguMVEkBV/eaIGP8s4qfUhrtwg7UG0FlWTJmOSIGDx8V5u6U3it1toRfSnCwBkcgR70wu2bIbduuMAIMGVx2B4JqPRlTb4KSnVUI9Lee3qAgDlJKkMoIIYQQYnmP0q3/wCULcV18u4FKsqjO3M/cDPFe9LrlTVBi0JtEqe8E7T/AMozjNPrPiNNzkIzW0IXeBIYn+Ad496WKjF0xck5NWl2M30vw3ds29ipKx6xgSeJFW71pg5t7NogR757CPatYNSHIIGInIjnIBpL1PUob8SCwT1AHiSf6USihceSQktdH2AqbkqSGAI/CeTkfOftUvTemPd3JcZR8DkqRz96uW9XZDQxIBgAmYk8fT/tV/pbp5ju0BWjPABUAQSexGa2ONSds15ZJGZ61pF02muozFittlt9z6l2gcc9q50LoN69p9CUtqnlW4YOwEP5qMWIAO5SEJwQTI+a0nWunjU3FjaV2wFEZjMzGD2mhvOtiLii2qcMHxA98AAYrqweRuiOX9RIivWepjeTcKruUswZDgXSWNoFfSvlQpBzPGcmTpunvIqNfd71w7SA22EPqUssKCJQx7+me81Z6Pfu3l3llKFvRtgzmBJDEHKlvjAPtUfX9Q1u4ArFRtA38hSnJPvz79jXU22uxyLZ0Gs1l207SAWlQPfaRmJEYzx81DqupJZV2KQCVAKjJ3b8mMcr8cUvu3biuQxVzt3KV9ySAWycQaj6NcVQ1l5cnM9oYZx/DK/XuM1Ka9CsV3I7nVL4MFbJW4ysri4yEsoESGtlVbA9LMRirtrqd6+yMLNosCyib64MZ4tmDAqtqNJasq4MmRBniDO0d9x3GQ2PzmFWlts3lC0f2V15uQBKlTuIHsD/APyrkm1F8I6YQ1K7LljTXtXcuNcWLaHY5tXC248xHlqDAPJ7cU5Btafbbsh0zn0k7o5LEgwB8RWe0yITduOgdzcaH3MlyPbdbIMDn716HV0QD9prbcgYS8LnPb9srn9axTi+HX2Bwku1jTV2LWpLot+4txcNiNwMfER9PbNcFy3a8zdcLBIXBMbzOBB+mD3+9Vk6gUgjVarkAb0sPlsZ22lI5qLxZ1R7VkF9U7bpIUWLIJgZMkGORmDzTRl21CtNcxGXS/EtxwR5DsvYgmAV9icQfYcUVlvD/Wb3oDj8SgQy/wCb6Ywc49q7R1mtqH6EXvY56r1NrXNzUxEz5lsgfUm2axXinqD3Csm5gFvW6n27KoANbTrXS0YHcxPwSMQePkfHzWC16HzSCJC7jPuuD/WpQlJvcdxguDR2QyaOzetpJTduzyhYyOOxgz8U/wChdJG9L2wM7AkzHpGMCR8fpVLROEsadGA2XUIH+rJ2n6ifypl0/WLvKPKi36QcwQQDmki99yk03DylnqnS2uMxIAAGDImYJzA4xn61lugaZBfS3G4uxeCOduZb4xFOOpdWtW7rorftHWFOdojBye+cQPesouovW1bUByrtcVVA7KHCxn3k/nWutaMgpKDPp2tt27bMs4IDX3JztH4bY9i5mfifelPWNbcd4iEdY59Pp/CB9v5ViP8A6xJH7Vd5khhMCfmO/wA1f6X1dLybwLsD+Mjbj+E+1dTmcqxtDDS+WuEXbGT7EqZIknnE/aq1zUvZ3N6hIY7mM7RjH2kiPirFnUKFLbbfltMzOCVHBOD9qXPaNywLKXFBL7jI/dn8JMk+0GMx81nYZclhPEt6/dW3ZtBmRZDs5XYDI9TrBC/E59sVzqzaq3ZcXbdlrdwqWu2Wnyzu5cLH03EdzJpj4c6Dc0waLls72mZ5UAADaR2zTHX3mFi6LrobYR94IAJEEfwiefzraTVWZxLZHyTroBJjAz/OD/Kt94fUKLF+SoKBGE5DADIME5B7+xFfP+rJIUrOVk+88GfnFbLpmg1Vywi2txDW1gjAkEYJPBicVOM3BKjoT3Zt9ZZZ7g8r1qCSxkSvpjaduZzwcQaU9Tu37aG0G2LIKBRMoqkFTkZLHmRNMOl6e/Z006hN95Th7ZyR2krknGZ5pHd8UahrbC4qhlBMwA0CZncIB78V1dS1TIwVStdhZ07VWxcBuIzkmDv5VSsTnntj2zWnsdcsW1RdiwD6SIiVMen5OI95r5vqOui9uDSA+SRhuMcY5/nXNHr96m13O1VJ7k/hJ9v6TXnZsFzUos6ZtVd3Z9G6n4kVfMZDuVBj3J5P5GR+VZ/pt4+W10ufMYljIjM8H47Um6tpHtLbskNld5jPfifz+9RWRtXhvvtrFHTd8sWCTNHoNal82pIH7Ub88RM47DA+1asMVuHeqKFI9CY3A4n5ExkV8h1muVXmIg9omeO1N9J1XWenYz3FX8OJgfVRkfBmqrYWSvg+r6JLtouWYFGMqNsbMRCmT8flWM8feKMHSgmWI8wmPSoyoHM7pn6fWnfXeutY6Y924A11VUYwJYYMnMD6A44r4zpNTMu5LM59Rx3/ALirteVURhvJ2bvw5rdVscWGW3aUhRcbdAMZCBct89qm1fWddpzb8x0u22YjeoIJMcNuGMTBo8FW/P09u3auFSspcUTM7idx7AEER960+n6SjMbbL5ptwxLndEzG1Y5kU7lGKq9xN27aM303qDalna1ah0ILEsAM/ug4De5B7VPqurJaubQp8yCpfgAKswtPLXStRBCMbUsYwAD7ASJj8u9U7XQbylibgMEBuSNywZzOYIEmteVONX7G6Fq2/Im0nXFuWrqXIDcqI/FtMhtxGSPb/el3Teq+SrOxwQSF9yTgLPea2KdHNyzN60JfJCgAx3kpGPzpT4j6XaVlvG5uCSoRgARiQcgcRORmuSdPuXx7CTpVxv8AD+bJa4jljBgGT6p+IP6VovDvS0vst+4W2wfLUYA4kkxzWV6Nr/LtoNsq59R/1DH58VrvBnVImwhhk7EZKkTgHn5+1TrzDzk1C0MNf01U9SScyykzj4J4j2rKeKkY6S9ec5J2KvYKpIkZ7mc19B6jqyLZLxEEDEEkgjH51898XawXNPdVGhLYG72ZjwAf8sfeRW0lJUJCUpRdlnwr4gQrbDXL9v0wPUt0TxxdRiOOxrtUvBfRfPRCGCsEBX25j69jke9FVlmnf+hVDF6s2XWNSyiQLf0ImY/nXzTqF7dqHLY3SpjgFoiPjdH2rTdRu3fQskAPJG4Rtnt/fesh1bc9+NsScAe4z+X+1JCdyHePSmbsJ5mn0qGJ8vzDIkghxEZxz+letXa2gl7m0ckhR/WfipbCjbYMR+x+8bhSfxHqnDBCPQRzyPTJkfI9vge9SUXOelF4tRhZD1O1a1Cqwct6vYAiPtS7rGm/4Y3NG4GCZB9a1F0vVQyW1UDexZifbucjirfid4KBRMsBPtkH+la4yjkrsa5RcGyj4T6Pbv6hi5wsHkDJOI3DbiOPmvoF7pLhR5Vt2JMzKmB8dqwvgq8UN4mCITBAIgkySGG0/etXpXHmFf8ABWtoj1KnlkkiceXA+9Uk4XUmznqX7UWb/hy7ci5sYEfu4Ejg44zXrReFjbkuDPsmWAOIBIjiMfFWkuWfLLi1cgA4W9dHHIA8z9Kq3767dx02fZ791jniRJrVor4mJ+p6Fo9IIZFS2dqq0l4E/wAI/UmknXkV7bIfLWAYVDvYjtKJJwQDmAI5pnqNBcCFhodJIEw43nj5XJ+Kz3W+oXnsvZ3G36ZgAIpWcnasYERB4pWoKuRoa5XwNfBHSLT2E1EJueSSwzzHHA4rSXh28xR9/wDasn4DLtoUb91dxEROCcEc02uIxiQwBHpPAPsZiT+dTk2m0UUb3sY3WS0rFrkEDcYJJ5jtxSnW37V8FWO7HJXNeLelubyW2mRBO4mcgn7/AFry+jW220H5yCY+ORU5ZHRaGNXufPOk9E8y/wCTbUErOXMAn1ELPEkDE961L+FQhWbhnJKgFWAkR6RHzkE9s8S98BaMXH1itt/4oAkBv3FP4Wxyf1q9rNObFwAxASUgQME7oHAMQDtjkV0TnJbtHGlc3GzN3/DgN0G4PMJKbouNu2qmV7HczAgE1BrfDx8sjeXIVYVgGJdrjKqW2wYhZkz71oLWqt72bd6pj3Bz78dz+dV9Y8XdgYkjgIRviNvpzIO30hjCoGZpJpZTae5uilaYh/8AD/oVh711tQoPlNtCscAjk95r6T5lpfwkKBWH6F04OLjpc2ftWG20ZtjaABB74798mrGs0FwSWvmAP3uP61KfiY6qui2PBqV2bIXFYD1iB84/lVDqPQtLcEXLdsg94ArJ2tOXCIt9S4nIfJHMEAZjP51cfTaltoN7CiAJP2mAJ+9EvEKPLG/pZJk3TulLp3e3YAuBTu8tWXfJAIJDZMACO2Kbau/qFhLdshnjc7Awgj9T7D3rLaEMl24L5W6khvVaDBScEryViBkRxWidraNbVBfBb/2794KoESSC5XuMRVIPFk31O/Ynkhkg60pkmsNwqLZdtuOQS0g8zH9zUD6zUNcA3Hy0/ERgs3YD/LEfnTMg5C370jsGRiPrutE1XbUNvNs3tQIEyy2gOTwfJ+O1P0otfH7Mmsj/ALRfd19xxbSzbuMm9nf0nkSIjtLGftWd8WrddbhuQj7SAm4FoiJIWdoictHPeaddd1wBUA3L24wA125sjuStvamPkGst1vVlkuIg2KiliiqqKfSYO1eTPc+1bGONSVSbY3n0t6UkUOmgtaKdsQPoMEfeKaXlZbgaASyjMkDAqp0lfRMcALP0UTXfEN4g20yMf1xHxSy3m0Ug100xtN4ulwbmI9JlgRB5gyM1F4suImje0EIZ2LcfOc/ExXnw3qgqBXaSWMD4+/3qx46g6U4gwe3+Za17TSD9pd/8KL/7FVIU7UiTyIyftmisj0C/cFlVVmVWkkKYnMGY7fHeisyT8xJYNSsn6hrpupeJIgztnPER8Car20L6nAz6Wj4YgH9DUmrUMpYbZnGDtwQQJ425n713w1p386XI3bu3ABUkAfFUjFarGlJ6TTdXt32t21stDeSNkGCCCAZkEEfEUo19m4rL5u0FwgIViXOwEs0QOc8d60aMJtrJJFkE494qPqFnTvPmhSYCncR345OORUY5NMqorouJmbVgtfhG8u4d8b1/ECcnaDMDEZql1Lp5sJaUsHi6SWgyYECZOYrS6HTaWyzG15asfTzknsM/0pL4yx/hz33Of0po5HLJpXBksaULZU8Gqs3i/DKv0zPP51rOkq5fywGKoBubcTPsBJ9qyPhNpZ1bEoB/P862fSbqrttoLbty5krH+r5pcquRuPZbF+xo0ts1xQQrAlgXkH/Nz7e3sK99L1ILi4yqtvdClsE9txk8TXi3o9jswKlGBJUnAPwfY967qbasnqcFSMjEAR9KRcg1ao0bMIPpER3Y/rXz7r+0rchNzqCVk8BpGB3FW9JrwboQM7WwMHd7D+xUXX7C7DcUSQDljPY4/lT5JW0Lix6bKPgXW3k0qC3YuPlvUohT6j34rQaTUa4ttW1sxJDbSIB9jIH6Us/8MdM97TKvmEAO4gfLTWu6fqxaD2QjM5DOWJwRu2ASMggcA+31poaupKTWyCeVRiopJsV6xL7wllFFxV9uIw0+/v71Ut9Bu3BN3VGZ4tptIPcHdBn6imWltXbd1XBLIrEPAO5tpwDmNxY+37vbuyOptX7phWBk23OIJCl1IzJgAiY7n2onFZItQe/0MXiZ46S2XyqzO+FyNNqLlm3vZCwcksC3qQAzj4q/4jN25qrTWyGsqj70Y/ixA2yh25iYImBIxWY6r0cf4523R6FIOY5bmM8fNWrujCeoPH0J7/U+9dOGeJ41Cb3qmcWaM1NyiMDasI1tnty4JDCYBI+ZiZgSfmpuhdOuLa/9SqO5LMP2siOwKqoBiODuzWf1WikKQ8QZAJkccxgT/fzV2ybrGPMMQQAmMZj8IOJ+e9OsXh4Rfmu/V/gRzyS2L/RIW9rJHN0f/trXeuD9hcP+U146BoXRLlxuGuTznCgSZJOSO9MNR09r1l1U5b0r9YnPxXh5MUp+IqK+a+h7WHJCOmTfpZnuhkzYPtuHK/wHsBPHv709DjcRORzWe6TcQXbSqQSob907vw9zwc+1XrmpFy8yJIcAwSMMARI96fxeLVL7HTn+P6/5K6iNRc3lhbKqMZBLSDuH6fena6gWES0G3sfSgIPE43GMACJPxWfIL6y6hB2eWkkNByD/AL1pdMrDYrOS0EAkKSQI+PaJrMMaST9F+DlzOxxoipEmN3BKgf1rmudVEjn/ADARn6Ul1lxrDG75kSII2fijjvzXnSa171sXA8hpj0H5H8VdupKBxrE3K7FPWL4TfDbtx9CoomSMgQOO5NZPXrJaJLBSGJxyCeK2F0C0t0u5IT8OMiV4HvzHvWSvWiSzsIJWDJzx7CpYVU7OnJ8DItGlxrVzym/CxA4Bn7iI+DXrXW7jJbN1DO1Vltu3eT6tsHGJ9uK99BuqRd2TklvzC0y1uiW9bViSCFjBwDPMd/8AvXS51NpkYRuCF+ktLZcO0hUDERkAySu75Of0qz1/Xf4jSLdiAOwYGZZfxRxHtVvouguWnlrmP4UWATzLcya8+OnmwFAwRkxgZHP99qxyTmg01EzXR2K3NpxG4R95/rXKt6Cwy3i8buCB3yinEmCaKrKCsyE2kMtZb0vqYIw9WAJC4Aj08GvPh0Tccz+9P5KY/v5q7e1Fh1YDfJc49XPznHakum1Wxtox+0Ib32/2v61PHyGTg3JAJsnMtZB/PbSPW3tPvyyyOZTdng5J9gB9qadV1Ism1cfeUNpEERAMAyZIgH71AiBpPlIBkEs3M/QGeahxKy0d4pC+7qbaPtEzIiEUA7sjIHaaVeNVM2RjCuf/ANOKedV1T2zbTy02tKhhkAxxGO38qSeI9NcuPZEb3KPhRjj3psauaYuRpRaKHhlZNwDJCqR9QcV9AsoEVAYZmAO1rcnAAkkcj7VhfDGjZbxDRlDjeCcEdgcfNbrT2grB5YSBx6h+EYHef5U2VUxISUkct2biMyHZ5TAkYPp91zzXvXeYLaeUEiAHwJ2xmD716s3LgLW3Nz1A7W28j2wMEUam4y21VWIb05PcCCeBzH86lwVMrYtjdDMN0xj5ImOCfV7CmHUbNxLZ3lctK54X2MiSalQX2adwkER6Gj8OdpImP9651t2WySxEjuVzBjt71s3Zsdjn/hbfZLTsJjzGP2J/7VtNP1Nbe4M2225JDgYQnJnttnIbjMHtXzPwV1DUeTcW2LZQXWzcBmWzmDxW/wBH1O2thdyg3QvqIWBuAJg/H+/zVMUMvUlT8pz54RcU65PdzpqiHTWRbB3FjtLGckq8gCT3g84r31XqDOQy+lEHpLkLuJEFjMQAJz3k/FZlfD9665u7nYOdywYCyTKzMwO3xFV7PSLJb1KzkH1TOPr3rpy2480bjw47Tcrf0Ldy7ae8fUtwlQJRg0eogSVbvJNetfaVVRbqk+Zu94TaRtBHc57+3zVcNp7GrViwtjYCFj0sJKkzPImftTnrekd1QoVAEtuPqB+30HNcMUor8WWzZE0oi7/D6ZmYFAYCx6crM8/MiOfertizNvdauNsHY5IHcqf1g9qx1zW3OcGABj2nv3Navw3fcadzcUhBi3uEMZJiROREVs4NxbZFuN0W+n6ggXLXIV4n3wG/mf0qS91Q6e07ATGR9TgfbP6VU6SwbzGHe5/JVH9K8+K7e2wx99v8xXBjyzWdO+NvsdmPHCUoxa2bFPRrQFy0WEEqzH0lSfmSYb6j3p+bajc4MngfEkY/SknR7UXbUiGKNMptxjvtE/mf1p81hlUvnYMloxj5q/i1OWSopvbsVzzWq2/+szWjQPr9QpCkbUUyYP4O1P8AQW2Hlh5LJuXcDyMQfuIrN6C4H1uqtAiTBU+0KIINPtIWLKzrtbaykA4kESR8GMfWmUWkr9F+CDafBQ6/dvOB5qbArEK24QRgKeT7mRnj5rx0S69sHat26CVUQcD+IkgGIOeKm6lrd8gpauKD6dziQIAMz3Jn6CvXR3FssFtABjMi4Gx8kknGcV13+nTRGvMWNc9vZeLhoU7pP+n+lYfqLQ28AglTMmf3SR962HVURkdWED0sZOIk8/8ATWS11oOZHp3rEd8/hJ9v+9JhS1o3I/Izz4U/4Lz/ABNHsR2j++1XWQGYYT3C3IP3H5fnSjw2/l2nZgSplSAZAkjOYpxb0S3FJ8s7udyn3HIg+1Umqm2ycHcFRd6cjgqSzhSZyARGRzNePHMf4fvmB+pNV9Pbto4Bd1OJE4IEcj7RXrxvcV7NsrDbYHPuT9u1Yl5kzW/Kyv0ZrcI7KQ8ASZPELj8qK9dIRbiJO5eYiQO3fiimm9zcfwjzV2bxss2y6GI4ic+3HvWP1mlexcUXhsDyYJBxIHrAll55GR7Hivoj6dyvpt333AmPO1GcYDS+PvSkeCL+o23GS3ZIBAthAJn+IjJPyZq+LGk3Rx5MjaVjC6GKojrZgqAA1645IAHZbInifxVHbliVVrHpOQti6xB+r3QD+VOep+Grt5bUMEe3EMG9hB7ZkVateG+5cAkyYkyT9xWPX+2KNTh3kzMFw7m15t0OoDQtqxbwcencj0q64++3akOwZpAusrCFE5RUVT2j2r6D/wDTNokM7MxHGBj6d/1rxqPCGlcgurNAgAn0j6KIFPGOR80hJTxri2YDwqGZroUoSE2hEVVOT2gZGMieDTPp1i7bulnR/UI9SNjj+GeYmtLf8N27IJsW1Aggps9LdwGAOfj61U02pRQJ8+2h52XXgHg4eduewIFJPBezZsc1fCin55Ba2VKv2I3wZ7/h/uKGW55YUo8hYMP8ciKZrrNP5m1r98exa76T9JEdqh1+r068X7rmDgap1/LZj8ql0Yrv7FFnl6CPRdOvOAYvex3TuBBEEYjt796sdU6fea35ZCgER63VcDuSc/8AzTDQvbvqClq888731DR9dzbTRqNFqgw/w+kFsHDsEtKfghpLGPamWKLff+AeeXyRlvAmiKf4m08QHBEZUyDlCORiJ+K0VxmFwEqNmPcxA9iSIn2Ao6T4c1qXbt6762uER6+AOBHA+g4pmek6r+Af9QqWXHk1PSikMuNxWplPUdUbBtFtozCxA943KCPpUBdm5ZSScnb+o+cUx/8AItSf3VH/AD1z/wAh1Q4VP+v/ALUqx5XymPHLihumjHeIbaNrLXm/gNtgMYJmQM8/Srur6ydKLflHcDIKMCoAERADY9p/+aeXvCmpuOjHyNomVcb5n2lYB+YqS54OcmTb0x+zD+QqnTyJp6Tnnkg7pmXPi9Mt5Hr7S5K/P07cVe6br7epttcvNtYcL894xntzTU+BzM+Xp/zumpbHg24Mf+nUewRip+obn7mtywySjSiwx5McXbYk6F1BRb9Fu4V3sAQAQYMSOKvdW1SX7flsl1eMhR2zTvS+GbqLt81P+W3tHxABwAMVKPD17/3V/wCk/wC9c68FJPUo7/U6P6vGmmnujJ2riq4dmuNAIzbA5ifwgTxT64up8nduJtbZEbRCnjif+1Xh4cuf+6v/AEn/AP1Ug6BdjabwKfwFCV/LfEfFdGLDOLbknv8AMTN4mM6prb5HzvS6QG5f1FtrisH2kFZtyoEeoTtBH8YHwa1B015fLusjAbTjGd0H92R29+9WbvhO7Ze5e010K7gSgG1CRjOT8D7VNY6deEm5auAsJJtXnQg98W2AP5VSeGMuVXuRWeS4afsZfrd27vUKWWRj0SpPye1SaAmZuBCNvAQTP1zj7d60dzzQ20LrAAMH0OPnLIx/OoDcvd11f3s2z/8A00dCOmk/ZjrxDu69xJrrY1B8pUbEbhtOQoJIHuOM/NLG6c6uWd0tCJCHLnPAUSQPcnFapbl24pBTWkifSwNoHtzatpIPtNSdK6NeclXti1aMyiqqyZEMYMsSP4jW48EYy2bYmTPJx7Iw/hJ1FgI/kAsSpF2zcJOTjclwA4+Kf6dEKlVt2iByLV9lb49Ny2APu9abU+CtK4P41MggqYIIyCK4PByCStwyYksqngR2Ip545Xskyccka5aM3qOno7Lca1qLTL3VUugj2JtO2O/FKvFOltXLCW1uhdrDDWbysewkG3x8nHzWtu+ELy3N9u8CCIK+pe+CIJzS7rnhjXXNN5AcsZBLG5g+4PxU1jpq4jPJttIU3+iX7SKlseYFIBa2dwEmWmD89xRTTQNcVlW9ZCvG0taZrJEextxvBJ/vNFbLHC+fYeOWSVUfRCK5sqWKIrsOEjiu7a9xXYoA8baAtSRXIoA4BXl7SnlQfqKkiuxQYQHS2z+4v/SK9JYQcKo+gFSxRRQWciiK7FdoA8xXa7RQByuRXqigDkURXaKAPMV2K7RQByKIrtFAHIoiu0UAeYoivVFAHIoiu0UAea4RXuuRQBHFG2pIrkUAR7aNtSRXIoAhuWVb8Sg/UV2pYorKRts6KKKKYwK7RRWAFFFFABXaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDlFFFAH/2Q=='></img>
            <h5>Packed Bread</h5>
            <p class="description">Find truly kenyan classic and  tastiest bread in the market.</p>
            <div class="actions">
            <button class="accept">
                  Quick Look
            </button>
         </div>
      </div>

      <div class="cookie-card"> 
            <img className='cookieimg' alt='mambopoa' src='https://lh3.googleusercontent.com/p/AF1QipN1UUyUmrgWhs-1q6AWhMTMBP2Bb3EM8jJkFeBk=w768-h768-n-o-v1'></img>
           <h5>Packed Milk</h5>
            <p class="description">Find plenty in supply of high-quality milk from different companies. </p>
            <div class="actions">
            <button class="accept">
                  Quick Look
            </button>
         </div>
      </div>

      <div class="cookie-card"> 
            <img className='cookieimg' alt='mambopoa' src='https://www.businesslist.co.ke/img/ke/s/1484685832-44-meat-savana.jpg'></img>
            <h5>Meat Products</h5>
            <p class="description">Buy fresh meat and poultry at the best prices.</p>
            <div class="actions">
            <button class="accept">
                  Quick Look
            </button>
         </div>
      </div>
</div>
</div>


</div>








    </div>
  )
}

export default Home