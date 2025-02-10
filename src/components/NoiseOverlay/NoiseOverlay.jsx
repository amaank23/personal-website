const NoiseOverlay = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 opacity-20"
      style={{
        backgroundImage: 'url("/noise.png")',
        mixBlendMode: "overlay",
      }}
    />
  );
};

export default NoiseOverlay;
