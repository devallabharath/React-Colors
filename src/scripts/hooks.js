import { useState } from 'react'

const useRefresh = () => {
  const [State, setState] = useState(false)
  const Refresh = () => { setState(!State) }
  return Refresh
}

export { useRefresh }
