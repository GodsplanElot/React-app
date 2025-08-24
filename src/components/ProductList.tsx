import  { useEffect, useState } from 'react'

interface Props {
    category : string
}

const ProductList = ({category}: Props) => {
    //
    const [products, setProducts] = useState<string[]>([]);
 
    useEffect (() => {
        //callBack function.
        console.log("Fecthing Products in ", category );
        setProducts(['Clothing', 'Household']);
    }, [category])


  return (
    <div>ProductList {products}</div>
  )
}

export default ProductList
