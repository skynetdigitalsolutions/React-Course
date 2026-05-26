import { it, expect, describe, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter,useLocation } from 'react-router'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import { PaymentSummary } from './PaymentSummary'
import { within } from '@testing-library/react'

vi.mock('axios')

describe('PaymentSummary', () => {
    let loadCart;
    let paymentSummary;
    let user;

    beforeEach(() => {

        paymentSummary = {
            "totalItems": 3,
            "productCostCents": 5000,
            "shippingCostCents": 999,
            "totalCostBeforeTaxCents": 5999,
            "taxCents": 600,
            "totalCostCents": 6599,
        }
        
        loadCart = vi.fn()
        user = userEvent.setup()
    });

    it('displays formatted dollar amounts', async () => {
        render(
            <MemoryRouter>
                <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
            </MemoryRouter>
        )
    })



    expect(
        within(screen.getByTestId('product-cost')).toHaveTextContent('$ 50.00')
    )
    expect(
        within(screen.getByTestId('shipping-cost')).toHaveTextContent('$ 9.99')

    )
    expect(
        within(screen.getByTestId('subtotal-before-tax')).toHaveTextContent('$ 59.99')
    )
    expect(
        within(screen.getByTestId('tax')).toHaveTextContent('$ 6.00')
    )
    expect(
        within(screen.getByTestId('order-total')).toHaveTextContent('$ 65.99')
    )

    it('places an order',async () => {
        function Location(){
            const location = useLocation()
            return <div data-testid = 'url-path'> {location.pathname}</div>
        }

        render(
            <MemoryRouter>
                <PaymentSummary  
                paymentSummary={paymentSummary}
                loadCart={loadCart}
                />

                <Location/>
            </MemoryRouter>
        )

        const placeOrderButton = screen.getByTestId('place-order-button')
        await user.click(placeOrderButton)

        expect(axios.post).toHaveBeenCalledWith('/api/orders')
        expect(loadCart).toHaveBeenCalled();
        expect(screen.getByTestId('url-path')).toHaveTextContent('/orders')

    })


})