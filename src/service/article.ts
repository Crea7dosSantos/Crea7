import { fetchTagsUrl } from './tag'

const key = {
  headers: { 'X-API-KEY': process.env.GET_API_KEY },
}
const url = 'https://c7ds-log.microcms.io/api/v1/articles'

export const fetchArticles = async () => await fetch(url, key)

export const fetchArticleById = async (id: number) => {
  const urls = [`${url}/${id}`, fetchTagsUrl]
  return await Promise.all(urls.map((x) => fetch(x, key)))
}
