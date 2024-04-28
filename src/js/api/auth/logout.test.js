import { logout } from './logout.js'
import MockLocalStorage from '../../mocks/MockLocalStorage.js'

describe('the logout function', () => {
  it('removes token from storage', () => {
    const mockStorage = new MockLocalStorage()
    global.localStorage = mockStorage
    mockStorage.setItem('token', '12345')
    logout()
    expect(global.localStorage.getItem('token')).toBeNull()
  })
})
