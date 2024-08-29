import { useState } from 'react'

export default function useToggle() {
  const [state, setState] = useState(false)
  const setToggle = () => setState((prevState) => !prevState)

  return [state, setToggle]
}
