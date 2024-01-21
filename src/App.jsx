import React from 'react'
import './App.css'
import MoviList from './Cinama/MoviList'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import { MovieContext } from './context'
function App() {
  return (
    <>
      <MovieContext.Provider>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MoviList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  )
}

export default App
