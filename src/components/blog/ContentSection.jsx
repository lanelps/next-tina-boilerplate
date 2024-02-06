import { TinaMarkdown } from "tinacms/dist/rich-text";

const NewsletterSignup = (props) => (
  <div className="py-4 my-4 border-t border-b">
    <div className="rich-text mb-2">
      <TinaMarkdown content={props.children} />
    </div>
    <form>
      <div className="flex flex-col mb-2">
        <label htmlFor="email-address">Email address</label>
        <input
          className="border border-black"
          name="email-address"
          type="email"
          required
        />
      </div>
      <button
        className="p-2 bg-blue-100 border rounded-lg hover:bg-blue-300"
        type="submit"
      >
        {props.buttonText}
      </button>
    </form>
  </div>
);

const components = {
  // The "NewsletterSignup" key maps to a "template" defined
  // on our "rich-text" field
  NewsletterSignup,
};

const ContentSection = ({ content }) => {
  return (
    <div className="relative w-full py-16 overflow-hidden bg-white">
      <div className="mx-auto prose max-w-prose rich-text">
        <TinaMarkdown components={components} content={content} />
      </div>
    </div>
  );
};

export default ContentSection;
