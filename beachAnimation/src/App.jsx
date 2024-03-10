import { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BeachAnimation4 } from './assets/Beach-animation4'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ width: "100%", height: "70vh" }}>
      <Canvas  camera={{ position: [2, 5, 8] }}>
        <OrbitControls/>
        <pointLight position={[3, 2, 1]} />
        <directionalLight position={[3, 2, 1]} intensity={1.4}/>
        <ambientLight intensity={1.3}/>
        <Suspense fallback={null}>
          <BeachAnimation4/>
        </Suspense>
      </Canvas>
      </div>
    </>
  )
}

export default App
