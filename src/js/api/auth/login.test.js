import { login } from './login.js'
import * as storage from '../../storage/index.js'
import MockLocalStorage from '../../mocks/MockLocalStorage.js'

const ACCESS_TOKEN = '12345'

// create a mock fetch function that will pretend to be ther native fetch function
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({ accessToken: ACCESS_TOKEN }),
})

describe('the login function', () => {
  it('stores a token when provided with valid credentials', async () => {
    // assign this to the global fetch function
    global.fetch = mockFetchSuccess
    // assign the mock tot he global localStorage object
    global.localStorage = new MockLocalStorage()
    await login('email', 'password')
    expect(storage.load('token')).toEqual(ACCESS_TOKEN)
  })
})
