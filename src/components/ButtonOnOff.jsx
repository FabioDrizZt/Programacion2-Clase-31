import useToggle from '../hooks/useToggle'

export default function ButtonOnOff() {
  const [state, setToggle] = useToggle()

  return <button onClick={setToggle}>{state ? 'ON' : 'OFF'}</button>
}
