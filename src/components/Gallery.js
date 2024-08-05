import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import "./Gallery.css"
export default function Gallery() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');

  const getCols = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 3;
  };

  return (
    <Container fixed>
      <h1 >Galleries 🐒</h1>
      <Box sx={{ width: '100%', height: '80vh', overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={getCols()} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
}

const itemData = [
  {
    img: 'https://miro.medium.com/v2/resize:fit:1024/1*VQzQkAY3rI9vbzSLcSfYrQ.jpeg',
    title: 'Bed',
  },
  {
    img: './slider2_7.png',
    title: 'Books',
  },
  {
    img: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b6749004-df4e-4195-bf51-1be9af30b09d/width=450/4839864.jpeg',
    title: 'Sink',
  },
  {
    img: './slider2_1.png',
    title: 'Kitchen',
  },
  {
    img: 'https://aiartshop.com/cdn/shop/files/the-monkey-ai-artwork-214.webp?v=1711983522',
    title: 'Blinds',
  },
  {
    img: './slider2_4.png',
    title: 'Chairs',
  },
  {
    img: 'https://i.etsystatic.com/39751258/r/il/675098/4627052500/il_570xN.4627052500_dvz2.jpg',
    title: 'Laptop',
  },
  {
    img: './slider2_8.png',
    title: 'Doors',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/035/166/233/large_2x/ai-generated-monkey-cartoon-wallpaper-photo.jpg',
    title: 'Storage',
  },
  {
    img: './slider2_9.png',
    title: 'Coffee',
  },
  {
    img: 'https://i.etsystatic.com/39751258/r/il/675098/4627052500/il_570xN.4627052500_dvz2.jpg',
    title: 'Laptop',
  },
  {
    img: './slider2_3.png',
    title: 'Coffee table',
  },
  {
    img: 'https://i.etsystatic.com/39751258/r/il/675098/4627052500/il_570xN.4627052500_dvz2.jpg',
    title: 'Laptop',
  },
  {
    img: './slider2_2.png',
    title: 'Candle',
  },
];
