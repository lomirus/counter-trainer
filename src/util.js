/*
 * Integer: lower <= random(lower, upper, true) <= upper
 * Decimal: lower <= random(lower, upper, false) < upper
*/
export function random(lower/*: number*/, upper/*: number*/, decimal = false)/*: number*/ {
    if (lower === undefined) {
        throw new Error("'lower' is undefined in function 'random'")
    }
    if (upper === undefined) {
        throw new Error("'upper' is undefined in function 'random'")
    }
    if (decimal)
        return Math.random() * (upper - lower) + lower
    else
        return Math.floor(Math.random() * (upper - lower + 1) + lower)
}

export function randomDraw(array/*: Array<any>*/) {
    const len = array.length
    const key = Math.floor(Math.random() * len)
    return array[key]
}
