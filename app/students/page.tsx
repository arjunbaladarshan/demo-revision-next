import { revalidatePath, revalidateTag } from 'next/cache';
import React from 'react'

async function Students() {

 

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