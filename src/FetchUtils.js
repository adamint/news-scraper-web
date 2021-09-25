export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const base = "http://localhost:8000"