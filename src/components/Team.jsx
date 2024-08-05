import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import "./Team.css"
export default function Team() {
  return (
    <Container fixed> 
 <h1>Our Team👩‍💻</h1>
<div className='team'> 

   
    <Card sx={{ maxWidth: 445 }} >
      <CardMedia
        sx={{ height: 240 }}
        image="https://images.nightcafe.studio/jobs/2kBtEe4M2AcOJZ0tg2o1/2kBtEe4M2AcOJZ0tg2o1--1--bl5sq.jpg?tr=w-1600,c-at_max"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" style={{color:"purple",fontWeight:"bold"}}>Share</Button>
      <Button size="small"  style={{color:"purple",fontWeight:"bold"}}>Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 445 }} >
      <CardMedia
        sx={{ height: 240 }}
        image="https://img.freepik.com/premium-photo/monkey-smoking-cigarette-suit_769074-819.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" style={{color:"purple",fontWeight:"bold"}}>Share</Button>
      <Button size="small"  style={{color:"purple",fontWeight:"bold"}}>Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 445 }} >
      <CardMedia
        sx={{ height: 240 }}
        image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56726714-49dc-4b74-b56f-b64257c9107d/d3aco1k-ecb6d24a-d857-4a25-ba96-712eebe679fa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2NzI2NzE0LTQ5ZGMtNGI3NC1iNTZmLWI2NDI1N2M5MTA3ZFwvZDNhY28xay1lY2I2ZDI0YS1kODU3LTRhMjUtYmE5Ni03MTJlZWJlNjc5ZmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uCcGB5__OH2_VWNUU8HnMdEFS6ZveTuo6DviZqNzvZQ"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color:"purple",fontWeight:"bold"}}>Share</Button>
        <Button size="small"  style={{color:"purple",fontWeight:"bold"}}>Learn More</Button>
      </CardActions>
    </Card>
</div>

    </Container>
  );
}
