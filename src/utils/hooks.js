import { useState, useEffect } from 'react'

const useRefresh = () => {
  const [State, setState] = useState(false)
  const Refresh = () => { setState(!State) }
  return Refresh
}

const useLocalStorage = (key) => {
  const [State, SetState] = useState(JSON.parse(localStorage.getItem(key))??[])

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(State))
  },[State])

  return [State, SetState]
}

export { useRefresh, useLocalStorage }
