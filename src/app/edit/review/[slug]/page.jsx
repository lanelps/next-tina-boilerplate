"use client";

import { useEffect, useState } from "react";
import { useTina } from "tinacms/dist/react";

import ReviewTemplate from "../../../../templates/Review";
import { getReviewData } from "../../../../utils/fetchData";

const Review = ({ params }) => {
  const [reviewData, setReviewData] = useState(null);

  // Pass our data through the "useTina" hook to make it editable
  const { data } = useTina({
    query: reviewData?.query,
    variables: reviewData?.variables,
    data: reviewData?.data,
  });

  useEffect(() => {
    const fetchReviewData = async () => {
      const data = await getReviewData(params.slug);
      setReviewData(data);
    };

    fetchReviewData();
  }, [params.slug]);

  return <ReviewTemplate data={data} />;
};

export default Review;
