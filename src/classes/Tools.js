export default class Tools {
  sumDigits (number) {
    return number.toString().split('').map(Number).reduce((a, b) => a + b, 0)
  }
}