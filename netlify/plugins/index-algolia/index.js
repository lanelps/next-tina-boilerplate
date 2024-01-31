import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import algoliasearch from "algoliasearch";

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}.local`),
});

const MY_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const MY_BRANCH = "main";

const getTinaGraphQLVersion = async () => {
  const pkgPath = path.join(
    process.cwd(),
    "node_modules",
    "@tinacms/graphql",
    "package.json"
  );
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  return pkg.version.split(".").slice(0, 2).join(".");
};

const getAllBlogPosts = async () => {
  try {
    const tinaGraphQLVersion = await getTinaGraphQLVersion();
    const url = `https://content.tinajs.io/${tinaGraphQLVersion}/content/${MY_CLIENT_ID}/github/${MY_BRANCH}`;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("X-API-KEY", process.env.TINA_TOKEN);

    const query = `
      {
        postConnection {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `;

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();

    return (
      data?.postConnection?.edges?.map(({ node }) => ({
        objectID: node.id,
        title: node.title,
      })) ?? []
    );
  } catch (error) {
    console.error("An error occurred while fetching blog posts:", error);
    return [];
  }
};

export const onPostBuild = async () => {
  try {
    const posts = await getAllBlogPosts();

    // initialize the client with your environment variables
    const algoliaClient = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "",
      process.env.ALGOLIA_SEARCH_ADMIN_KEY ?? ""
    );

    // initialize the index with your index name
    const index = algoliaClient.initIndex(
      process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? ""
    );

    // save the objects!
    await index.saveObjects(posts);
  } catch (error) {
    console.error(error);
  }
};
