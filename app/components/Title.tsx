import {Box, Typography} from "@mui/material";

interface Props {
    title: string
}

export default function Title(props: Props) {
    return (
        <Box height={"25vh"} my={"10px"}>
            <Typography variant={"h5"} component={"h5"} fontWeight={"bold"}>
                お題
            </Typography>
            <Box
                bgcolor={"gray"}
                p={"8px"} borderRadius={"4px"}
                mt={"2px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                sx={{
                    height: "180px",
                    width: "100%"
                }}
            >
                <Typography variant={"h4"} component={"h2"} color={"white"} fontWeight={"bold"}>
                    {props.title}
                </Typography>
            </Box>
        </Box>
    )
}
