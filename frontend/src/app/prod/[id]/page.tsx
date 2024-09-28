import Test from '@/components/Test'
import React from 'react'

const Prod = ({params}:any) => {
    console.log(params)
  return (
    <div>Prod {params.id}
    <Test />
    </div>
  )
}

export default Prod