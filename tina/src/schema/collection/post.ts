import type { TinaCollection } from "tinacms";

import { contentBlock } from "../sections/content";
import { featureBlock } from "../sections/feature";
import { heroBlock } from "../sections/hero";

export const post: TinaCollection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "reference",
      collections: ["author"],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [
        {
          name: "NewsletterSignup",
          label: "Newsletter Signup",
          fields: [
            {
              name: "children",
              label: "CTA",
              type: "rich-text",
            },
            {
              name: "buttonText",
              label: "Button Text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      list: true,
      name: "sections",
      label: "Sections",
      templates: [heroBlock, featureBlock, contentBlock],
    },
  ],
  ui: {
    // This is an DEMO router. You can remove this to fit your site
    router: ({ document }) => `/edit/blog/${document._sys.filename}`,
  },
};
