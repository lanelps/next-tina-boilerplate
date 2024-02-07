import { getAllEssays } from "../../utils/fetchData";

export const dynamic = "force-dynamic";

const Essays = async () => {
  const { data } = await getAllEssays();

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold underline">Essays</h1>
      <ol className="flex flex-col list-decimal">
        {data.map((essay) => (
          <li key={essay.id} className="mb-4">
            <a
              href={`/essays/${essay._sys.filename}`}
              className="text-xl hover:underline"
            >
              {essay.title}
            </a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Essays;
