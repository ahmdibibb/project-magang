import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'

const Travel = async () => {
  const newsWorld = await getNewsSearch("travel")
  const filterArticles = removeDuplicateData(newsWorld)

  return (
    <div className='w-[700px]'>
      {filterArticles.map((article,idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  )
}

export default Travel