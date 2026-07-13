export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "StoreSEO",
  slug: "storeseo",
  tagline: "Meta title, description, and alt text in one pass.",
  description: "From a product page, generate an SEO meta title and description, five alt-text suggestions, and a schema-ready blurb - with keyword guardrails so you don't stuff.",
  toolTitle: "Generate SEO snippets",
  resultLabel: "Your SEO pack",
  ctaLabel: "Generate SEO",
  features: [
  "Meta title / description",
  "Five alt-text ideas",
  "Rich-result blurb",
  "Keyword guardrails"
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
  systemPrompt: "You are an e-commerce SEO specialist. Given product page text and a primary keyword, write a meta title (<=60 chars), a meta description (<=155 chars), five alt-text suggestions, and a schema-ready blurb. Respect keyword guardrails (use the keyword once or twice, do not stuff). In demo (mock) mode, return a realistic sample pack following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "10 pages/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const pg = (inputs['page'] || '').trim()
  const kw = (inputs['keyword'] || 'soy candle').trim()
  if (!pg) return 'Paste product page text to generate SEO snippets.'
  let out = 'SEO PACK (' + kw + ')\n\n'
  out += 'TITLE: ' + (kw.charAt(0).toUpperCase() + kw.slice(1)) + ' | Cedar & Sage - 45h Burn\n'
  out += 'DESC: Hand-poured ' + kw + ' with cedar + sage. 45-hour clean burn, eco-soy wax, gift-ready.\n'
  out += 'ALT: 1) cedar sage soy candle lit  2) soy candle gift box  3) ' + kw + ' on wood table\n'
  out += 'SCHEMA: "Hand-poured soy candle, cedar + sage, 45-hour burn."\n'
  out += '\n--- (Mock demo. Paste your page for tailored snippets.)'
  return out
}
}
