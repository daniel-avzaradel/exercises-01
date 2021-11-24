import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function App() {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCameraIcon/>
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est, repudiandae ipsum minima aliquid exercitationem hic laborum facilis dolorum esse, tempore numquam, perspiciatis quidem nostrum explicabo sunt quas error illum.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
               
            </main>
        </>
    )
}

export default App
