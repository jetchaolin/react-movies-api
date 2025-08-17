import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import Home from './pages/Home.jsx'

function Index() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/movieDetails/:id" element={< MovieDetails />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Index
