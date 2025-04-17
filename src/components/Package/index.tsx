import { useResolution } from '@/hooks/useResolution';
import { TempLightSource } from '@/modules/Main';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { motion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Group, Mesh, Object3D, Vector3 } from 'three';
// @ts-ignore
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

type TempPackageProps = {
  lightSources: TempLightSource[];
};

type ModelProps = {
  onReady: () => void;
};

function Eyes({ eyes }: { eyes: Object3D[] }) {
  const { viewport } = useThree();
  const { isDesktop } = useResolution();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const maxOffset = 0.1;
  // Перенесём initialOffset в useRef, чтобы он не изменялся при ререндерах
  const initialOffset = useRef(new Vector3(-0.09, -0.02, 0));

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    const normalizedX = Math.max(-1, Math.min(1, mousePos.x * viewport.aspect));
    const normalizedY = Math.max(-1, Math.min(1, mousePos.y));

    eyes.forEach((eye) => {
      // Всегда используем изначальную позицию + начальное смещение + текущее смещение
      eye.position.x = eye.userData.initialPos.x + initialOffset.current.x + normalizedX * maxOffset;
      eye.position.y = eye.userData.initialPos.y + initialOffset.current.y + normalizedY * maxOffset;
    });
  });

  return null;
}

export const Model = ({ onReady }: ModelProps) => {
  const fbx = useLoader(FBXLoader, '3d/paketik_without_eyes.fbx') as Group;
  const rotateX = useSpring(0);
  const rotateY = useSpring(0);
  const meshRef = useRef<Mesh>(null);
  const { isMobile, isTablet } = useResolution();
  const { viewport } = useThree();
  const [eyes, setEyes] = useState<Object3D[]>([]);

  // Добавим reset позиций глаз при монтировании
  useEffect(() => {
    return () => {
      // При размонтировании сбрасываем позиции глаз
      eyes.forEach((eye) => {
        if (eye.userData.initialPos) {
          eye.position.copy(eye.userData.initialPos);
        }
      });
    };
  }, [eyes]);

  const onMouseMove = (event: MouseEvent) => {
    const mouseX = event.clientX - window.innerWidth / 2;
    const mouseY = event.clientY - (window.innerHeight - 500) / 2;
    rotateX.set(mouseX * 0.0005);
    rotateY.set(mouseY * 0.0005);
  };

  useEffect(() => {
    if (isMobile || isTablet) return;
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    if (fbx) {
      onReady();
      const eyesArray: Object3D[] = [];
      fbx.traverse((child) => {
        if (child.name.match(/eye/gi)) {
          // Сохраняем начальную позицию только если её ещё нет
          if (!child.userData.initialPos) {
            child.userData.initialPos = new Vector3().copy(child.position);
          }
          eyesArray.push(child);
        }
      });
      setEyes(eyesArray);
    }
  }, [fbx]);

  const meshScale = viewport.width / (isMobile ? 8 : isTablet ? viewport.left / 1.3 : 8.5);
  const meshPosY = isMobile ? 0.3 : 0.6;

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = rotateY.get();
    meshRef.current.rotation.y = rotateX.get();
  });

  return (
    <mesh ref={meshRef} scale={meshScale} position={[0, meshPosY, 0]}>
      <primitive object={fbx} />
      {eyes.length > 0 && <Eyes eyes={eyes} />}
    </mesh>
  );
};

export default function Package({ lightSources }: TempPackageProps) {
  const { isDesktop } = useResolution();
  const [isModelReady, setIsModelReady] = useState(false);

  return (
    <motion.div
      animate={{ opacity: Number(isModelReady) }}
      className='w-full'
      style={{ height: isDesktop ? '90%' : '50%' }}
    >
      <Canvas>
        {lightSources.map((light, index) => (
          <ambientLight key={index} intensity={light.intensity} color={light.color} />
        ))}
        <Model onReady={() => setIsModelReady(true)} />
      </Canvas>
    </motion.div>
  );
}
