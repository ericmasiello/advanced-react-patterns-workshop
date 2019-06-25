import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import { MenuProvider } from './components/Menu'
import './App.scss'

function Index() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Contact() {
  return <h2>Contact</h2>
}

function Featured() {
  return <h2>Featured</h2>
}

function App() {
  return (
    <MenuProvider>
      <Router>
        <div className="app">
          <Header />
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
          <Route path="/featured/" component={Featured} />
        </div>
      </Router>
    </MenuProvider>
  )
}

export default App
