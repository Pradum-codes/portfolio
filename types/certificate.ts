export type CertificateType = "badge" | "certificate"

export interface Certificate {
  id: string
  title: string
  type: CertificateType
  provider: string
  domain: string
  language: string
  issued: string
  image: string
  verify: string
  description: string
}