import { revalidatePath, revalidateTag } from 'next/cache';
import React from 'react'

async function Students() {

  function revalidateSomething(){
    "use server"
    revalidateTag("faculteis");
  }

  const dataStr = await fetch("https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties",
    {
      next:{
        tags:['faculties']
      }
    }
  )
  const data = await dataStr.json();
  return (
    <div>
      <br/>
      <button onClick={revalidateSomething}>Refresh</button>
      <br/>
      <br/>

      {data.map((fac:any)=>{
        return(
        <>
          <h1>{fac.subjectName}</h1>
        </>
        );
      })}
    </div>
  )
}

export default Students