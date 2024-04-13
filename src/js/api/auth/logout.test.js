import { logout } from './logout.js'
import MockLocalStorage from '../../mocks/MockLocalStorage.js'

describe('the logout function', () => {
  it('removes token from storage', () => {
    // Create an instance of MockLocalStorage and assign it to the global localStorage
    const mockStorage = new MockLocalStorage()
    global.localStorage = mockStorage
    // Add a token to mock localStorage to simulate a logged-in state
    mockStorage.setItem('token', '12345')
    // Call the logout function
    logout()
    // Check that 'token' has been removed from storage
    expect(global.localStorage.getItem('token')).toBeNull()
  })
})
