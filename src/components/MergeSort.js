import React from 'react'
import DataBars from './DataBars'

export default function MergeSort({data, indices, setIndices, setData}) {

    const updateIdxMap = (array=[]) => {
        //add indices to idxMap
        let idxMap = {};

        for (let i = 0; i < array.length; i++){
            if (!(array[i] in idxMap))
                idxMap[array[i]] = i;
        }

        return idxMap;
    }

    const firstItr = () => {
        let arr = [...data];

        let i = indices.i;
        let j = indices.j;
    }
    
    const prevItr = () => {

        let arr = [...data];

        let i = indices.i;
        let j = indices.j;

        //check i
        if (i >= 0){
            if (i == 0 && j == 0) return
            
            //check j
            if (j >= 0){
                //if greater, swap
                if (arr[j] > arr[j-1] && dataIdx[arr[j]] !== j) {
                    let temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                    setData(arr);
                }
                setIndices({i, j:j-1})
            }
            //else reset j and increment i
            else
                setIndices({i:i-1, j: arr.length-i})
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
    
    const dataIdx = updateIdxMap(data)

    return (
        <div>
            <button onClick={(e)=>{
            e.preventDefault();
            nextItr();
            }}>Next</button>
            <button onClick={(e)=>{
            e.preventDefault();
            prevItr();
            }}>Prev</button>
            <DataBars data={data} indices={indices}/> 
        </div>  
    );
}
