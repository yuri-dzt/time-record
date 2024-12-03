import { Situation } from "../../types/user"
import { fetchAPI } from "../fetch"

interface CreateUserProps {
  name: string
  email: string
  password: string
  situation: Situation
  company_id: string
}

interface UpdateUserProps {
  id: string
  name: string
  email: string
  password: string
  situation: Situation
}

export const getAllUsers = async () => {
  const response = await fetchAPI({
    method: 'GET',
    url: '/users',
  });

  return response
}

export const getUsersById = async (id: string) => {
  const response = await fetchAPI({
    method: 'GET',
    url: `/users/${id}`,
  })

  return response
}

export const getUsersByCompanyId = async (companyId: string) => {
  const response = await fetchAPI({
    method: 'GET',
    url: `/users/${companyId}`,
  })

  return response
}

export const createUser = async (props: CreateUserProps) => {
  const response = await fetchAPI({
    method: 'POST',
    url: '/users',
    body: {
      name: props.name,
      email: props.email,
      password: props.password,
      situation: props.situation,
      company_id: props.company_id
    }
  })

  return response
}

export const updateUser = async (props: UpdateUserProps) => {
  const response = await fetchAPI({
    method: 'PUT',
    url: `/users/${props.id}`,
    body: {
      name: props.name,
      email: props.email,
      password: props.password,
      situation: props.situation
    }
  })

  return response
}

export const deleteUser = async (id: string) => {
  const response = await fetchAPI({
    method: 'DELETE',
    url: `/users/${id}`,
  })

  return response
}

export const Login = async (email: string, password: string) => {
  const response = await fetchAPI({
    method: 'POST',
    url: `/users/auth`,
    body: {
      email,
      password
    }
  })

  return response
}