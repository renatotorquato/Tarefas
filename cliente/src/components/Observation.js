
import { useEffect, useState} from "react";
import Axios from "axios";
import React from "react";

function Observation () {
    const [listTask, setListTask] = useState();

    useEffect(()=>{
        Axios.get("http://localhost:3001/getData").then((response)=>{
          setListTask(response.data)
        });
      },[])


    return (
    <>
    <h2>Detalhes:</h2>
    {typeof listTask != "undefined" && listTask.map((value)=>{
        return  <div ><p key={value.cod_task}>{value.details}</p></div>

    })}
    {/* <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed commodi necessitatibus obcaecati vero quas tempore reprehenderit nemo beatae! Sit rerum harum praesentium modi aliquid ducimus molestias veniam nesciunt distinctio.</p></div> */}
    </>
    )
}

export default Observation;