/** @format */

import React, { Component, useState, useRef } from "react";
import PostTitle from "./PostTitle";
import { NavLink } from "react-router-dom";
import { Post, Color, Category } from "../models/post";

import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles, Paper, Grid } from "@material-ui/core";
import { convertFromRaw, EditorState, CompositeDecorator } from "draft-js";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
/// plugins
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
//@ts-ignore
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
//@ts-ignore
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createResizeablePlugin from "draft-js-resizeable-plugin";

//@ts-ignore
import "draft-js/dist/Draft.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import "draft-js-alignment-plugin/lib/plugin.css";
import "draft-js-linkify-plugin/lib/plugin.css";

import { ContentElement } from "../models/tableOfContent";
import { findLinkEntities, Link } from "./plugins/linkPlugins";
import { findImageEntities, ImageComponent } from "./plugins/imagePlugins";
import { findAudioEntities, AudioComponent } from "./plugins/audioPlugins";
import {
  findPostSettingsEntities,
  PostSettingsComponent,
} from "./plugins/postSettingsPlugins";
import { styleMap } from "./plugins/stylemap";
import { findVideoEntities, VideoComponent } from "./plugins/videoPlugins";
import {
  findInternalLinkEntities,
  InternalLinkComponent,
} from "./plugins/internalLink";
// endplugins

const resizeablePlugin = createResizeablePlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();
const alignmentPlugin = createAlignmentPlugin();
const sideToolbarPlugin = createSideToolbarPlugin({
  position: "right",
});
const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();
const decorator = composeDecorators(
  focusPlugin.decorator,
  blockDndPlugin.decorator,
  alignmentPlugin.decorator,
  resizeablePlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const { AlignmentTool } = alignmentPlugin;

interface ContainerProps {
  title: string;
  author: string;
  imageSrc?: string;
  cover_color: Color[];
  tocElement: ContentElement;
  posted_time: string;
  category: Category;
}

interface LayoutProps {
  post: Post;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      margin: 10,
      [theme.breakpoints.up("sm")]: {
        padding: "0px",
      },
      height: 200,
      padding: 0,
      backgroundColor: "pink",
    },
    container: {
      overflow: "hidden",
      overflowX: "hidden",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        overflow: "scroll",
      },
    },
    content: {
      overflowX: "hidden",
      [theme.breakpoints.down("sm")]: {
        overflow: "hidden",
        maxHeight: "100%",
        padding: "5px",
      },
      overflowY: "scroll",
      maxHeight: "calc(100vh - 69px)",
      padding: "5px",
    },
    cover: {
      height: "100vh",
      width: "100%",
    },
    titleContainer: {
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "block",
    },
    tableOfContent: {
      marginLeft: 40,
    },
  })
);

function TitleWithCover(props: ContainerProps) {
  const classes = useStyles();
  return (
    <div
      className={classes.titleContainer}
      style={{
        backgroundImage: `url(${props.imageSrc})`,
      }}
    >
      <PostTitle
        title={props.title}
        author={props.author}
        cover_color={props.cover_color}
        posted_time={props.posted_time}
        category={props.category}
      />
      <div className={classes.tableOfContent} id="toc">
        {props.tocElement.render(props.cover_color)}
      </div>
    </div>
  );
}

function PostLayout(props: LayoutProps) {
  const linkDecorator = new CompositeDecorator([
    {
      strategy: findInternalLinkEntities,
      component: InternalLinkComponent,
    },
    {
      strategy: findVideoEntities,
      component: VideoComponent,
    },
    {
      strategy: findLinkEntities,
      component: Link,
    },
    {
      strategy: findImageEntities,
      component: ImageComponent,
    },
    {
      strategy: findAudioEntities,
      component: AudioComponent,
    },
    {
      strategy: findPostSettingsEntities,
      component: PostSettingsComponent,
      props: props.post.settings,
    },
  ]);
  const classes = useStyles();
  const [height, setHeight] = useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener("resize", (ev) => {
      setHeight(window.innerHeight);
    });
  }, []);

  return (
    <Grid container className={classes.container}>
      <Grid item md={6} className={classes.cover}>
        <TitleWithCover
          category={props.post.post_category}
          tocElement={ContentElement.constructElementTree(
            JSON.parse(props.post.content)
          )}
          title={props.post.title}
          author={props.post.author.username}
          imageSrc={props.post.image_url}
          cover_color={props.post.cover_color}
          posted_time={props.post.posted_time}
        />
      </Grid>
      <Grid item md={6} className={classes.content}>
        <div style={{ zIndex: 10 }}>
          <Editor
            blockStyleFn={(block) => {
              let type = block.getType();
              if (type === "unstyled") {
                return "text";
              }
              return "";
            }}
            customStyleMap={styleMap}
            onChange={(e) => {}}
            readOnly
            editorState={EditorState.createWithContent(
              convertFromRaw(JSON.parse(props.post.content)),
              linkDecorator
            )}
            plugins={[
              inlineToolbarPlugin,
              sideToolbarPlugin,
              blockDndPlugin,
              focusPlugin,
              resizeablePlugin,
            ]}
          >
            <AlignmentTool />
          </Editor>
        </div>
      </Grid>
    </Grid>
  );
}
export default PostLayout;
