import {Box, Typography} from "@mui/material";
import { fetchDetailPost } from "../api";
interface Props {
    id: number
  }
  
export default async function Answer(props: Props) {
    const PostData = await fetchDetailPost(props.id)
    return (
        <Box
            margin={"auto"}
            width={"90%"}
        >
            <Typography variant={"h5"} component={"h5"} fontWeight={"bold"}>
                あなたの回答
            </Typography>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                sx={{
                    height: "180px",
                    width: "100%"
                }}
            >
                <Typography
                    variant={"h3"}
                    fontWeight={"bolder"}
                >
                    {PostData.post.post_content}
                </Typography>
            </Box>
        </Box>
    )
}
