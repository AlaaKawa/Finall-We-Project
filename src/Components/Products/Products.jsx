import React from 'react'

import Grid  from '@mui/material/Grid';


import  Product  from './Product/Product'

const products=[
  {id:1 , name:"Majesty Palm", description:"Class aptent taciti sociosqu", price:'$15',image:'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg'},
  {id:2 , name:"flower", description:"it is  a cactus flower", price:'$10',image:'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg'},



]
export const Products = () => {
  return (
 <main>
    <Grid container jsutify="center" spacing={4}>
       {products.map((product)=> (
         <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
           <Product product={product}/>

         </Grid>
       ))}

     </Grid> 
    
    </main>
 
 
  )
}
export default Products;