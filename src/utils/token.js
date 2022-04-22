export default class Token {
  static get() {
    return localStorage.getItem('token')
  }
  static add(token) {
    localStorage.setItem('token', token)
    return true
  }
  static remove(tokenName) {
    localStorage.removeItem(tokenName)
    return true
  }
  static exist() {
    return localStorage.getItem('token') ? true : false
  }
}
