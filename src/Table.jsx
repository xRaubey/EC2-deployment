import {useEffect, useState} from 'react'
function Table({setCount}){

    useEffect(() => {
        console.log('aa');

        return ()=>{
            //alert('1')
        }
    });

    const [list,setList] = useState([{a:'aa',b:'bb'}])
    function handleAdd(){
        setList((prevState)=> {
            // prevState.push({a: 'cc', b: 'dd'})
            return [...prevState,{a: 'cc', b: 'dd'}]
        })

    }

    function handleDelete(){
        setList((prevState)=> {
            return prevState.filter((d,i)=>{
                if(i!=list.length-1){
                    return true
                }
                else{
                    return  false;
                }
            })
        })

        console.log(list)
    }

    function showTd(){
        return list.map((d,i)=>{
            return (
                <tr key={i}>
                    <td key={i+'-a'}>{d.a}</td>
                    <td key={i+'-b'}>{d.b}</td>
                </tr>
            )
        })
    }
    return (
        <>
            <table>
                <thead>
                <tr key={'head'}>
                    <th>a</th>
                    <th>b</th>
                </tr>
                </thead>
                <tbody>
                {showTd()}
                </tbody>
            </table>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleDelete}>Delete</button>


            <button onClick={()=>{
                setCount(prevState => {
                    return prevState+1
                })
            }}>Add Count</button>

        </>

    )
}

export default Table