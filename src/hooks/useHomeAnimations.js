import { useEffect } from 'react'
import { gsap } from 'gsap'

/**
 * Animações GSAP da página inicial (hero, barra de agendamento, sobre, estrelas).
 */
export function useHomeAnimations({
  blueCircleRef,
  appointmentRef,
  aboutRef,
  starLargeRef,
  starSmallRef,
}) {
  useEffect(() => {
    const circle = blueCircleRef.current
    const appointment = appointmentRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) return

    if (circle) {
      gsap.fromTo(
        circle,
        { y: 16, opacity: 0.5, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
        },
      )
    }

    if (appointment) {
      gsap.fromTo(
        appointment,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: 'power3.out' },
      )
    }

    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: 'power3.out' },
      )
    }

    if (starLargeRef.current) {
      gsap.fromTo(
        starLargeRef.current,
        { opacity: 0, scale: 0.7, rotate: -22 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: 'back.out(1.8)' },
      )
    }

    if (starSmallRef.current) {
      gsap.fromTo(
        starSmallRef.current,
        { opacity: 0, scale: 0.7, rotate: -18 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.9,
          delay: 0.12,
          ease: 'back.out(1.8)',
        },
      )
    }
  }, [blueCircleRef, appointmentRef, aboutRef, starLargeRef, starSmallRef])
}
