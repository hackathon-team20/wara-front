import { Box, Typography } from "@mui/material";
interface Props {
  post_content: string | undefined;
}

export default function Answer(props: Props) {
  return (
    <Box margin={"auto"} width={"90%"}>
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
          width: "100%",
        }}
      >
        <Typography variant={"h3"} fontWeight={"bolder"}>
          {props.post_content}
        </Typography>
      </Box>
    </Box>
  );
}
