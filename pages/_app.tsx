import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import ChatWidget from '../components/ChatWidget'
import { SUPPORT } from '../lib/support.config'

export default function App({ Component, pageProps }: AppProps) {
  return       <><Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="StoreSEO" />
        <meta property="og:description" content="Paste a product page and a primary keyword and run a real listing-SEO workflow: parse the product, generate a meta title/description + five alt texts + a schema.org/Product blurb, then validate it against eight e-commerce listing rules (title length, description length, keyword guardrails, alt-text count, schema, price/availability, rich-result readiness)." />
        <meta property="og:url" content="https://storeseo.lxsaihub.com/" />
        <meta property="og:image" content="https://storeseo.lxsaihub.com/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StoreSEO" />
        <meta name="twitter:description" content="Paste a product page and a primary keyword and run a real listing-SEO workflow: parse the product, generate a meta title/description + five alt texts + a schema.org/Product blurb, then validate it against eight e-commerce listing rules (title length, description length, keyword guardrails, alt-text count, schema, price/availability, rich-result readiness)." />
        <meta name="twitter:image" content="https://storeseo.lxsaihub.com/og.png" />
                                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"SoftwareApplication","name":"StoreSEO","url":"https://storeseo.lxsaihub.com/","description":"Paste a product page and a primary keyword and run a real listing-SEO workflow: parse the product, generate a meta title/description + five alt texts + a schema.org/Product blurb, then validate it against eight e-commerce listing rules (title length, description length, keyword guardrails, alt-text count, schema, price/availability, rich-result readiness).","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","priceCurrency":"USD","price":"0","availability":"https://schema.org/OnlineOnly"}}' }} />
      </Head>
      <Component {...pageProps} />
      <ChatWidget productName={SUPPORT.productName} brandColor={SUPPORT.brandColor} sessionKeyPrefix={SUPPORT.productSlug} /></>
}
