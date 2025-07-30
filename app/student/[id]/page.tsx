import React from 'react'

async function DetailStudent({params}:{params:Promise<{id:string}>}) {
  const {id} = await params;
  return (
    <div>DetailStudent of rollNo = {id}</div>
  )
}

export default DetailStudent