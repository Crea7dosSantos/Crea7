export function getHostFromURL(url: string) {
  const urlObj = new URL(url)
  if (urlObj.hostname.endsWith('microcms.io')) {
    return 'microcms.io'
  }

  return urlObj.hostname
}

export function getHostIconFromURL(url: string) {
  const urlObj = new URL(url)
  const hostname = urlObj.hostname

  switch (hostname) {
    case 'zenn.dev':
      return '/zenn-favicon.png'
    case 'qiita.com':
      return '/qiita-favicon.png'
    default:
      return '/micro_cms-favicon.png'
  }
}
