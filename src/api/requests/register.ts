import { fetchAPI } from "../fetch"

export const registerPoint = async () => {
  const response = await fetchAPI({
    method: 'PUT',
    url: ``,
    body: {

    }
  })

  return response
}

export const getRegisterPoint = async () => {
  const response = await fetchAPI({
    method: 'GET',
    url: `/register`,
  })

  return response
}