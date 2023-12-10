import './App.css'
import BestResults from './Results/BestResults'
import Results from './Results/Results'
import Stopwatch from './Timer/Stopwatch'
// import { deleteAllResults } from './redux/slices/stopwatchSlice'
// import Menu from './Menu/Menu'

function App() {
  // const dispatch = useDispatch()

  return (
    <div className="app">
      <header className="app-header">
        <h1>My App Header</h1>
        <input type="color" id="color" name="color" value="#3498db"></input>
      </header>
      <main className="app-main">
        <div className="app-right-column">
          <Stopwatch />
          <footer className="app-footer">
            <Results />
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
