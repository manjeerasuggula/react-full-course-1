import React from 'react'

const intitalState=[{
  firstName:"emma",
  lastName:"watson",
  email:"emma@gmail.com"
},
{
  firstName:"manjeera",
  lastName:"lakshmi",
  email:"manjeeralakshmi@gmail.com"
}
]

export const MainDataContext=React.createContext();
export const MainDataContextProvider=({children})=>{
  return(
    <MainDataContext.Provider value={intitalState}>{children}</MainDataContext.Provider>
  )
}