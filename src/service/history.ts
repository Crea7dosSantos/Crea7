const key = {
  headers: { 'X-API-KEY': process.env.GET_API_KEY },
}

export const getHistories = async () =>
  await fetch('https://c7ds-log.microcms.io/api/v1/histories', key)
