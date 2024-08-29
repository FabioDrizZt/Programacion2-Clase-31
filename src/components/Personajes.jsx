import useFetch from '../hooks/useFetch'

export default function Personajes() {
  const [data, error] = useFetch('https://rickandmortyapi.com/api/character')
  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <>
      <h2>Personajes</h2>
      <ul>
        {data.results &&
          data.results.map((personaje) => (
            <li key={personaje?.id}>
              <p>{personaje?.name}</p>
              <img src={personaje?.image} />
            </li>
          ))}
      </ul>
    </>
  )
}
