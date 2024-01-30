import { TinaCollection } from "tinacms";
import { post } from "./collection/post";
import { review } from "./collection/review"
import { author } from "./collection/author";

export const collections: TinaCollection[] = [post, review, author];
