export default class Tools {
  sumDigits (number) {
    return number.toString().split('').map(Number).reduce((a, b) => a + b, 0)
  }

  randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}