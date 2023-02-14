import {
    EffectComposer,
    Noise,
    Bloom
} from "@react-three/postprocessing";

const Postprocessing = () => {
    return (
        <EffectComposer multisampling={0} disableNormalPass={true}>
            <Noise opacity={0.05} />
            <Bloom
                luminanceThreshold={0.1}
                luminanceSmoothing={1.8}
                height={300}
                opacity={3}
            />
        </EffectComposer>
    )
}

export default Postprocessing