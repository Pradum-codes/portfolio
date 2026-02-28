"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import certificates from "@/data/certificates"
import { Certificate } from "@/types/certificate"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Award, ExternalLink, Filter, X } from "lucide-react"

type Filters = {
  domain: string
  provider: string
  language: string
}

const domainColors: Record<string, string> = {
  Cloud: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Backend: "bg-primary/10 text-primary border-primary/20",
  Frontend: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  DevOps: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Data: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Networking: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Artificial Intelligence": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Programming: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Data Science": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Personal Development": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Electronics: "bg-red-500/10 text-red-400 border-red-500/20",
  "Operating System": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Computer Architecture": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  "Web Development": "bg-teal-500/10 text-teal-400 border-teal-500/20",
}

function getDomainClass(domain: string) {
  return domainColors[domain.trim()] ?? "bg-muted text-muted-foreground border-border"
}

// Helper function to render domain badges
function renderDomainBadges(domainString: string, className: string = "text-[10px]") {
  const domains = domainString.split(",").map(d => d.trim())
  
  return (
    <>
      {domains.map((domain, index) => (
        <span
          key={index}
          className={`inline-flex items-center px-1.5 py-0.5 rounded-full font-medium border ${getDomainClass(domain)} ${className}`}
        >
          {domain}
        </span>
      ))}
    </>
  )
}

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const [filters, setFilters] = useState<Filters>({
    domain: "All",
    provider: "All",
    language: "All"
  })

  const getUniqueValues = (key: keyof Certificate): string[] => {
    if (key === "domain") {
      // Handle comma-separated domains
      const allDomains = certificates.flatMap((c) => 
        c.domain.split(",").map(d => d.trim())
      ).filter(domain => domain !== "" && domain)
      return ["All", ...new Set(allDomains)]
    }
    // Filter out empty strings and falsy values
    const values = certificates
      .map((c) => c[key] as string)
      .filter(value => value !== "" && value)
    return ["All", ...new Set(values)]
  }

  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const domainMatch = filters.domain === "All" || 
        cert.domain.split(",").map(d => d.trim()).includes(filters.domain)
      
      return (
        domainMatch &&
        (filters.provider === "All" || cert.provider === filters.provider) &&
        (filters.language === "All" || cert.language === filters.language)
      )
    })
  }, [filters])

  const activeFilterCount = Object.values(filters).filter((v) => v !== "All").length

  function clearFilters() {
    setFilters({ domain: "All", provider: "All", language: "All" })
  }

  const FilterSection = ({
    title,
    options,
    filterKey
  }: {
    title: string
    options: string[]
    filterKey: keyof Filters
  }) => (
    <div className="mb-5">
      <p className="text-xs text-accent uppercase tracking-widest font-semibold mb-2">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const active = filters[filterKey] === option
          return (
            <button
              key={option}
              onClick={() =>
                setFilters((prev) => ({ ...prev, [filterKey]: option }))
              }
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150 ${
                active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/40 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )

  const stats = [
    { label: "Total", value: certificates.length },
    {
      label: "Domains",
      value: new Set(certificates.flatMap((c) => 
        c.domain.split(",").map(d => d.trim())
      )).size
    },
    {
      label: "Providers",
      value: new Set(certificates.map((c) => c.provider)).size
    }
  ]

  return (
    <div className="min-h-screen px-4 sm:px-8 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to home
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-5 h-5 text-primary" />
              <h1 className="text-3xl font-bold tracking-tight">Certificates</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Credentials and achievements earned along the way
            </p>
          </div>

          <div className="flex items-center gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold text-primary leading-none">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="mb-8" />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile filter toggle */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="inline-flex items-center gap-2 text-sm border rounded-lg px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <Filter className="w-3.5 h-3.5" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-0.5 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
            >
              <X className="w-3 h-3" />
              Clear filters
            </button>
          )}
        </div>

        {/* Sidebar */}
        <aside
          className={`md:block md:w-48 shrink-0 ${showFilters ? "block" : "hidden"}`}
        >
          <div className="sticky top-8 space-y-1">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Filter by
              </span>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  <X className="w-3 h-3" />
                  Clear
                </button>
              )}
            </div>

            <FilterSection
              title="Domain"
              options={getUniqueValues("domain")}
              filterKey="domain"
            />
            <FilterSection
              title="Provider"
              options={getUniqueValues("provider")}
              filterKey="provider"
            />
            <FilterSection
              title="Language"
              options={getUniqueValues("language")}
              filterKey="language"
            />
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="text-foreground font-medium">
                {filteredCertificates.length}
              </span>{" "}
              of {certificates.length}
            </p>
          </div>

          {filteredCertificates.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Award className="w-10 h-10 text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground text-sm">No certificates match the selected filters.</p>
              <button
                onClick={clearFilters}
                className="mt-3 text-xs text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {filteredCertificates.map((cert) => (
                <Card
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer group border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 rounded-xl overflow-hidden bg-card/60"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-muted/30">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>

                    <div className="p-2.5">
                      <p className="text-xs font-semibold leading-tight line-clamp-2 mb-1.5">
                        {cert.title}
                      </p>
                      <p className="text-[10px] text-muted-foreground mb-2 truncate">
                        {cert.provider}
                      </p>
                      <div className="flex items-center gap-1 flex-wrap">
                        {renderDomainBadges(cert.domain, "text-[10px]")}
                        {/* <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium border bg-muted/40 text-muted-foreground border-border capitalize">
                          {cert.type}
                        </span> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        {selectedCert && (
          <DialogContent className="max-w-[95vw] sm:max-w-2xl overflow-hidden rounded-2xl p-0 gap-0 [&>button]:hidden">
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-10 scale-110"
              style={{ backgroundImage: `url(${selectedCert.image})` }}
            />

            <div className="relative z-10 p-4 sm:p-6">
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full p-2 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-muted/80 transition-colors shadow-sm touch-manipulation"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <DialogHeader className="mb-4 pr-10 sm:pr-12">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <DialogTitle className="text-base sm:text-lg leading-snug pr-2">
                      {selectedCert.title}
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm">
                      Issued by{" "}
                      <span className="text-foreground font-medium">
                        {selectedCert.provider}
                      </span>{" "}
                      &middot; {selectedCert.issued}
                    </DialogDescription>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start sm:items-end">
                    <div className="flex flex-wrap gap-1 justify-start sm:justify-end">
                      {renderDomainBadges(selectedCert.domain, "text-xs")}
                    </div>
                    <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium border bg-muted/40 text-muted-foreground border-border capitalize">
                      {selectedCert.type}
                    </span>
                  </div>
                </div>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="rounded-xl overflow-hidden border border-border/50 bg-muted/20">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full object-contain max-h-48 sm:max-h-none"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <ScrollArea className="h-32 sm:h-36">
                    <p className="text-sm text-muted-foreground leading-relaxed pr-2">
                      {selectedCert.description}
                    </p>
                  </ScrollArea>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      { label: "Domain", value: selectedCert.domain },
                      { label: "Language", value: selectedCert.language },
                      { label: "Issued", value: selectedCert.issued },
                      { label: "Type", value: selectedCert.type }
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="bg-muted/30 rounded-lg px-3 py-2 border border-border/50"
                      >
                        <p className="text-muted-foreground mb-0.5">{label}</p>
                        <p className="font-medium capitalize break-words">{value}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full gap-2 h-10 sm:h-9 touch-manipulation"
                    onClick={() => window.open(selectedCert.verify, "_blank")}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify Certificate
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
