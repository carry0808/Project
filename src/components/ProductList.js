import React from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import { ThemeConsumer } from './context/ThemeContexts';

class ProductList extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <ProductConsumer>
            
          </ProductConsumer>
        )}
      </ThemeConsumer>
    );
  }
}

export default ProductList;
