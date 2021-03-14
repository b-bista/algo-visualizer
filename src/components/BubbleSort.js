import {useState, useEffect} from 'react'
import React from 'react'

export default function BubbleSort() {
    const [data, setData] = useState([]);
    const [arrayField, setArrayField] = useState('');
    const [indices, setIndices] = useState({
        i: 0,
        j: 0,
    });

    const handleChange = (event) => {
        //controls input field
        let field = event.target.value
        setArrayField(field);

        //converts input field to array
        let array = field.replace(/\s/g, '').split(',');
        array = array.map(num => parseFloat(num));
        setData(array);
        setIndices({i:0, j:0});
    }
    
    const firstItr = () => {
        
    }
    
    const prevItr = () => {

    let arr = [...data];

    let i = indices.i;
    let j = indices.j;

    //check i
    if (i >= 0){
        if (i == 0 && j == 0) return
        
        //check j
        if (j > 0){
        //if greater, swap
        if (arr[j] > arr[j-1]) {
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            setData(arr);
        }
        setIndices({i, j:j-1})
        }
        //else reset j and increment i
        else{
        setIndices({i:i-1, j: arr.length-i})
        }
    }
    else 
        return
    }

    const nextItr = () => {

        let arr = [...data];
    
        let i = indices.i;
        let j = indices.j;
    
        //check i
        if (i < arr.length){
          
          //check j
          if (j < arr.length - i - 1){
            //if greater, swap
            if (arr[j] > arr[j+1]) {
              let temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
              setData(arr);
            }
            setIndices({i, j:j+1})
          }
          //else reset j and increment i
          else{
            setIndices({i:i+1, j: 0})
          }
        }
        else 
          return
        
    
    }

    const lastItr = () => {

    }


    return (
    <div>
        <h1>Bubble Sort</h1>
        <div>
        <form>
            <label>
            Enter values to sort (separate with commas):
            <input type="text" value={arrayField} 
            onChange={
                (e) => {
                handleChange(e);
                }} />
            </label>
            <button onClick={(e)=>{
            e.preventDefault();
            nextItr();
            }}>Next</button>
            <button onClick={(e)=>{
            e.preventDefault();
            prevItr();
            }}>Prev</button>
        </form>
        </div>
        <div>
        {
        data.map((item, idx) => {
            if (item) {
            let color = (idx === indices.j || idx === indices.j+1) ? 'green' : 'grey';
            if (idx > data.length - indices.i - 1) color = 'red';

            return <div style={{backgroundColor: color, width: '30px', marginRight: '10px', height: `${item*10}px`, float: 'left'}}>{item}</div>
            }
        })
        }
        </div>
        
    </div>
    );
}
