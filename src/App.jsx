import './App.css'
import Counter from './components/Counter'
import BgChange from './components/BgChange'
import PasswordGenerator from './components/PasswordGenerator'

// This is the App component. The componenet should be always start with uppercase
function App() {
  // This is the return statement

  return (

    // In the return statement we can write html inside javascript. And we can only return one element so either we can use div or fragment , Fragment is empty element <> </> we can also use div but it will add an extra element to the DOM so its better to use React Fragment
    <div className='divide-y divide-gray-500'>
      <h1 className="text-2xl font-bold text-center">React Practice</h1>
      {/* 1.Counter App <Counter/> */} <Counter />
      {/* 2. Background Change App <BgChange /> */} <BgChange />
      {/* 3. Password Generator App <PasswordGenerator /> */} <PasswordGenerator />
    </div>

  )
}


// This is the export statement after export we can use this component in other files
export default App