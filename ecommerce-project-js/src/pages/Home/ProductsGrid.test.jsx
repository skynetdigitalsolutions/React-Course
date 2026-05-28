import {it,expect,describe,beforeEach,vi} from 'vitest'
import {render,screen,within} from '@testing-library/react'
import { ProductsGrid } from './ProductsGrid'


describe('Testing Products Grid',() => {
    let loadCart;
    let products;

    beforeEach(()=> {
        products = [{
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
              stars: 4.5,
              count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
          },
          {
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            image: "images/products/intermediate-composite-basketball.jpg",
            name: "Intermediate Size Basketball",
            rating: {
              stars: 4,
              count: 127
            },
            priceCents: 2095,
            keywords: ["sports", "basketballs"]
          }];

          loadCart = vi.fn()
    })

    it('renders the products',async () => {
        render(
            <ProductsGrid  loadCart={loadCart} 
            products={products}
            />
        )

        const productContainers = await screen.findAllByTestId('product-container')
        expect(productContainers.length).toBe(2)

        expect(
            within(productContainers[0])
            .getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
        ).toBeInTheDocument()

        expect(
            within(productContainers[1])
            .getByText('Intermediate Size Basketball')
        )
    })
})