import { useEffect, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

/** Evita tratar resposta HTML (SPA) como modelo */
function looksLikeObjText(text) {
  const t = text.trimStart()
  if (t.startsWith('<!DOCTYPE') || t.startsWith('<html') || t.startsWith('<')) {
    return false
  }
  const firstLine =
    t.split(/\r?\n/).find((line) => line.trim().length > 0) ?? ''
  const f = firstLine.trimStart()
  return (
    /^[#vogsf]|^mtllib|^usemtl|^vp\s|^vn\s|^vt\s/.test(f) || /^o\s/.test(f)
  )
}

const toothMaterial = new MeshStandardMaterial({
  color: '#e7ecea',
  roughness: 0.42,
  metalness: 0.08,
})

function applyToothMaterial(root) {
  const mat = toothMaterial.clone()
  root.traverse((child) => {
    if (child.isMesh) {
      child.material = mat
    }
  })
}

/** Dentinho simples enquanto o OBJ não carrega ou falha */
function PlaceholderTooth() {
  return (
    <group>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.38, 0.95, 8, 32]} />
        <meshStandardMaterial
          color="#e7ecea"
          roughness={0.4}
          metalness={0.08}
        />
      </mesh>
    </group>
  )
}

/**
 * Um único fetch + parse — não usa blob URL (mtllib relativo quebraria) e
 * não depende de arquivo .mtl (material aplicado no código).
 */
function ObjTooth({ url }) {
  const [root, setRoot] = useState(null)

  useEffect(() => {
    let cancelled = false
    const loader = new OBJLoader()

    ;(async () => {
      try {
        const res = await fetch(url)
        if (!res.ok || cancelled) return

        const ct = (res.headers.get('content-type') ?? '').toLowerCase()
        if (ct.includes('text/html')) return

        const text = await res.text()
        if (cancelled || !looksLikeObjText(text)) return

        const parsed = loader.parse(text)
        applyToothMaterial(parsed)

        if (!cancelled) setRoot(parsed)
      } catch {
        /* rede ou parse inválido */
      }
    })()

    return () => {
      cancelled = true
    }
  }, [url])

  const scene = useMemo(() => {
    if (!root) return null
    return root.clone(true)
  }, [root])

  if (!scene) {
    return <PlaceholderTooth />
  }

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  )
}

function Scene({ modelPath }) {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[6, 8, 4]} intensity={1.15} castShadow />
      <directionalLight position={[-4, 2, -6]} intensity={0.35} />
      <ObjTooth url={modelPath} />
      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
        maxDistance={12}
        minDistance={4}
      />
    </>
  )
}

/**
 * Área 3D ao lado do contato — modelo em `public/` (OBJ).
 */
export function ToothCanvas({ modelPath }) {
  return (
    <div className="relative h-[min(420px,55vw)] w-full min-h-[280px] overflow-hidden rounded-3xl border border-[#7a7892]/30 bg-gradient-to-b from-[#e7ecea] to-[#d9dfdd] shadow-inner md:h-[min(480px,42vw)] md:min-h-[360px]">
      <Canvas
        frameloop="demand"
        camera={{ position: [0, 0.2, 6.2], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.25]}
        className="h-full w-full touch-none"
      >
        <Scene modelPath={modelPath} />
      </Canvas>
    </div>
  )
}
