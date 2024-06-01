import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Nikhil Swami</h1>
      <Card username = "Nikhil" btnText = "Click me"></Card>
      <Card username = "Harshu"></Card>
    </>
  )
}

export default App
