import { useState,useEffect } from "react"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"

export default function ChannelCard({channelDetail}){

  return(
    <>
      <Box
        sx={{
          boxShadow: 'none',
          borderRadius: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: {xs: '356px', md: '320px'},
          height: '326px',
          margin: 'auto'
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff'
          }}>
            <CardMedia 
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: '50%',
                height: 180,
                width: 180,
                mb: 2,
                border: '1px solid #e3e3e3'
              }} 
            />
            <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle 
                sx={{
                  fontSize: 14,
                  color: 'grey',
                  ml: '5px'
                }}
              />
            </Typography>
            {/* If channel has subscribers, show the count */}
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
              </Typography>)
            }
          </CardContent>
        </Link>
      </Box>
    </>
  )
}