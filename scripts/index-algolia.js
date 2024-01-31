const path = require("path");
require("dotenv").config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}.local`),
});

const API_VERSION = "1.4";
const BRANCH = "main";

const myHeaders = new Headers();
myHeaders.append("X-API-KEY", process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY);
myHeaders.append("Content-Type", "application/json");

const graphql = JSON.stringify({
  query: `{
    collections {
      name
    }
  }`,
  variables: {},
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: graphql,
  // redirect: "follow",
};

const getAllBlogPosts = async () => {
  try {
    const response = await fetch(
      `https://content.tinajs.io/${API_VERSION}/content/${process.env.TINA_CLIENT_ID}/github/${BRANCH}`,
      requestOptions
    );

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  try {
    // fetch your data
    const posts = await getAllBlogPosts();
    console.log(`Posts`, posts);
  } catch (error) {
    console.log(error);
  }
})();
