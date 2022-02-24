import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe de generar la imagen por default', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar la imagen del producto 2', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage img={product2.img} />}
      </ProductCard>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
