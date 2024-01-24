import { defineConfig } from "tinacms";

import { contentBlock } from "./src/schema/sections/content";
import { featureBlock } from "./src/schema/sections/feature";
import { heroBlock } from "./src/schema/sections/hero";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
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
      },
      {
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
      },
    ],
  },
});
