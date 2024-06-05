import {Box, Typography} from "@mui/material";

export default function Answer() {
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
                    火星婦のミタ
                </Typography>
            </Box>
        </Box>
    )
}
