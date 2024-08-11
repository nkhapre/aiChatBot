'use client'
import { Editor } from "./Editor"
import { Grid, Paper, Box} from '@mui/material'
import { Chat } from './Chat'

function Skeleton() {
    return(
        <Grid container spacing={2} style={{ height: '100vh', padding: '10px' }}>
        <Grid item xs={5}>
          <Grid container direction="column" style={{ height: '100%'}}>
            <Grid item style={{ flex: 1 }}>
              <Paper style = {{height: '100%'}}><Chat /></Paper>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={7}>
          <Editor/>
          <Paper style={{ height: '100%' }} />
        </Grid>
      </Grid>
    )
}

export {Skeleton}