
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PiChart from './Components/PiCharts/PiChart'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {


  return (
    <>       
    <Navbar></Navbar>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
      <div className="my-24">
    <PiChart></PiChart>
    <Phones></Phones>
    </div>
    </>
  )
}

export default App
