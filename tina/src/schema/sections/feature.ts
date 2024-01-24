import type { TinaTemplate } from "tinacms";

export const featureBlock: TinaTemplate = {
  name: "features",
  label: "Features",
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
        },
      ],
    },
  ],
};
