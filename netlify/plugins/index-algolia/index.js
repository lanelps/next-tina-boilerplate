// import path from "path";
// import dotenv from "dotenv";
// import client from "../../../tina/__generated__/client";
// import algoliasearch from "algoliasearch";

// dotenv.config({
//   path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}.local`),
// });

// const getAllBlogPosts = async () => {
//   const { data } = await client.queries.postConnection();
//   return data?.postConnection?.edges?.map((edge) => edge?.node) ?? [];
// };

// // Function to transform the posts
// const transformPosts = (posts) => {
//   return posts.map((post) => ({
//     objectID: post.id,
//     title: post.title,
//   }));
// };

export const onPostBuild = async function () {
  console.log(`Test Post Build Plgin`);
  // try {
  //   const posts = await getAllBlogPosts();
  //   const transformedPosts = transformPosts(posts);

  //   // initialize the client with your environment variables
  //   const algoliaClient = algoliasearch(
  //     process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "",
  //     process.env.ALGOLIA_SEARCH_ADMIN_KEY ?? ""
  //   );

  //   // initialize the index with your index name
  //   const index = algoliaClient.initIndex(
  //     process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? ""
  //   );

  //   // save the objects!
  //   const algoliaResponse = await index.saveObjects(transformedPosts);

  //   // check the output of the response in the console
  //   return new Response(
  //     `🎉 Sucessfully added ${
  //       algoliaResponse.objectIDs.length
  //     } records to Algolia search. Object IDs:
  //     ${algoliaResponse.objectIDs.join("\n")}`
  //   );
  // } catch (error) {
  //   console.error(error);
  //   return new Response("There was an error");
  // }
};