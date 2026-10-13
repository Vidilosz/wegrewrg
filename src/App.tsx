import { useState } from 'react'
import './App.css'

type KepBetoltoProps = {
  kepUrl: string
  alt: string
}

function KepBetolto({ kepUrl, alt }: KepBetoltoProps) {
  return <img className="izzo" src={kepUrl} alt={alt} width="100" height="180" />
}

function ReactKapcsolo() {
  const [bekapcsolva, setBekapcsolva] = useState(false)

  return (
    <main className="app">
      <section className="kapcsolo">
        <h1>React kapcsoló</h1>
        <KepBetolto
          kepUrl={
            bekapcsolva
              ? 'https://www.w3schools.com/js/pic_bulbon.gif'
              : 'https://www.w3schools.com/js/pic_bulboff.gif'
          }
          alt={bekapcsolva ? 'Bekapcsolt izzó' : 'Kikapcsolt izzó'}
        />
        <button
          type="button"
          onClick={() => setBekapcsolva((elozoAllapot) => !elozoAllapot)}
          aria-pressed={bekapcsolva}
        >
          {bekapcsolva ? 'Leoltás' : 'Felkapcsolás'}
        </button>
      </section>
    </main>
  )
}

function Lablec() {
  return (
    <footer className="lablec">
      <p>&copy; 2023 React Kapcsoló. Minden jog fenntartva.</p>
    </footer>
  )
}

function App() {
  return (
    <>
      <ReactKapcsolo />
      <Lablec />
    </>
  )
}

export default App
