import { Card, Typography } from "@mui/material";

export default function Todo(props){

    return (
    <div>
        <Card variant="outlined" sx={{maxWidth: 300}}>
            <Typography textAlign={"center"} level="h2">{props.title}</Typography>
            <Typography>{props.description}</Typography>
        </Card>
    </div>
    )
}
 