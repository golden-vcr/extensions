const LOCAL_BACKEND_PATH_PREFIXES = {
  '/api/tapes': 5000,
  '/api/showtime': 5001,
}

export const config = {
  backendBaseUrl: 'https://goldenvcr.com',
  useLocalBackend: true,
}

export function buildUrl(path: string) {
  if (config.useLocalBackend) {
    for (const [pathPrefix, port] of Object.entries(LOCAL_BACKEND_PATH_PREFIXES)) {
      if (path.startsWith(pathPrefix)) {
        return `http://localhost:${port}${path.slice(pathPrefix.length)}`
      }
    }
  }
  return `${config.backendBaseUrl}${path}`
}
