import styles from '@/styles/Home.module.css'
import { Grid } from '@mui/material'
import HighlightCard from '@/components/HighlightCard'
import NFTCard from '@/components/NFTCard'
import Sidebar from '@/components/Sidebar'

import data1 from '../data/NFTCData.json'
import data2 from '../data/HCData.json'

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Creating a grid layout with two columns: a sidebar and a main section */}
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        spacing={2}
      >
        {/* Sidebar */}
        <Grid item xs={12} sm={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* Displaying highlight cards based on data from JSON file */}
            <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {data2.map((item, index) => {
                return (
                  <HighlightCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    name={item.name}
                    status={item.status}
                    price={item.price}
                    time={item.time}
                    change={item.change}
                    color={index % 3}
                  />
                )
              })}
            </Grid>
            {/* Displaying NFT cards based on data from JSON file */}
            <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {data1.map((item, index) => {
                return (
                  <NFTCard
                    key={index}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    floor={item.floor}
                    change={item.change}
                  />
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
