import React, { createContext, useState } from 'react'
export const AkshayContext = createContext(null)

const ContextApi = ({children}) => {

  const [data, setdata] = useState(0)

  return (
    <AkshayContext.Provider value={{data, setdata}}>
{children}
    </AkshayContext.Provider>
  )
}

export default ContextApi