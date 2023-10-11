import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"


export default function VideoCard({video: {id: {videoId}, snippet}}){
  // console.log(videoId, snippet);

  return(
    <>
      <Card sx={{width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          {/* Question marks make sure there are no errors, just undefined */}
          <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
              width: 350,
              height: 180
            }}  
          />
        </Link>
        <CardContent sx={{
          backgroundColor: '#1e1e1e',
          height: 106
        }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight='bold' color='#fff'>
              {/* Set length a title is allowed to be (60 chars) */}
              {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight='bold' color='grey'>
              {/* Set length a channelName is allowed to be (60 chars) */}
              {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
              <CheckCircle 
                sx={{
                  fontSize: 12,
                  color: 'grey',
                  ml: '5px'
                }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  )
}