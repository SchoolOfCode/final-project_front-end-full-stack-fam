import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme , ThemeProvider } from '@mui/material/styles';

// comment
const theme = createTheme({ palette: {
    primary: { main : "#F1B728"},

   } })



export default function CircularDeterminate() {

  const [progress, setProgress] = React.useState(0);

    const percentage = 70;

  React.useEffect(() => {
        const timer = setTimeout(() => {
        setProgress((prevProgress) => (prevProgress >= percentage ? 0 : prevProgress + percentage));
        }, 600);

        return () => {
        clearTimeout(timer);
        };
    }, []);



  return (
    
    <ThemeProvider theme={theme}>
    <Stack className='circular-determinate' spacing={2} direction="row">
      
      <CircularProgress variant="determinate" value={progress} />
    
    </Stack>
    </ThemeProvider>

  );
}