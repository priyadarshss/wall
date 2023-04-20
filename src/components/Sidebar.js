import { Box, CircularProgress, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Dp from '../assets/dp.svg'
import Twitter from '../assets/twitter.png'
import Web from '../assets/web.png'
import C1 from '../assets/SidebarCards/c1.svg'
import C2 from '../assets/SidebarCards/c2.svg'
import C3 from '../assets/SidebarCards/c3.svg'
import C4 from '../assets/SidebarCards/c4.svg'
import Arrow from '../assets/arrow.svg'

const Sidebar = () => {
  const acc = '0xadgfa0dfcheu47fh3h1j91cc2bcda29a6edzjkld'
  const shortAcc = `${acc.substring(0, 6)}....${acc.substring(acc.length - 5)}`
  const tags = [
    { tag: 'Art 12%', active: true },
    { tag: 'Utility 12%', active: true },
    { tag: 'PFP 12%', active: false },
    { tag: 'Metaverse 12%', active: false },
    { tag: 'Gaming 12%', active: false },
    { tag: 'PFP 12%', active: false },
    { tag: 'ens 12%', active: false },
  ]

  return (
    <div>
      <Box sx={{ minWidth: '193px', margin: '10px' }}>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '16px',
            minHeight: '600px',
            maxWidth: '290px',
          }}
        >
          <Box>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    marginTop: '15px',
                  }}
                >
                  <CircularProgress
                    variant='determinate'
                    value={66}
                    size={88}
                    style={{
                      position: 'absolute',
                      top: -5,
                      left: -3,
                      color: '#FFC148',
                    }}
                    thickness={1}
                  />
                  <Image src={Dp} alt='My Image' width={80} height={80} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 193, 72, 0.2)',
                    padding: '1px',
                    width: '45px',
                    borderRadius: '16px',
                    marginTop: '5px',
                  }}
                >
                  <Typography fontSize={13} color='#FFC148'>
                    LVL 2
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '30px',
                }}
              >
                <div>
                  <Typography
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '5px',
                    }}
                    fontSize={22}
                    color='white'
                  >
                    dingaling.eth
                  </Typography>
                  <Typography color='grey' fontSize={12}>
                    {shortAcc}
                  </Typography>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: '30px',
                marginLeft: '15px',
                marginRight: '15px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  backgroundColor: '#1A1A1A',
                  padding: '2px',
                  width: '120px',
                  borderRadius: '16px',
                  marginRight: '20px',
                }}
              >
                <Image src={Twitter} alt='twitter' />
                <Typography fontSize={13} color='grey'>
                  @dingalingts
                </Typography>
              </div>
              <div>
                <Image src={Web} alt='web' width={25} height={25} />
              </div>
            </div>
            <div
              style={{
                marginTop: '30px',
                marginLeft: '15px',
                marginRight: '15px',
              }}
            >
              <Typography fontSize={15} color='grey'>
                An Investor / Collector of #NFTs and OG enthusiast. Co-Founder
                and owner of 📦 @nftboxes
              </Typography>
            </div>
            <div
              style={{
                marginTop: '30px',
                marginLeft: '15px',
                marginRight: '15px',
              }}
            >
              <Typography
                sx={{ marginBottom: '8px' }}
                fontSize={14}
                color='grey'
              >
                Common communities (3)
              </Typography>
              <Image
                style={{ marginRight: '5px' }}
                src={C1}
                alt='My Image'
                width={40}
                height={40}
              />
              <Image
                style={{ marginLeft: '5px', marginRight: '5px' }}
                src={C2}
                alt='My Image'
                width={40}
                height={40}
              />
              <Image
                style={{ marginLeft: '5px', marginRight: '5px' }}
                src={C3}
                alt='My Image'
                width={40}
                height={40}
              />
              <Image
                style={{ marginLeft: '5px' }}
                src={C4}
                alt='My Image'
                width={40}
                height={40}
              />
            </div>
            <div
              style={{
                marginTop: '5px',
                marginLeft: '10px',
                marginTop: '25px',
              }}
            >
              {tags.map((item, index) => {
                return item.active ? (
                  <div
                    key={index}
                    style={{
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '2px',
                      borderRadius: '16px',
                      margin: '5px',
                      border: '2px solid rgba(255, 193, 72, 1)',
                      paddingLeft: '8px',
                      paddingRight: '8px',
                    }}
                  >
                    <Typography fontSize={13} fontWeight={500} color='#FFC148'>
                      {item.tag}
                    </Typography>
                  </div>
                ) : (
                  <div
                    key={index}
                    style={{
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '2px',
                      borderRadius: '16px',
                      margin: '5px',
                      border: '1px solid rgba(50, 50, 50, 0.5)',
                      paddingLeft: '8px',
                      paddingRight: '8px',
                    }}
                  >
                    <Typography fontSize={13} fontWeight={500} color='grey'>
                      {item.tag}
                    </Typography>
                  </div>
                )
              })}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1px',
                borderRadius: '20px',
                margin: '15px',
                marginTop: '25px',
                border: '1px solid white',
                padding: '5px',
                cursor: "pointer"
              }}
            >
              <Typography fontSize={18} color='white'>
                Subscribe
                <Image
                  style={{
                    marginLeft: '5px',
                    marginRight: '5px',
                    marginBottom: '-4px',
                  }}
                  src={Arrow}
                  alt='My Image'
                  width={20}
                  height={20}
                />
              </Typography>
            </div>
          </Box>
        </Paper>
      </Box>
    </div>
  )
}

export default Sidebar
