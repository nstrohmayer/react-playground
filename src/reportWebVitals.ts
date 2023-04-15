import { type ReportHandler } from "web-vitals"

const reportWebVitals: (onPerfEntry?: ReportHandler) => void = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry != null && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // eslint-disable-line @typescript-eslint/no-floating-promises
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
