import { TinaMarkdown } from "tinacms/dist/rich-text";

const PageSection = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  );
};

const NewsletterSignup = (props) => (
  <>
    <div>
      <TinaMarkdown content={props.children} />
    </div>
    <div>
      <form>
        <label htmlFor="email-address">Email address</label>
        <input name="email-address" type="email" required />
        <button type="submit">{props.buttonText}</button>
      </form>
    </div>
  </>
);

const components = {
  PageSection,
  // The "NewsletterSignup" key maps to a "template" defined
  // on our "rich-text" field
  NewsletterSignup,
};

const ContentSection = ({ content }) => {
  return (
    <div className="relative py-16 overflow-hidden text-black bg-white">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <TinaMarkdown components={components} content={content} />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
