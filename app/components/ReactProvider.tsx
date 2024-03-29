"use client"

import { store } from '@/redux'
import React from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(store)

const ReactProvider = ({children}:any) => {
  return (
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     {children}
     </PersistGate>
   </Provider>
  )
}

export default ReactProvider