import { Color } from "../models/post";
// const base = "http://localhost/blog";
const podcastBase = "https://api.sirileepage.com/podcast";
const base = "https://api.sirileepage.com/blog";
// const podcastBase = "http://localhost/podcast";

export function getURL(path: string): string {
  return `${base}/${path}`;
}

export function getPodcastURL(path: string) {
  return `${podcastBase}/${path}`;
}

export function isBrightColor(color: Color): boolean {
  const { red, green, blue } = color;
  let hsp = Math.sqrt(
    0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue)
  );
  return hsp > 190;
}

export function split<T>(posts: T[]): T[][] {
  const itemPerList = 3;
  let list: T[][] = [];
  let i = 0;
  while (i < posts.length) {
    list.push(posts.slice(i, i + itemPerList));
    i += itemPerList;
  }
  return list;
}

export const drawerWidth = 0;
