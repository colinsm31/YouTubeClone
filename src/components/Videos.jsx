import { useState,useEffect } from "react"
import { Stack, Box } from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

export default function Videos({videos}){
  // console.log(videos);

  return(
    <>
      <Stack 
        direction='row' 
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