export const smoothScroll = (href: string) => {
  const targetId = href.replace("#", "")
  const element = document.getElementById(targetId)
  if (element) {
    const yOffset = -80 // Ajusta este valor basado en la altura de tu navbar
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
  }
}

