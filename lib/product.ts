export interface InputField {
  key: string
  label: string
  type: 'input' | 'text' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "StoreSEO",
  slug: "storeseo",
  productId: "PROD_0Qg4wuB1MSPGCpIM5GhBUE",
  priceMonthly: 19,
  yearlyProductId: "PROD_3QZnPClLu2YPf20AeqHqus",
  priceYearly: 190,

  checkoutUrl: "https://pancake.waffo.ai/store/lixingliang-ai-tools-6cilbw8v/checkout/cs_76f8cda7-6fd4-9c0a-116a-4be4f723328b",
  tagline: "SEO meta, alt text and rich-result snippets for every product page",
  description: "Paste a product page and a primary keyword and run a real listing-SEO workflow: parse the product, generate a meta title/description + five alt texts + a schema.org/Product blurb, then validate it against eight e-commerce listing rules (title length, description length, keyword guardrails, alt-text count, schema, price/availability, rich-result readiness).",
  toolTitle: "Generate SEO snippets",
  resultLabel: "Your SEO pack",
  ctaLabel: "Generate SEO",
  features: [
    "Meta title / description generator",
    "Five alt-text suggestions",
    "Schema.org/Product blurb",
    "8-rule listing validation"
  ],
  inputs: [
    {
      "key": "page",
      "label": "Product page text or URL slug",
      "type": "textarea",
      "placeholder": "e.g. /products/cedar-sage-soy-candle - hand-poured soy candle"
    },
    {
      "key": "keyword",
      "label": "Primary keyword",
      "type": "input",
      "placeholder": "e.g. soy candle"
    }
  ] as InputField[],
  definitionLead: "StoreSEO — SEO meta, alt text and rich-result snippets for every product page Use it as decision-support: demo mode works without a live key; live runs require configuration. No fabricated metrics, and no claims for SSO/CSV/Slack unless that surface is actually shipped.",
  geoFaq: [
    { q: "What is StoreSEO?", a: "SEO meta, alt text and rich-result snippets for every product page" },
    { q: "Who should use StoreSEO?", a: "Operators and builders who need a fast first draft or checklist from StoreSEO." },
    { q: "Does it work without an API key?", a: "Yes in explicit Demo mode. Live AI requires a configured key." },
    { q: "Does it guarantee outcomes?", a: "No. Outputs are decision-support; you still review before publishing or acting." },
    { q: "Does it include SSO, Slack, or bulk CSV?", a: "Only if those features are implemented in this product build — do not assume them from marketing copy." },
    { q: "Where does data go?", a: "Runs may be stored locally under the product's .data/ boundary; treat demos as ephemeral." },
  ],
  systemPrompt: "You are an e-commerce SEO specialist. Given product page text and a primary keyword, write a meta title (<=60 chars), a meta description (<=155 chars), five alt-text suggestions, and a schema-ready blurb. Respect keyword guardrails (use the keyword once or twice, do not stuff). Output using the TITLE/DESC/ALT/SCHEMA structure.",
  rulesetId: "storeseo-1.0",
  pipelineId: "storeseo-3step",
  pricing: [
    {
      "tier": "Free",
      "price": "$0",
      "desc": "10 pages / mo · watermarked export"
    },
    {
      "tier": "Pro",
      "price": "$19/mo",
      "desc": "300 product pages / mo · audit log · export"
    },
    {
      "tier": "Enterprise",
      "price": "Custom",
      "desc": "SSO-ready · BYOK · higher caps · shared rulesets"
    }
  ],
  mock: (inputs: Record<string, string>): string => {
    const pg = (inputs['page'] || '').trim()
    const kw = (inputs['keyword'] || 'soy candle').trim()
    if (!pg) return 'Paste product page text to generate SEO snippets.'
    let out = 'SEO PACK (' + kw + ')\n\n'
    out += 'TITLE: ' + (kw.charAt(0).toUpperCase() + kw.slice(1)) + ' | Cedar & Sage - 45h Burn\n'
    out += 'DESC: Hand-poured ' + kw + ' with cedar + sage. 45-hour clean burn, eco-soy wax, gift-ready.\n'
    out += 'ALT: 1) cedar sage soy candle lit  2) soy candle gift box  3) ' + kw + ' on wood table  4) eco soy wax close-up  5) sage sprig detail\n'
    out += 'SCHEMA: "Hand-poured soy candle, cedar + sage, 45-hour burn."\n'
    out += '\n--- (Demo pack. Paste your page for tailored snippets + rule validation.)'
    return out
  }
}
