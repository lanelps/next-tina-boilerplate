import { notFound } from "next/navigation";
import client from "../../tina/__generated__/client";

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

export const getReviewData = async (slug) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${slug}.mdx` };
  try {
    const res = await client.queries.review(variables);
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
