import { Box, Typography } from '@mui/material'

interface Props {
  topic: string
  image: string
}

export default function Title(props: Props) {
  return (
    <Box height={'25vh'} my={'55px'}>
      <Typography variant={'h5'} component={'h5'} fontWeight={'bold'}>
        {props.topic}
      </Typography>
      <Box
        bgcolor={'gray'}
        mt={'2px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        sx={{
          height: '180px',
          width: '100%'
        }}
      >
        <Box component={'img'} width={'100%'} height={'150%'} src={props.image}></Box>
      </Box>
    </Box>
  )
}
