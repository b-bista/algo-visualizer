import {useState} from 'react'
import BubbleSort from './components/BubbleSort'

function App() {
  const [algo, setAlgo] = useState('bubbleSort');

  const handleChange = (event) => {
    setAlgo(event.target.value);
  }

  const components = {
    'bubbleSort': BubbleSort
  }

  const CurrComponent = components[algo];

  return (
    <div className="App" style={{textAlign: 'center', width: 'auto'}}>
       {
         <form>
         <label>
           Pick your Algorithm:
           <select value={algo} onChange={handleChange}>
             <option value="bubbleSort">BubbleSort</option>
             <option value="quickSort">QuickSort</option>
             <option value="mergeSort">MergeSort</option>
             <option value="selectionSort">SelectionSort</option>
           </select>
         </label>
       </form>
       }
       < CurrComponent />
    </div>
  )
  
}

export default App;
