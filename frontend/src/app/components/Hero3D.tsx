import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "motion/react";

function AbstractGeometry() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1.6, 0]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    metalness={0.1}
                    roughness={0.1}
                    transmission={0.9}
                    thickness={1.5}
                    ior={1.2}
                    envMapIntensity={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </mesh>

            {/* Inner solid core */}
            <mesh>
                <octahedronGeometry args={[0.8, 0]} />
                <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
            </mesh>
        </Float>
    );
}

export default function Hero3D() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="w-full h-[500px] absolute inset-0 z-10 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
        >
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <directionalLight position={[-10, -10, -10]} intensity={0.5} />

                <PresentationControls
                    enabled={true}
                    global={false}
                    cursor={true}
                    snap={true}
                    speed={1.5}
                    zoom={1}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                    {/* Invisible plane to catch all touch events on mobile */}
                    <mesh position={[0, 0, -2]} scale={100}>
                        <planeGeometry />
                        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
                    </mesh>
                    <AbstractGeometry />
                </PresentationControls>

                <Environment preset="city" />
            </Canvas>
        </motion.div>
    );
}
