import client from "../../../../tina/__generated__/client";
import EssayTemplate from "../../../templates/Essay";

import { getEssayData } from "../../../utils/fetchData";

export const dynamic = "force-dynamic";

const Essay = async ({ params }) => {
  const { data } = await getEssayData(params.slug);

  return <EssayTemplate data={data} />;
};

export const generateStaticParams = async () => {
  const essays = await client.queries.essayConnection();

  return essays.data.essayConnection.edges.map((essay) => {
    return {
      slug: essay.node._sys.filename,
    };
  });
};

export default Essay;
