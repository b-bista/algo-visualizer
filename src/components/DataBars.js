import React from 'react'

export default function DataBars(props) {
    const {data, indices} = props;

    return (
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
    )
}
