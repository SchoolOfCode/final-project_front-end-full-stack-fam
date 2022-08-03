import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import './style.css';

export default function CircularDeterminate(score) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= score ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, [score]);

  return (
    <Stack className='circular-determinate' spacing={2} direction="row">
      <CircularProgress variant="determinate" value={progress} />
    </Stack>
  );
}