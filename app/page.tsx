import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <Container maxWidth="sm" sx={{textAlign: 'center', marginTop: '5rem'}}>
            <Box className={inter.className}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Wara
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    The best place to share your thoughts and stories
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{marginTop: '2rem'}}>
                    Get Started
                </Button>
            </Box>
        </Container>
    );
}
