export function renderStarsRate(rated) {
  switch (true) {
    case rated >= 0 && rated <= 2.0:
      return `⭐`;
    case rated > 2.0 && rated <= 3.0:
      return `⭐⭐`;
    case rated > 3.0 && rated <= 4.0:
      return `⭐⭐⭐`;
    case rated > 4.0 && rated <= 4.5:
      return `⭐⭐⭐⭐`;
    case rated > 4.5 && rated <= 5.0:
      return `⭐⭐⭐⭐⭐`;
    case rated === "N/A":
      return `❗`;
    default:
      return `❗`;
  }
}
