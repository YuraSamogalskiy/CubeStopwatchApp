import './App.css'
import Results from './Results/Results'
import Scramble from './Scramble/Scramble'
import Stopwatch from './Timer/Stopwatch'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book library app</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <Results />
        </div>
        <div className="app-right-column">
          <Stopwatch />
        </div>
      </main>
    </div>
  )
}

export default App
