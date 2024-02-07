import { TinaCollection } from "tinacms";
import { post } from "./collection/post";
import { author } from "./collection/author";
import { essay } from "./collection/essay";

export const collections: TinaCollection[] = [post, author, essay];
