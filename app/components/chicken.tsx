import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

// Component to handle canvas resizing
const SetCanvasSize: React.FC = () => {
  const { set, size } = useThree();
  
  useEffect(() => {
    const handleResize = () => {
      set({ 
        size: { 
          width: window.innerWidth, 
          height: window.innerHeight, 
          top: 0, 
          left: 0 
        } 
      });
    };

    // Set initial size
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [set]);

  return null;
};

// Create a sphere component that uses a metallic material component
const Sphere1: React.FC = () => {
  // Use a ref to rotate the sphere around its axis
  const sphereRef = useRef<THREE.Mesh>(null);
  // Use a state variable to store the angle of rotation
  const [angle, setAngle] = React.useState(0);
  // Use useFrame to update the angle and position every frame
  useFrame(() => {
    // Increase the angle by 0.01 radians
    setAngle(angle + 0.01);
    // Calculate the x and z coordinates of the sphere based on the angle and radius
    const x = Math.cos(angle) * 6;
    const z = Math.sin(angle) * 6;
    // Set the position of the sphere ref
    sphereRef.current?.position.set(x, 0, z);
    // Rotate the sphere around its axis
    sphereRef.current?.rotateX(0.01);
  });
  return (
    <mesh ref={sphereRef} scale={[2, 2, 2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial metalness={1} roughness={0} />
      <Text
        position={[0, 0, 1.1]}
        color="hotpink"
        fontSize={0.5}
        font="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf"
        anchorX="center"
        anchorY="middle"
      >
        TTB
      </Text>
    </mesh>
  );
};

// Create a torus component that uses a different material component
const Torus1: React.FC = () => {
  // Use a ref to rotate the torus around its axis
  const torusRef = useRef<THREE.Mesh>(null);
  useFrame(() => torusRef.current?.rotateZ(0.01));
  return (
    <mesh ref={torusRef} position={[0, 0, 0]}>
      <torusGeometry args={[1, 0.5, 16, 32]} />
      <meshLambertMaterial color="orange" />
    </mesh>
  );
};

// Create a moving object component that renders a sphere, a torus and some stars
const MovingObject: React.FC<{children?: React.ReactNode}> = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen bg-gray-900 overflow-hidden">
      <Canvas
        className="w-full h-full"
        camera={{
          position: [0, 0, 6],
          fov: 85,
          near: 0.1,
          far: 1000
        }}
        style={{ display: 'block' }}
      >
        <SetCanvasSize />
        <pointLight position={[10, 10, 10]} />
        {/* Add a light pinkish light to the scene */}
        <hemisphereLight args={["#ffcccc", "#000000", 0.5]} />
        <Sphere1 />
        <Torus1 />
        {children}
        <Stars radius={1} depth={8} saturation={10} count={1000} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
};

export default MovingObject;