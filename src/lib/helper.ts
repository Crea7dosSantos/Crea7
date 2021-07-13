import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

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

export function formatDate(dateText: string, format = 'YYYY-MM-DD') {
  const date = dayjs(dateText)
  // conditionally return relative date
  const isRecent = Math.abs(date.diff(Date.now(), 'month')) < 6

  return isRecent ? date.fromNow() : date.format(format)
}
