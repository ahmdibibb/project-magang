import { news } from "@/types";


export const removeDuplicateData = (articles: news[]): news[] => {
  // Pastikan input adalah array
  if (!Array.isArray(articles)) {
    console.warn("Expected an array of articles, but got:", articles);
    return [];
  }

  // Gunakan filter untuk hanya mengambil artikel yang memiliki source.id
  const filteredArticles = articles.filter(
    (article: news) => article?.source?.id !== null
  );

  return filteredArticles;
};
