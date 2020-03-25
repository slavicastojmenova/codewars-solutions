/* Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .
 */

const balancedNum = number => {
    const sumSide = numbers => numbers.reduce((acc, number) => acc + Number(number), 0)
    const isEven = number => number % 2 === 0
    const numbers = [...String(number)]
    if (numbers.length <= 2) return 'Balanced'
    const middle = Math.floor(numbers.length / 2)
    const half = isEven(numbers.length) ? middle - 1 : middle
    const [left, right] = [numbers.slice(0, half), numbers.slice(-half)]
    return sumSide(left) === sumSide(right) ? 'Balanced' : 'Not Balanced'
}
