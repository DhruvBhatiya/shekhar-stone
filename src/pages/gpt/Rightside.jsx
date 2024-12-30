import { Box, Grid } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
const Rightside = () => {
  return (
    <>
      <Box className="bg-[#212121] ">
        {/* Topbar  */}
        <Grid container spacing={2} className='px-3 py-2'>
          <Grid item xs={8} className='flex items-center'>
            <h1>ChatGPT</h1>
          </Grid>
          <Grid item xs={4}>
            <Box className="text-white flex gap-2 items-center justify-end" fontWeight="bold">
              <Box className="text-white flex gap-2 items-center border-2 border-white rounded-full p-2" fontWeight="bold">
                <DownloadForOfflineIcon /><h5>Share</h5>
              </Box>
              <AccountCircleIcon style={{width: '35px', height: '35px'}} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Rightside
