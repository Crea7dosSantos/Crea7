const key = {
  headers: { 'X-API-KEY': process.env.GET_API_KEY },
}

const url = 'https://c7ds-log.microcms.io/api/v1/histories'

export const fetchHistories = async () => await fetch(url, key)

// export const fetchHistoriesByTag = async (id: number) => {
//   const urls = {}
// }
