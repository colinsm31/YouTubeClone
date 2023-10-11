import { useState,useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";


export default function SearchFeed(){
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    // Result of a promise -> asynchronous function; must chajin a .then function with it
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  return(
    <>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        {/* Make the option picked show as a bolded h4 heading  */}
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color: 'white'}}>
          Search results for:  
          <span style={{
            color: '#f31503'
          }}>
            {searchTerm} Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </>
  )
}