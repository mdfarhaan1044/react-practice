import './App.css'
import Counter from './components/Counter'
import BgChange from './components/BgChange'

// This is the App component. The componenet should be always start with uppercase
function App() {
  // This is the return statement

  return (

    // In the return statement we can write html inside javascript. And we can only return one element so either we can use div or fragment , Fragment is empty element <> </> we can also use div but it will add an extra element to the DOM so its better to use React Fragment
    <div>
      {/* 1.Counter App <Counter/> */}
      {/* 2. Background Change App <BgChange /> */}
    </div>

  )
}


// This is the export statement after export we can use this component in other files
export default App