const key = {
  headers: { 'X-API-KEY': process.env.GET_API_KEY },
}

const limit = 30
const url = `https://crea7.microcms.io/api/v1/categories?limit=${limit}`

export const fetchCategories = async () => await fetch(url, key)

export const fetchCategoriesUrl = url
