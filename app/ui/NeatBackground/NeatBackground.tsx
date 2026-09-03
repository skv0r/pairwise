"use client";

import { useEffect, useRef } from "react";
import { NeatGradient, type NeatConfig } from "@firecms/neat";
import styles from "./NeatBackground.module.css";

const config = {
    colors: [
        { color: "#F4EFE6", enabled: true },
        { color: "#F4EFE6", enabled: true },
        { color: "#EFE2CE", enabled: true },
        { color: "#E8E4DC", enabled: true },
        { color: "#D5ECEB", enabled: true },
        { color: "#FFFFFF", enabled: false },
    ],
    speed: 2,
    horizontalPressure: 4,
    verticalPressure: 5,
    waveFrequencyX: 4,
    waveFrequencyY: 3,
    waveAmplitude: 2,
    shadows: 1,
    highlights: 2,
    colorBrightness: 1,
    colorSaturation: -2,
    wireframe: false,
    antialias: false,
    colorBlending: 7,
    backgroundColor: "#F4EFE6",
    backgroundAlpha: 1,
    grainScale: 100,
    grainSparsity: 0,
    grainIntensity: 0.05,
    grainSpeed: 0.3,
    resolution: 0.35,
    yOffset: -736,
    yOffsetWaveMultiplier: 5,
    yOffsetColorMultiplier: 4.5,
    yOffsetFlowMultiplier: 5.5,
    flowDistortionA: 0.4,
    flowDistortionB: 3,
    flowScale: 3.3,
    flowEase: 0.53,
    flowEnabled: true,
    enableProceduralTexture: false,
    transparentTextureVoid: false,
    textureVoidLikelihood: 0.06,
    textureVoidWidthMin: 10,
    textureVoidWidthMax: 500,
    textureBandDensity: 0.8,
    textureColorBlending: 0.06,
    textureSeed: 333,
    textureEase: 0.48,
    proceduralBackgroundColor: "#F4EFE6",
    textureShapeTriangles: 20,
    textureShapeCircles: 15,
    textureShapeBars: 15,
    textureShapeSquiggles: 10,
    domainWarpEnabled: true,
    domainWarpIntensity: 0.05,
    domainWarpScale: 0.5,
    vignetteIntensity: 0,
    vignetteRadius: 0.85,
    fresnelEnabled: false,
    fresnelPower: 2,
    fresnelIntensity: 0.5,
    fresnelColor: "#FFFFFF",
    iridescenceEnabled: false,
    iridescenceIntensity: 0.5,
    iridescenceSpeed: 1,
    bloomIntensity: 0,
    bloomThreshold: 0.7,
    chromaticAberration: 0,
    shapeType: "plane" as const,
    shapeRotationX: 0,
    shapeRotationY: 0,
    shapeRotationZ: 0,
    shapeAutoRotateSpeedX: 0,
    shapeAutoRotateSpeedY: 0,
    sphereRadius: 15,
    torusRadius: 15,
    torusTube: 5,
    cylinderRadius: 10,
    cylinderHeight: 40,
    planeBend: 0,
    planeTwist: 0,
    silhouetteFade: 0.25,
    cylinderFade: 0.08,
    ribbonFade: 0.05,
    flatShading: true,
    cameraLock: true,
    cameraX: 0,
    cameraY: 0,
    cameraZ: 0,
    cameraRotationX: 0,
    cameraRotationY: 0,
    cameraRotationZ: 0,
    cameraZoom: 1,
} satisfies NeatConfig;

const NeatBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const gradient = new NeatGradient({
            ref: canvas,
            ...config,
        });

        const onScroll = () => {
            gradient.yOffset = window.scrollY;
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            gradient.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={styles.canvas}
            aria-hidden="true"
        />
    );
};

export default NeatBackground;
