import {Box, Container, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";

export default function SignUpPage() {
    return (
        <main>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        my: 20,
                        px: 2,
                    }}
                >
                    <Typography variant="h3" component="h3" pb={15} fontWeight={"bold"}>
                        アプリ名(仮)
                    </Typography>
                    <Typography variant="h6" component="h2" py={2} fontWeight={"bolder"}>
                        アカウントを作成する
                    </Typography>
                    <Typography pb={2}>
                        メールアドレスを入力してください
                    </Typography>
                    <TextField
                        fullWidth
                        label="メールアドレス"
                        sx={{
                            mt: 3,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'gray',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'gray',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'gray',
                            },
                        }}
                    />
                    <Button
                        fullWidth
                        sx={{
                            mt: 3,
                            borderRadius: '10px',
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'black',
                            },
                        }}
                    >
                        Sign up with email
                    </Button>
                </Box>
            </Container>
        </main>
    )
}
