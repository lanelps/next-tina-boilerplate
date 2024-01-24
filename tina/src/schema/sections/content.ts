import type { TinaTemplate } from "tinacms";

export const contentBlock: TinaTemplate = {
  name: "content",
  label: "Content",
  ui: {},
  fields: [
    {
      type: "rich-text",
      label: "Body",
      name: "body",
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
  ],
};
