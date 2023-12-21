import { useState } from 'react'

const useRefresh = () => {
  const [state, setstate] = useState(false)
  const refresh = () => setstate(!state)

  return refresh
}

export { useRefresh }
