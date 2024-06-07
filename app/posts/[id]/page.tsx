import {Box, Container, Typography} from "@mui/material";
import Title from "@/app/components/Title";
import Answer from "@/app/components/Answer";

export default function PostPage() {
    return (
        <Container component={"main"} maxWidth={false} disableGutters>
            <Box
                my={"60px"}
                textAlign={"center"}
            >
                <Typography
                    variant={"h3"}
                    fontWeight={"bolder"}
                >
                    投稿する
                </Typography>
            </Box>
            <Title title={"3023年の流行語対象は？"}/>
            <Answer/>
        </Container>
    )
}
