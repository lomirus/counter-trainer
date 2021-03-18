export function random(lower/*: number*/, upper/*: number*/)/*: number*/ {
    if (lower === undefined) {
        throw new Error("'lower' is undefined in function 'random'")
    }
    if (upper === undefined) {
        throw new Error("'upper' is undefined in function 'random'")
    }
    return Math.random() * (upper - lower) + lower
}
