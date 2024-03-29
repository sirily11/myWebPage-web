/** @format */

import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getURL } from "../utils/utils";
import { Post } from "../models/post";
import { Helmet } from "react-helmet";
import axios from "axios";
import PostLayout from "./PostLayout";
import { Fade, Theme } from "@material-ui/core";
import { useParams } from "react-router";
import { Row, Col, Skeleton } from "antd";
import "./post.css";
import "draft-js/dist/Draft.css";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.up("sm")]: {
        height: "calc(100vh - 64px)",
      },
      [theme.breakpoints.down("sm")]: {
        height: "100%",
      },
    },
    loadingCard: { marginTop: 20, width: "100%" },
    innerContainer: {
      width: "100%",
      height: "100%",
    },
  })
);

function LoadingCard() {
  const classes = useStyles();
  return (
    <div className={classes.loadingCard}>
      <Row>
        <Col span={12}>
          {Array.from({ length: 5 }, (v, k) => k + 1).map((i) => (
            <Skeleton></Skeleton>
          ))}
        </Col>
        <Col span={12}>
          <Skeleton></Skeleton>
        </Col>
      </Row>
    </div>
  );
}

export default function PostDetail() {
  const [post, setPost] = useState<Post>();
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();

  React.useEffect(() => {
    const url = getURL(`post/${id}/`);
    axios
      .get(url)
      .then((res) => {
        let post: Post = res.data;
        post.settings = JSON.parse(post.settings as string);

        setPost(post);
        document.title = res.data.title;
      })
      .catch((err) => alert(`Error: ${err}`));
  }, [id]);

  return (
    <div className={classes.container}>
      <Helmet>
        <link property="apple-touch-icon" href={post?.image_url} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:image" content={post?.image_url} />
      </Helmet>
      <Fade in={post !== undefined} mountOnEnter>
        <div className={classes.innerContainer}>
          {post && <PostLayout post={post}></PostLayout>}
        </div>
      </Fade>
      <Fade in={post === undefined} unmountOnExit mountOnEnter>
        <LoadingCard></LoadingCard>
      </Fade>
    </div>
  );
}
