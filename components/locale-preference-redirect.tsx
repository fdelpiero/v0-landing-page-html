"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export function LocalePreferenceRedirect() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (window.localStorage.getItem("matelab-locale") !== "es") return
    if (pathname.startsWith("/es")) return
    const target = pathname === "/" ? "/es" : `/es${pathname}`
    router.replace(`${target}${window.location.hash}`)
  }, [pathname, router])

  return null
}
