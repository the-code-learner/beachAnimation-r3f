/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public\wp-content\uploads\r3f\beach-animation4.glb 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function BeachAnimation4(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/wp-content/uploads/r3f/beach-animation4.glb");
  const { actions } = useAnimations(animations, group);

  const playTypingAnimation = () => {
    actions.Typing.play();
  };

  useEffect(() => {
    // Call the function to play the typing animation
    playTypingAnimation();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[-0.077, 0.039, -0.794]}
          rotation={[Math.PI / 2, 0, 0.171]}
        >
          <skinnedMesh
            name="mesh_070"
            geometry={nodes.mesh_070.geometry}
            material={materials._070_Robert}
            skeleton={nodes.mesh_070.skeleton}
            morphTargetDictionary={nodes.mesh_070.morphTargetDictionary}
            morphTargetInfluences={nodes.mesh_070.morphTargetInfluences}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
        <group
          name="laptop_1"
          position={[0.562, 1.875, 0.641]}
          rotation={[0, -0.171, 0]}
          scale={5.462}
        >
          <mesh
            name="laptop_3"
            castShadow
            receiveShadow
            geometry={nodes.laptop_3.geometry}
            material={materials.metalMedium}
          />
          <mesh
            name="laptop_3_1"
            castShadow
            receiveShadow
            geometry={nodes.laptop_3_1.geometry}
            material={materials.metalDark}
          />
          <mesh
            name="laptop_3_2"
            castShadow
            receiveShadow
            geometry={nodes.laptop_3_2.geometry}
            material={materials.metal}
          />
        </group>
        <mesh
          name="Beach_Chair1"
          castShadow
          receiveShadow
          geometry={nodes.Beach_Chair1.geometry}
          material={materials.lambert3SG}
          position={[3.016, 4.278, -1.78]}
          scale={0.022}
        />
        <mesh
          name="Beach_Chair"
          castShadow
          receiveShadow
          geometry={nodes.Beach_Chair.geometry}
          material={materials.lambert3SG}
          position={[3.016, 4.826, -1.78]}
          scale={0.022}
        />
        <group
          name="palm_tree_01"
          position={[-6.201, 0.022, -1.22]}
          rotation={[Math.PI, -1.047, Math.PI]}
          scale={0.063}
        >
          <mesh
            name="palm_tree_01-Mesh"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh"].geometry}
            material={materials["795548"]}
          />
          <mesh
            name="palm_tree_01-Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh_1"].geometry}
            material={materials["8BC34A"]}
          />
          <mesh
            name="palm_tree_01-Mesh_2"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh_2"].geometry}
            material={materials.DD9944}
          />
        </group>
        <mesh
          name="Cube003_Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_Cube002.geometry}
          material={materials["Material.006"]}
          position={[-7.17, 1.471, -9.327]}
        />
        <mesh
          name="Node"
          castShadow
          receiveShadow
          geometry={nodes.Node.geometry}
          material={materials.Mat}
          position={[-4.571, -3.12, -3.275]}
          scale={0.049}
        />
        <group
          name="palm_tree_01001"
          position={[-11.693, 0.979, -6.581]}
          rotation={[Math.PI, -0.216, Math.PI]}
          scale={0.044}
        >
          <mesh
            name="palm_tree_01-Mesh001"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh001"].geometry}
            material={materials["795548.001"]}
          />
          <mesh
            name="palm_tree_01-Mesh001_1"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh001_1"].geometry}
            material={materials["8BC34A.001"]}
          />
          <mesh
            name="palm_tree_01-Mesh001_2"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh001_2"].geometry}
            material={materials["DD9944.001"]}
          />
        </group>
        <group
          name="palm_tree_01002"
          position={[-10.582, 0.813, -4.791]}
          rotation={[-Math.PI, 0.92, -Math.PI]}
          scale={[0.04, 0.034, 0.04]}
        >
          <mesh
            name="palm_tree_01-Mesh002"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh002"].geometry}
            material={materials["795548.002"]}
          />
          <mesh
            name="palm_tree_01-Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh002_1"].geometry}
            material={materials["8BC34A.002"]}
          />
          <mesh
            name="palm_tree_01-Mesh002_2"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh002_2"].geometry}
            material={materials["DD9944.002"]}
          />
        </group>
        <group
          name="palm_tree_01003"
          position={[2.743, 0.373, -7.04]}
          rotation={[0, -0.451, 0]}
          scale={[0.048, 0.046, 0.048]}
        >
          <mesh
            name="palm_tree_01-Mesh003"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh003"].geometry}
            material={materials["795548.003"]}
          />
          <mesh
            name="palm_tree_01-Mesh003_1"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh003_1"].geometry}
            material={materials["8BC34A.003"]}
          />
          <mesh
            name="palm_tree_01-Mesh003_2"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh003_2"].geometry}
            material={materials["DD9944.003"]}
          />
        </group>
        <group
          name="palm_tree_01004"
          position={[-7.332, 0.741, -19.888]}
          rotation={[0, -0.451, 0]}
          scale={[0.048, 0.046, 0.048]}
        >
          <mesh
            name="palm_tree_01-Mesh004"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh004"].geometry}
            material={materials["795548.004"]}
          />
          <mesh
            name="palm_tree_01-Mesh004_1"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh004_1"].geometry}
            material={materials["8BC34A.004"]}
          />
          <mesh
            name="palm_tree_01-Mesh004_2"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh004_2"].geometry}
            material={materials["DD9944.004"]}
          />
        </group>
        <group
          name="palm_tree_01005"
          position={[-7.332, 0.741, -19.888]}
          rotation={[0, -0.451, 0]}
          scale={[0.048, 0.046, 0.048]}
        >
          <mesh
            name="palm_tree_01-Mesh005"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh005"].geometry}
            material={materials["795548.005"]}
          />
          <mesh
            name="palm_tree_01-Mesh005_1"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh005_1"].geometry}
            material={materials["8BC34A.005"]}
          />
          <mesh
            name="palm_tree_01-Mesh005_2"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh005_2"].geometry}
            material={materials["DD9944.005"]}
          />
        </group>
        <group
          name="palm_tree_01006"
          position={[-5.191, 0.684, -18.33]}
          rotation={[-0.348, -1.476, -0.349]}
          scale={[0.052, 0.049, 0.052]}
        >
          <mesh
            name="palm_tree_01-Mesh006"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh006"].geometry}
            material={materials["795548.006"]}
          />
          <mesh
            name="palm_tree_01-Mesh006_1"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh006_1"].geometry}
            material={materials["8BC34A.006"]}
          />
          <mesh
            name="palm_tree_01-Mesh006_2"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh006_2"].geometry}
            material={materials["DD9944.006"]}
          />
        </group>
        <group
          name="palm_tree_01007"
          position={[-7.765, 0.72, -17.209]}
          rotation={[-3.109, -0.058, 3.141]}
          scale={[0.041, 0.039, 0.041]}
        >
          <mesh
            name="palm_tree_01-Mesh007"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh007"].geometry}
            material={materials["795548.007"]}
          />
          <mesh
            name="palm_tree_01-Mesh007_1"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh007_1"].geometry}
            material={materials["8BC34A.007"]}
          />
          <mesh
            name="palm_tree_01-Mesh007_2"
            castShadow
            receiveShadow
            geometry={nodes["palm_tree_01-Mesh007_2"].geometry}
            material={materials["DD9944.007"]}
          />
        </group>
        <group
          name="group1945116984"
          position={[-3.259, 0.063, 5.477]}
          scale={2.996}
        >
          <mesh
            name="mesh1945116984"
            castShadow
            receiveShadow
            geometry={nodes.mesh1945116984.geometry}
            material={materials.mat21}
          />
          <mesh
            name="mesh1945116984_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh1945116984_1.geometry}
            material={materials.mat12}
          />
          <mesh
            name="mesh1945116984_2"
            castShadow
            receiveShadow
            geometry={nodes.mesh1945116984_2.geometry}
            material={materials.mat8}
          />
          <mesh
            name="mesh1945116984_3"
            castShadow
            receiveShadow
            geometry={nodes.mesh1945116984_3.geometry}
            material={materials.mat5}
          />
        </group>
        <group
          name="Node001"
          position={[6.608, -1.76, 7.781]}
          rotation={[0.295, -0.095, -0.321]}
          scale={0.164}
        >
          <mesh
            name="Node-Mesh001"
            castShadow
            receiveShadow
            geometry={nodes["Node-Mesh001"].geometry}
            material={materials["lambert3SG.001"]}
          />
          <mesh
            name="Node-Mesh001_1"
            castShadow
            receiveShadow
            geometry={nodes["Node-Mesh001_1"].geometry}
            material={materials.lambert2SG}
          />
          <mesh
            name="Node-Mesh001_2"
            castShadow
            receiveShadow
            geometry={nodes["Node-Mesh001_2"].geometry}
            material={materials.lambert4SG}
          />
        </group>
        <group
          name="Null1"
          position={[2.726, 4.594, -2.072]}
          rotation={[-0.215, 0.032, -0.144]}
          scale={0.033}
        >
          <mesh
            name="Null1-Mesh"
            castShadow
            receiveShadow
            geometry={nodes["Null1-Mesh"].geometry}
            material={materials["Mat.1"]}
          />
          <mesh
            name="Null1-Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes["Null1-Mesh_1"].geometry}
            material={materials["Mat.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/wp-content/uploads/r3f/beach-animation4.glb')
