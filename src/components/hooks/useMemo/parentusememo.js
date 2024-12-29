import React, { useState } from 'react'
import Childusememo from './childusememo'

function ParentusemEMO() {
    const[greeting,setState]=useState("good morning")
  return (
    <>
    <div>
        <Childusememo greeting={greeting}/>
    </div>
    </>
  )
}

export default ParentusemEMO