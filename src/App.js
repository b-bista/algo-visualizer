import {useState} from 'react'
import MergeSort from './components/MergeSort'
import BubbleSort from './components/BubbleSort'

function App() {

  const [data, setData] = useState([]);
  const [arrayField, setArrayField] = useState('');
  const [currAlgo, setCurrAlgo] = useState('bubbleSort');
  const [indices, setIndices] = useState({
    i: 0,
    j: 0
  });

  const handleAlgoChange = (event) => {
    setCurrAlgo(event.target.value);
    setData([]);
    setIndices({i: 0, j: 0});
  }

  const handleArrayFieldChange = (event) => {
    let field = event.target.value
    setArrayField(field);

    let convertedArray = stringToArrayNum(field);
    console.log(convertedArray);
    setData(convertedArray);
    setIndices({i:0, j:0});
  }
  
  const stringToArrayNum = (field) => {
    //also removes white space
    let array = field.replace(/\s/g, '').split(',');
    array = array.map(num => parseFloat(num));
    return array;
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

  const CurrComponent = components[currAlgo].component;
  const componentOptions = Object.keys(components).map((algo)=>{
    return (<option value={algo}>{components[algo].name}</option>)
  })



  return (
    <div className="App" style={{textAlign: 'center', width: 'auto'}}>
       {
         <form>
         <label>
           Pick your Algorithm:
           <select value={currAlgo} onChange={handleAlgoChange}>
             {
              componentOptions
             }
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
       data={data}
       indices={indices}
       setIndices={setIndices}
       setData={setData}
       />
    </div>
  )
  
}


export default App;
