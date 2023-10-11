import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import ChannelDetail from './components/ChannelDetail'
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'
import Feed from './components/Feed'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          // Creating different Routes that the user can click to get to different pages
          <Route path='/' element={<Feed />}/>
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
