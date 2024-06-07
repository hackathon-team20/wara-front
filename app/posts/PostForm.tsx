import {Box, Button, TextareaAutosize, Typography} from "@mui/material";

interface Props {
    topicId: string
}

export default function PostForm() {
    return (
        <Box
            margin={"auto"}
            width={"90%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
        >
            <Typography
                variant={"h5"}
                mb={"15px"}
                fontWeight={"bold"}
                width={"100%"}
            >
                あなたの回答
            </Typography>
            <TextareaAutosize
                placeholder="回答を入力してください"
                minRows={"5"}
                style={{
                    width: "100%",
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid gray",
                    borderRadius: "10px",
                    overflowY: "auto"
                }}
            />
            <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"flex-end"}
                py={"5px"}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    style={{
                        marginTop: "10px",
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: "10px 25px",
                        fontSize: "16px"
                    }}
                >
                    投稿
                </Button>
            </Box>
        </Box>
    )
}
