import {it,expect,describe} from 'vitest'
import {formatMoney} from './money.js'

describe('formatMoney', () => {
    it('formats 1999 cents as $19.99' ,() => {
    expect(formatMoney(1999)).toBe('$ 19.99 ')
});

it('formats 1080 cents as $10.80', () => {
    expect(formatMoney(1080)).toBe('$ 10.80 ')
})

it('formats 000 cents as $0.00',() => {
    expect(formatMoney(0)).toBe('$ 0.00 ')
})

it('formats -900 cents as -$9.00',() => {
    expect(formatMoney(-900)).toBe('$ -9.00 ')
})

})

