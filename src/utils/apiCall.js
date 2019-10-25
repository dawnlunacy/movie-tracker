
export const fetchData = async(url)  => {
  const response = await fetch(url)
  if(response.ok) {
    const data  = await response.json()
    return data;
  } else {
    throw Error(response.statusText)
  }
}

export const loginUser = async (userInfo, url) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(url, options)
    return response
}
