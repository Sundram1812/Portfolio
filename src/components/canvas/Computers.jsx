/* eslint-disable */

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";
import Loader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Hemisphere light to give a soft global illumination */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* Point light for localized lighting */}
      <pointLight intensity={50} />
      {/* Spotlight for directional lighting */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12} // Fixed to a valid value
        penumbra={1} // Adjusted penumbra
        intensity={100}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* The imported 3D model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] :[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile]=useState();

  useEffect(()=> {
      const mediaQuery= window.matchMedia('(max-width: 500px)');
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) =>{
        setIsMobile(event.matches)
      }

      mediaQuery.addEventListener('change', handleMediaQueryChange)

      return ()=>{
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
  },[])


  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        {/* Suspense wraps the 3D content for async loading */}
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputerCanvas;

