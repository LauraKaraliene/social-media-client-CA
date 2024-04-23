import { login } from './login.js'
import MockLocalStorage from '../../mocks/MockLocalStorage.js'

const ACCESS_TOKEN = '12345'

// Create a mock fetch function that simulates a successful network call returning an access token
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({ accessToken: ACCESS_TOKEN }),
})

describe('the login function', () => {
  it('stores a token when provided with valid credentials', async () => {
    // Assign the mock fetch function to the global fetch function
    global.fetch = mockFetchSuccess

    // Create an instance of MockLocalStorage and assign it to the global localStorage
    const mockStorage = new MockLocalStorage()
    global.localStorage = mockStorage

    // Call the login function
    await login('email', 'password')

    // Retrieve and parse the token from localStorage
    const storedToken = JSON.parse(global.localStorage.getItem('token'))

    // Check that the token is stored correctly
    expect(storedToken).toEqual(ACCESS_TOKEN)
  })
})
