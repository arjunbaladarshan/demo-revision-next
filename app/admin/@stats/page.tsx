import React from 'react'
import wait from 'wait'

async function StatsParallelPage() {
  await wait(5000)
  return (
    <div>StatsParallelPage</div>
  )
}

export default StatsParallelPage