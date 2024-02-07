"use client";

import { useEffect, useState } from "react";
import { useTina } from "tinacms/dist/react";

import EssayTemplate from "../../../../templates/Essay";
import { getEssayData } from "../../../../utils/fetchData";

const Essay = ({ params }) => {
  const [essayData, setEssayData] = useState(null);

  // Pass our data through the "useTina" hook to make it editable
  const { data } = useTina({
    query: essayData?.query,
    variables: essayData?.variables,
    data: essayData?.data,
  });

  useEffect(() => {
    const fetchEssayData = async () => {
      const data = await getEssayData(params.slug);
      setEssayData(data);
    };

    fetchEssayData();
  }, [params.slug]);

  return <EssayTemplate data={data} />;
};

export default Essay;
