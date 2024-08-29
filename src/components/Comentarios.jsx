import useFetch from '../hooks/useFetch'

function Comentarios() {
  const [data, error] = useFetch(
    'https://jsonplaceholder.typicode.com/comments'
  )

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <>
      <h2>Comentarios</h2>
      <ul>
        {data.map((comentario) => (
          <li key={comentario.id}>{comentario.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Comentarios
