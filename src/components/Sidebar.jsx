import { useState,useEffect } from "react"
import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

export default function Sidebar({selectedCategory, setSelectedCategory}){

  return(
    <>
      <Stack
        direction='row'
        sx={{
          overflowY: 'auto',
          // Dynamically update how the sidebar looks when device gets smaller
          height: {sx: 'auto', md: '95%'},
          flexDirection: {md: 'column'}
        }}
      >
        {/* Map over the categories and instantly return the icon and name of each one */}
        {categories.map((category) => (
          <button 
            className="category-btn"
            // Now when you click on a category it changes that to be the selected one
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background: category.name === selectedCategory && '#fc1503',
              color: 'white'
            }}
            // Always give each property a key when mapping over in React
            key={category.name}
          >
            <div style={{
              color: category.name === selectedCategory ? 'white' : 'red',
              marginRight: '15px'
            }}>
              {category.icon}
            </div>
            <div style={{
              opacity: category.name === selectedCategory ? '1' : '0.8'
            }}>
              {category.name}
            </div>
          </button>
        ))}
      </Stack>
    </>
  )
}