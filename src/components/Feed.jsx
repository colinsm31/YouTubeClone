import { useState,useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { BorderRight } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

export default function Feed(){

  return(
    <>
      <Stack
        // Set direction of stack for normal devices and medium deivces
        sx={{flexDirection: {sx: 'column', md: 'row'}}}  
      >
        <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}} }>
          <Sidebar />

          {/* Simple component that is used for text elements instead of p-tags and headings */}
          <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
            Copyright 2023 crmeyer
          </Typography>
        </Box>

        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
          {/* Make the option picked show as a bolded h4 heading  */}
          <Typography variant="h4" fontWeight='bold' mb={2} sx={{color: 'white'}}>
            New <span style={{
              color: '#f31503'
            }}>
              Videos
            </span>
          </Typography>
          <Videos videos={[]} />
        </Box>
      </Stack>
    </>
  )
}