/**
 * Atualiza variáveis CSS --x / --y na moldura do card para o efeito de borda que segue o mouse.
 */
export function atualizarBordaCard(event, resetar = false) {
  const frame = event.currentTarget.querySelector('.service-card-frame')
  if (!frame) return
  if (resetar) {
    frame.style.setProperty('--x', '50%')
    frame.style.setProperty('--y', '50%')
    return
  }
  const r = frame.getBoundingClientRect()
  frame.style.setProperty('--x', `${event.clientX - r.left}px`)
  frame.style.setProperty('--y', `${event.clientY - r.top}px`)
}
