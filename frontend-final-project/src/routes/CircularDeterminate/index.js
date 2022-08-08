import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme , ThemeProvider } from '@mui/material/styles';

// no comment


const theme = createTheme({ palette: {
    primary: { main : "#F1B728"},

   } })



export default function CircularDeterminate({percentageState}) {

  const [progress, setProgress] = React.useState(0);


  React.useEffect(() => {
        const timer = setTimeout(() => {
        setProgress((prevProgress) => (prevProgress >= percentageState ? 0 : prevProgress + percentageState));
        }, 600);

        return () => {
        clearTimeout(timer);
        };
    }, [percentageState]);



  return (
    
    <ThemeProvider theme={theme}>
    <Stack className='circular-determinate' spacing={2} direction="row">
      
      <CircularProgress variant="determinate" value={progress} 
        style={{position: 'relative', zIndex: '1'}}
      />
    
    </Stack>
    </ThemeProvider>

  );
}
