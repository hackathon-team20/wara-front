import { Box, Container, Typography } from "@mui/material";
import Title from "@/app/components/Title";
import PostForm from "@/app/posts/PostForm";
import CountDownTimer from "../components/CountDownTimer";

export default function PostPage() {
  return (
    <Container
      component={"main"}
      maxWidth={false}
      disableGutters
      sx={{
        marginTop: "15px",
      }}
    >
      <CountDownTimer createdAt={new Date()} />
      <Box my={"10px"} textAlign={"center"}>
        <Typography variant={"h3"} fontWeight={"bolder"}>
          投稿する
        </Typography>
      </Box>
      <Title title={"3023年の流行語対象は？"} />
      <PostForm />
    </Container>
  );
}
