import './App.css'
import BestResults from './Results/BestResults'
import Results from './Results/Results'
import Stopwatch from './Timer/Stopwatch'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>My App Header</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <h1>Statistic</h1>
          <Results />
          <h1>Statistic</h1>
        </div>
        <div className="app-right-column">
          <Stopwatch />
          <footer className="app-footer">
            <BestResults />
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App

//TODO рефактор header
//TODO move all result--scroll in other components
