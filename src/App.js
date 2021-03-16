import {useState} from 'react'
import MergeSort from './components/MergeSort'
import BubbleSort from './components/BubbleSort'

function App() {

  const [count, setCount] = useState(0);
  const [arrayField, setArrayField] = useState('');
  const [algo, setAlgo] = useState('bubbleSort');

  const handleAlgoChange = (event) => {
    setAlgo(event.target.value);
  }

  const handleArrayFieldChange = (event) => {
    setArrayField(event.target.value);
  }

  const components = {
    'bubbleSort': {
      component: BubbleSort,
      name: 'Bubble Sort'
    },
    'mergeSort': {
      component: MergeSort,
      name: 'Merge Sort'
    }
  }

  const CurrComponent = components[algo].component;

  return (
    <div className="App" style={{textAlign: 'center', width: 'auto'}}>
       {
         <form>
         <label>
           Pick your Algorithm:
           <select value={algo} onChange={handleAlgoChange}>
             <option value="bubbleSort">BubbleSort</option>
             <option value="quickSort">QuickSort</option>
             <option value="mergeSort">MergeSort</option>
             <option value="selectionSort">SelectionSort</option>
           </select>
         </label>
       </form>
       }
       <h1>Bubble Sort</h1>
       <form>
            <label>
            Enter values to sort (separate with commas):
            <input type="text" value={arrayField} 
            onChange={ e => handleArrayFieldChange(e)}/>
            </label>
        </form>
       < CurrComponent 
       arrayField={arrayField}
       />
    </div>
  )
  
}


export default App;
