import { getNewsSearch } from "@/api";
import Article from "@/components/Article";
import { removeDuplicateData } from "@/utils";

const Indonesia = async () => {
  const newsWorld = await getNewsSearch("indonesia");
  const filterArticles = removeDuplicateData(newsWorld);

  return (
    <div className="w-[700px]">
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default Indonesia;
