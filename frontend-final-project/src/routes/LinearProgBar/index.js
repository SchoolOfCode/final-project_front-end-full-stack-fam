import * as React from 'react';
import Stack from '@mui/material/Stack';
import { LinearProgress } from '@mui/material';
import { createTheme , ThemeProvider } from '@mui/material/styles';

// 10pm: THE PROGRESS BAR: SEE CountdownTimer.js FOR NOTES


const theme = createTheme({ palette: {
    primary: { main : "#F1B"},

   } })



export default function LinearProgBar({percentageState}) {

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
    <Stack className='linear-prog-bar' spacing={2} direction="row">
      
      <LinearProgress variant="determinate" value={progress} 
        style={{position: 'relative', zIndex: '1'}}
      />
    
    </Stack>
    </ThemeProvider>

  );
}