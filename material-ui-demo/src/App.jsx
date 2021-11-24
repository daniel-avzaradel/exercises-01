import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import useStyles from './styles'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCameraIcon className={classes.icon} />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm' >
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est, repudiandae ipsum minima aliquid exercitationem hic laborum facilis dolorum esse, tempore numquam, perspiciatis quidem nostrum explicabo sunt quas error illum.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justifyContent='center'>
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
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
               {cards.map((item, i) => {
                   return (
                       
                        <Grid item key={item} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={'https://source.unsplash.com/random'} title='Image Title' />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis a sit voluptas?
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='sm' color='primary'>View</Button>
                                    <Button size='sm' color='primary'>Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
                </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography align='center' variant='h6' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto quos rem consequuntur harum.
                </Typography>
            </footer>
        </>
    )
}

export default App
