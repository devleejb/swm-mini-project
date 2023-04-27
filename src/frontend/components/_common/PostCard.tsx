import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";

type PostCardProps = {
  data: {
    name: string;
    techstack: string;
    mbti: string;
    description: string;
  };
};

const PostCard: FunctionComponent<PostCardProps> = (props) => {
  const { data } = props;

  return (
    <Card
      sx={{
        border: 1,
        borderColor: "#2079FF",
        borderRadius: 5,
      }}
    >
      <CardActionArea
        sx={{
          height: 400,
        }}
      >
        <CardContent
          sx={{
            height: 1,
            p: 4,
          }}
        >
          <Typography variant="h4" noWrap sx={{ fontWeight: "bold" }}>
            {data.name}
          </Typography>
          <Stack sx={{ my: 4 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom={false}
            >
              {data.techstack}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {data.mbti}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              mt: 1,
            }}
          >
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
