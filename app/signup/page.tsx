"use client"

import {Box, Container, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import TextForm from "@/app/components/TextForm";

export default function SignUpPage() {
    const [step, setStep] = useState(1)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    /**
     * emailの重複チェックを行う
     * 重複してない -> step2: 名前とパスワードの入力画面
     * 重複してる -> そのままで新規パスワードを入力してもらう
     */
    const handleSubmitEmail = () => {
        console.log(`email ${email}`)
        setStep(2)
    }

    /**
     * sign up処理を行う
     */
    const handleSignUp = () => {
        console.log("登録処理をする")
        console.log(`名前: ${name}`)
        console.log(`パスワード: ${password}`)
    }

    /**
     * ステップ1で表示されるメールアドレスフォーム
     */
    const emailForm = () => {
        return (
            <>
                <Typography variant="h6" component="h2" py={2} fontWeight={"bolder"}>
                    アカウントを作成する
                </Typography>
                <Typography pb={2}>
                    メールアドレスを入力してください
                </Typography>
                <TextForm label={"メールアドレス"} onChange={setEmail} type={"email"}/>
            </>
        )
    }

    /**
     * ステップ2で表示されるフォーム
     */
    const signUpForm = () => {
        return (
            <>
                <Typography variant="h6" component="h2" py={2} fontWeight={"bolder"}>
                    続ける
                </Typography>
                <Typography pb={2}>
                    名前とパスワードを入力してください
                </Typography>
                <TextForm label={"名前"} onChange={setName} type={"text"}/>
                <TextForm label={"パスワード"} onChange={setPassword} type={"password"}/>
            </>
        )
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
                    <Box width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"}
                         alignItems={"center"}>
                        {step === 1 && (
                            emailForm()
                        )}
                        {step === 2 && (
                            signUpForm()
                        )}
                    </Box>
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
                        onClick={step === 1 ? handleSubmitEmail : handleSignUp}
                    >
                        {step === 1 ? "Check Email" : "Sign Up"}
                    </Button>
                </Box>
            </Container>
        </main>
    )
}
