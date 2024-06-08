import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
}

export default function Title(props: Props) {
  return (
    <Box height={"25vh"} my={"50px"}>
      <Typography variant={"h5"} component={"h5"} fontWeight={"bold"}>
        お題
      </Typography>
      <Box
        bgcolor={"gray"}
        mt={"2px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        sx={{
          height: "180px",
          width: "100%",
        }}
      >
        <Box
          component={"img"}
          width={"100%"}
          height={"150%"}
          src={"https://i.imgur.com/qfbXMYL.jpeg"}
        ></Box>
      </Box>
    </Box>
  );
}
