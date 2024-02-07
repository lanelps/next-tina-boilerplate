import type { TinaCollection } from "tinacms";

export const essay: TinaCollection = {
  name: "essay",
  label: "Essays",
  path: "content/essays",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
    },
    {
      type: "string",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "theme",
      label: "Theme",
      list: true,
    },
    {
      type: "string",
      name: "project",
      label: "Project",
    },
    {
      type: "boolean",
      name: "isFeatured",
      label: "Featured",
    },
    {
      type: "string",
      name: "colour",
      label: "Colour",
      list: true,
      options: [
        "yellow",
        "yellow-green",
        "teal",
        "magenta",
        "green",
        "blue",
        "orange",
      ],
      ui: {
        validate: (value) => {
          if (value.length > 1) {
            return "Only one colour can be selected";
          }
        },
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
  ui: {
    // This is an DEMO router. You can remove this to fit your site
    router: ({ document }) => `/edit/essays/${document._sys.filename}`,
  },
};
