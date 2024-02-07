import { notFound } from "next/navigation";
import client from "../../tina/__generated__/client";

export const getAllBlogPosts = async () => {
  let data = {};
  let query = {};
  let variables = {};

  try {
    const res = await client.queries.postConnection(variables);
    query = res.query;
    data = res.data.postConnection.edges.map(({ node }) => node);
    variables = res.variables;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return {
    variables: variables,
    data: data,
    query: query,
  };
};

export const getBlogPostData = async (slug) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${slug}.mdx` };

  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return {
    variables: variables,
    data: data,
    query: query,
  };
};

export const getAllEssays = async () => {
  let data = {};
  let query = {};
  let variables = {};

  try {
    const res = await client.queries.essayConnection(variables);
    query = res.query;
    data = res.data.essayConnection.edges.map(({ node }) => node);
    variables = res.variables;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return {
    variables: variables,
    data: data,
    query: query,
  };
};

export const getEssayData = async (slug) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${slug}.md` };

  try {
    const res = await client.queries.essay(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return {
    variables: variables,
    data: data,
    query: query,
  };
};
