import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Eth from "../assets/eth.png"

const HighlightCard = ({img, title, name, status, price, change, time, color}) => {
  const colors1 = [
    'rgba(64, 224, 208, 0.2)',
    'rgba(255, 165, 0, 0.2)',
    'rgba(0, 255, 0, 0.2)',
  ]

  const colors2 = ['turquoise', 'orange', '#44FFC8']

  return (
    <div>
      <Box sx={{ minWidth: '193px', margin: '10px' }}>
        <Paper
          elevation={3}
          sx={{
            background: `linear-gradient(to bottom right, ${colors1[color]} 0%, black 60%, black 100%)`,
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '16px',
          }}
        >
          <Box>
            <div style={{ display: 'flex' }}>
              <Image src={img} alt='My Image' width={40} height={40} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  color='white'
                  gutterBottom
                  fontSize={13}
                  sx={{ paddingLeft: '10px' }}
                >
                  {title.length<20 ? title: `${title.substring(0, 11)}...`}
                </Typography>
                <Typography
                  color={colors2[color]}
                  variant='body2'
                  fontSize={12}
                  sx={{ marginLeft: '20px' }}
                >
                  {status}
                </Typography>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '25px',
              }}
            >
              <Typography color='grey' fontWeight={600} fontSize={12}>
                {name}
              </Typography>
              <div style={{ display: 'flex' }}>
                <Typography
                  color='white'
                  variant='body2'
                  fontSize={12}
                  sx={{ paddingRight: '5px' }}
                >
                  {price}
                </Typography>
                <Image
                  src={Eth}
                  alt='Eth'
                  height={12}
                  style={{ marginTop: '2px' }}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <Typography color='grey' variant='body2' fontSize={12}>
                {time}
              </Typography>

              <Typography
                variant='body2'
                color='#19ED7B'
                fontSize={12}
                sx={{ paddingLeft: '5px' }}
              >
                {change}
              </Typography>
            </div>
          </Box>
        </Paper>
      </Box>
    </div>
  )
}

export default HighlightCard