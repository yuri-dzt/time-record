interface FetchApiParams {
  url: string
  method: string
  body?: Record<string, unknown> | FormData
  tags?: string[]
}

export const fetchAPI = async (props: FetchApiParams) => {
  const headers = new Headers()

  if (!(props.body instanceof FormData)) {
    headers.append('Content-Type', 'application/json')
  }

  const response = await fetch(
    `http://localhost:3333${props.url}`,
    {
      method: props.method,
      headers,
      cache: 'no-cache',
      body:
        props.body instanceof FormData
          ? props.body
          : JSON.stringify(props.body),
    },
  )

  let data = null
  try {
    data = await response.json()
  } catch (error) {
    if (
      error instanceof SyntaxError &&
      error.message.includes('Unexpected end of JSON input')
    ) {
      return null
    } else {
      return error
    }
  }

  if (!response.ok) {
    console.log(
      `Error on route: ${props.method} ${props.url} with status: ${response.status}`,
    )
    return data?.message
  }

  return data || null
}
