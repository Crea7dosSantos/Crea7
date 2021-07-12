export function getHostFromURL(url: string) {
  const urlObj = new URL(url)
  return urlObj.hostname
}
