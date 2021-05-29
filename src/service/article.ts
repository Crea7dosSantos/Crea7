const key = {
  headers: { 'X-API-KEY': process.env.GET_API_KEY },
}

export const getArticles = async () =>
  await fetch('https://c7ds-log.microcms.io/api/v1/articles', key)

export const getArticleById = async (id: number) =>
  await fetch(`https://c7ds-log.microcms.io/api/v1/articles/${id}`, key)
