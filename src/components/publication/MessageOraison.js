import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import './styles/MessageOraison.css';

function MessageOraison({ post }) {
  dayjs.extend(relativeTime);

  return (
    // <Card sx={{ display: "flex", marginBottom: 5, marginTop: 5,  maxWidth: 519 }}>
    //   <CardMedia sx={{ width:200 }} image={post.user_image} component="img" alt="Profile image" />
    //   <CardContent sx={{ padding: 25 }}>
    //     <Typography variant="h5" component="div">{post.user_pseudo}</Typography>
    //     <Typography variant="body2" component="div" color="gray">{dayjs(post.created_at).fromNow()}</Typography>
    //     <Typography variant="body1" component="div">{post.text}</Typography>
    //   </CardContent>
    // </Card>
    <Card className="card-oraison" sx={{ display: "flex", width: 519, marginTop: 5 }}>
        <CardMedia
        className="card-oraison-image"
        component="img"
        sx={{ width: 151 }}
        image={post.user_image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
          {post.user_pseudo}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
          >
            {dayjs(post.created_at).fromNow()}
          </Typography>
          <Typography
            sx={{ marginTop: 2.5 }}
            variant="body1"
            component="div"
          >
            {post.text}
          </Typography>
        </CardContent>
      </Box>      
    </Card>
  );
}

export default MessageOraison;
