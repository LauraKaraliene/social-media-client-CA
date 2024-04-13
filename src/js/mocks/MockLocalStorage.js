export default class MockLocalStorage {
  constructor() {
    this.storage = {}
  }
  getItem(key) {
    return this.storage[key] || null
  }
  setItem(key, value) {
    this.storage[key] = value.toString()
  }
  removeItem(key) {
    delete this.storage[key]
  }
  clear() {
    this.storage = {}
  }
  key(index) {
    return Object.keys(this.storage)[index] || null
  }
  get length() {
    return Object.keys(this.storage).length
  }
}
