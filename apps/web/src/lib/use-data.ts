const cache: any = {}

export default function useData(key: string | number, fetcher: any) {
  if (!cache[key]) {
    let data: undefined
    let error: string | undefined
    let promise: any
    cache[key] = () => {
      if (error !== undefined || data !== undefined) return { data, error }
      if (!promise) {
        promise = fetcher()
          .then((r: any) => (data = r))
          // Convert all errors to plain string for serialization
          .catch((e: string) => (error = e + ''))
      }
      throw promise
    }
  }
  return cache[key]()
}
