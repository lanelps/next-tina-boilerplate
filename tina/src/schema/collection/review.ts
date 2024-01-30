import type { TinaCollection } from "tinacms";

import { contentBlock } from "../sections/content";
import { featureBlock } from "../sections/feature";
import { heroBlock } from "../sections/hero";

export const review: TinaCollection = {
  name: "review",
  label: "Reviews",
  path: "content/reviews",
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
    router: ({ document }) => `/edit/review/${document._sys.filename}`,
  },
};
