import client from "../../../../tina/__generated__/client";
import ReviewTemplate from "../../../templates/Review";

import { getReviewData } from "../../../utils/fetchData";

const Review = async ({ params }) => {
  const { data } = await getReviewData(params.slug);

  return <ReviewTemplate data={data} />;
};

export const generateStaticParams = async () => {
  const reviews = await client.queries.reviewConnection();

  return reviews.data.reviewConnection.edges.map((review) => {
    return {
      slug: review.node._sys.filename,
    };
  });
};

export default Review;