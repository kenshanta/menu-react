import React from 'react'
import { Grid } from '@material-ui/core'
import {IProduct, ICategories} from '../../utils/interfaces'
import {CategoryMapper} from '../../utils/maps/categoryMapper'

interface Props {
    indexValue: number
    products: any;
  }

const PanelBody: React.FC<Props> = ({products, indexValue}) => {

    console.log(products, 'indexValue')

//     const category = CategoryMapper[indexValue] 
//    category && category === 'Drinks' ?
     return (
        <div>
            {
                CategoryMapper[indexValue] === "Drinks" ?
                "Panel Body not Ready for drinks yet"
            : ''
            }

             <ul>
                 {products && products.map((product: any) => (
                   <li key={product.id}>{product.name} --- {product.prices.primary}</li>
                 ))
               }
               </ul>
        </div>
    )
};
export default PanelBody
