export const siteMeta = {
  title: "PassTravel | B2B Travel Solutions",
  description: "Premier B2B travel agency offering exclusive tour packages and custom travel solutions for businesses worldwide.",
  keywords: "b2b travel, business travel, tour packages, corporate travel, travel solutions",
  siteUrl: "https://passtravel.com",
  twitterHandle: "@passtravel",
  author: "PassTravel"
}

export const defaultMeta = {
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMeta.siteUrl,
    site_name: siteMeta.title,
  },
  twitter: {
    handle: siteMeta.twitterHandle,
    site: siteMeta.twitterHandle,
    cardType: 'summary_large_image',
  },
}
