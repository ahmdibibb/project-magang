import { news } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Article = ({ data }: { data: news }) => {
  return (
    <div className="py-2 border-b border-gray-300 mb-4 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full h-[220px] md:h-[300px]">
        <Image
          src={data?.urlToImage ? data?.urlToImage : "/img/news-u-logo.webp"}
          alt={data?.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <Link href={data?.url} legacyBehavior>
          <a
            target="_blank"
            className="font-bold text-lg hover:text-blue-700 transition"
          >
            {data?.title}
          </a>
        </Link>
        <div className="flex space-x-4 my-2 text-xs text-gray-500">
          <span>{data?.source?.name}</span>
          <span>{new Date(data?.publishedAt).toLocaleDateString("id-ID")}</span>
        </div>
        <p className="text-sm text-gray-700">{data?.description}</p>
      </div>
    </div>
  );
};

export default Article;
