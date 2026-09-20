import type { StepId } from './pipeline'

/**
 * Typed input/output contracts for the StoreSEO workflow.
 * Manual schemas (no zod dependency) — validated at the API boundary.
 */

export type RuleCategory = 'title' | 'description' | 'keyword' | 'media' | 'schema' | 'richresult' | 'quality' | 'structure'

export interface RuleResult {
  ruleId: string
  name: string
  passed: boolean
  message: string
  category: RuleCategory
  severity: 'low' | 'medium' | 'high'
}

export interface SeoPackOutput {
  title: string
  description: string
  altTexts: string[]
  schemaBlurb: string
}

export interface FeedbackInput {
  runId: string
  type: 'thumbs_up' | 'thumbs_down' | 'correction'
  comment?: string
  approved?: boolean
}

export const STEP_IDS: StepId[] = ['input', 'process', 'output']

export function isValidStep(v: unknown): v is StepId {
  return v === 'input' || v === 'process' || v === 'output'
}

/** Validate the feedback payload. Returns the parsed object or throws with an English message. */
export function parseFeedback(body: unknown): FeedbackInput {
  const b = (body || {}) as Record<string, unknown>
  const runId = typeof b.runId === 'string' ? b.runId.trim() : ''
  if (!runId) {
    throw new Error('runId is required')
  }
  const type = b.type
  if (type !== 'thumbs_up' && type !== 'thumbs_down' && type !== 'correction') {
    throw new Error('type must be thumbs_up, thumbs_down, or correction')
  }
  const comment = typeof b.comment === 'string' ? b.comment : undefined
  const approved = typeof b.approved === 'boolean' ? b.approved : undefined
  return { runId, type, comment, approved }
}

// --- GEO JSON-LD helpers (server-side Head injection) ---
export interface FaqItem {
  question: string
  answer: string
}

export interface HowToStep {
  name: string
  text: string
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  }
}

export function buildHowToJsonLd(name: string, steps: HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}
