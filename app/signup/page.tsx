"use client"

import {Box, Container, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";

export default function SignUpPage() {
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    /**
     * emailの重複チェックを行う
     */
    const handleSubmitEmail = () => {
        console.log(`email ${email}`)
    }

    /**
     * sign up処理を行う
     */
    const handleSignUp = () => {
        console.log("登録処理をする")
    }

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

                    {step === 1 && (
                        <Box width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"}
                             alignItems={"center"}>
                            <Typography variant="h6" component="h2" py={2} fontWeight={"bolder"}>
                                アカウントを作成する
                            </Typography>
                            <Typography pb={2}>
                                メールアドレスを入力してください
                            </Typography>
                            <TextField
                                fullWidth
                                label="メールアドレス"
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    mt: 3,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gray',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'gray',
                                    },
                                    '& .Mui-focused .MuiInputLabel-root': {
                                        color: 'gray',
                                    },
                                }}
                            />
                        </Box>
                    )}
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
                        onClick={handleSubmitEmail}
                    >
                        Check Email
                    </Button>
                </Box>
            </Container>
        </main>
    )
}
