import React from 'react'
import LeftSideBar from './LeftSideBar'
import Rightside from './Rightside'
import { Grid } from '@mui/material'

const ChatGPt = () => {
  return (
    <div className='  bg-black text-white'>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LeftSideBar />
        </Grid>
        <Grid item xs={9}>
          <Rightside />
        </Grid>

      </Grid>
    </div>
  )
}

export default ChatGPt
