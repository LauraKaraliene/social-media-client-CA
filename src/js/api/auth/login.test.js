import { login } from './login.js'
import MockLocalStorage from '../../mocks/MockLocalStorage.js'

const ACCESS_TOKEN = '12345'

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({ accessToken: ACCESS_TOKEN }),
})

describe('the login function', () => {
  it('stores a token when provided with valid credentials', async () => {
    global.fetch = mockFetchSuccess
    const mockStorage = new MockLocalStorage()
    global.localStorage = mockStorage
    await login('email', 'password')
    const storedToken = JSON.parse(global.localStorage.getItem('token'))
    expect(storedToken).toEqual(ACCESS_TOKEN)
  })
})
