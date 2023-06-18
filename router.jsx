import React from 'react'
import HomePage from './pages/homepage'
import Libary from './pages/libary'

export default function Router() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/libary" element={<Libary />} />
    </Routes>
  )
}
