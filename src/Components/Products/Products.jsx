import React from 'react'

import Grid  from '@mui/material/Grid';


import  Product  from './Product/Product'

const products=[
  {id:1 , name:"Majesty Palm", description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc."},
  {id:2 , name:"flower", description:"it is  a cactus flower"}



]
export const Products = () => {
  return (
 <div>
    <Grid container jsutify="center" spacing={4}>
       {products.map((product)=> (
         <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
           <Product/>

         </Grid>
       ))}

     </Grid> 
    
    </div>
 
 
  )
}
export default Products;