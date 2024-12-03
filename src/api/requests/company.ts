import { fetchAPI } from "../fetch";

export const getAllCompanies = async () => {
  const response = await fetchAPI({
    method: 'GET',
    url: '/companies',
  });

  return response
}

export const getCompanieById = async (id: string) => {
  const response = await fetchAPI({
    method: 'GET',
    url: `/companies/${id}`,
  })

  return response
}

export const createCompany = async (name: string) => {
  const response = await fetchAPI({
    method: 'POST',
    url: '/companies',
    body: {
      name
    }
  })

  return response
}

export const updateCompany = async (id: string, name: string) => {
  const response = await fetchAPI({
    method: 'PUT',
    url: `/companies/${id}`,
    body: {
      name
    }
  })

  return response
}

export const deleteCompany = async (id: string) => {
  const response = await fetchAPI({
    method: 'DELETE',
    url: `/companies/${id}`,
  })

  return response
}