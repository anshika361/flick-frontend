import React from "react"
import { Login } from "./containers"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path = "/" element = {<Login/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
