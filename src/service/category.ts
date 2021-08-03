const key = {
  headers: { 'X-API-KEY': process.env.GET_API_KEY },
}
const url = 'https://c7ds-log.microcms.io/api/v1/categories'

export const fetchCategories = async () => await fetch(url, key)

export const fetchCategoriesUrl = url
