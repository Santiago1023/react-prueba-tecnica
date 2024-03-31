import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // buena practica -> los efectos en react tengan solo una responsabilidad
  // para recuperar la cita al cargar la pagina
  //   useEffect(() => {
  // fetch(CAT_ENDPOINT_RANDOM_FACT)
  //   .then(res => res.json())
  //   .then(data => {
  //     const { fact } = data
  //     setFact(fact)
  //   })
  //   }, [])

  const handleClick = async () => {
    refreshFact()
  }
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get a new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extrated using the first three words for ${fact}`} />}
    </main>
  )
}
