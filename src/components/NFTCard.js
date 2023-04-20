import {
  Box,
  Paper,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Eth from '../assets/eth.png'

const NFTCard = ({ img, name, price, floor, change }) => {
  return (
    <div>
      <Box sx={{ minWidth: '193px', margin: '10px' }}>
        <Paper
          elevation={3}
          sx={{ backgroundColor: 'black', borderRadius: '10px' }}
        >
          <Box>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Image
                src={img}
                alt='My Image'
                width={193}
                height={190}
                style={{ padding: '3px' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 12,
                  right: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  borderRadius: '16px',
                }}
              >
                <Typography fontSize={13} color='white'>
                  3 Months
                </Typography>
              </div>
            </div>

            <Typography color='white' gutterBottom sx={{ paddingLeft: '10px' }}>
              {name}
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: '10px',
                marginRight: '10px',
              }}
            >
              <Typography color='grey' variant='body2' fontSize={12}>
                Bought
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
                marginLeft: '10px',
                marginRight: '10px',
                marginTop: '10px',
                paddingBottom: '10px',
              }}
            >
              <Typography color='grey' variant='body2' fontSize={12}>
                Floor
              </Typography>
              <div style={{ display: 'flex' }}>
                <Typography
                  color='white'
                  variant='body2'
                  fontSize={12}
                  sx={{ paddingRight: '5px' }}
                >
                  {floor}
                </Typography>
                <Image
                  src={Eth}
                  alt='Eth'
                  height={12}
                  style={{ marginTop: '2px' }}
                />
                <Typography
                  variant='body2'
                  color='#19ED7B'
                  fontSize={12}
                  sx={{ paddingLeft: '5px' }}
                >
                  {change}
                </Typography>
              </div>
            </div>
          </Box>
        </Paper>
      </Box>
    </div>
  )
}

export default NFTCard
