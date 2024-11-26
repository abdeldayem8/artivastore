import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function TshirtModel({ selectedColor, designImage, productType }) {
  const meshRef = useRef();
  const textureRef = useRef();

  useEffect(() => {
    if (designImage) {
      const loader = new THREE.TextureLoader();
      loader.load(designImage, (texture) => {
        textureRef.current = texture;
        if (meshRef.current) {
          meshRef.current.material.map = texture;
          meshRef.current.material.needsUpdate = true;
        }
      });
    }
  }, [designImage]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 0.1]} />
      <meshStandardMaterial
        color={selectedColor}
        map={textureRef.current}
        transparent={true}
      />
    </mesh>
  );
}

TshirtModel.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  designImage: PropTypes.string,
  productType: PropTypes.oneOf(['tshirt', 'hoodie']).isRequired
};

function ThreeDPreview({ selectedColor, designImage, productType }) {
  return (
    <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <TshirtModel
          selectedColor={selectedColor}
          designImage={designImage}
          productType={productType}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}

ThreeDPreview.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  designImage: PropTypes.string,
  productType: PropTypes.oneOf(['tshirt', 'hoodie']).isRequired
};

export default ThreeDPreview;