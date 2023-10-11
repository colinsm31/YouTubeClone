import { useState,useEffect } from "react"
import { Stack, Box } from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

export default function Videos({videos, direction}){
  // console.log(videos);

  // Adding in loader
  if(!videos?.length){
    return 'loading...'
  }

  return(
    <>
      <Stack 
        // Check first for if there is a preferred direction -> otherwise show in rows
        direction={direction || 'row'} 
        flexWrap='wrap' 
        justifyContent='start'
        gap={2}
      >
        {videos.map((item, index) => (
          <Box key={index}>
            {/* If we have the right item.Id -> must be a videoCard */}
            {item.id.videoId && <VideoCard video={item}/>}
            {/* If we have the right item.Id.channelId -> create a ChannelCard element */}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </>
  )
}