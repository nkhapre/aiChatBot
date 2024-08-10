'use client'
import { Grid, Paper} from '@mui/material'


function Skeleton() {
    return(
        <Grid container spacing={2} style={{ height: '100vh', padding: '10px' }}>
        <Grid item xs={5}>
          <Grid container direction="column" style={{ height: '100%' }}>
            <Grid item style={{ flex: 1 }}>
              <Paper style={{ height: '100%' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Paper style={{ height: '100%' }} />
        </Grid>
      </Grid>
    )
}

export {Skeleton}