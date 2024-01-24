import type { TinaCollection } from "tinacms";

export const author: TinaCollection = {
  name: "author",
  label: "Authors",
  path: "content/authors",
  format: "md",
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      isTitle: true,
      required: true,
    },
  ],
};
