import { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const loadingRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Animate out the loading screen
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    // Animate the progress and text
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "power2.inOut",
    }).to(
      textRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      0
    );
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative w-64 text-center">
        {/* Progress Bar */}
        <div className="h-0.5 w-full bg-background-light overflow-hidden mb-4">
          <div
            ref={progressRef}
            className="h-full w-full bg-gradient-to-r from-primary to-accent origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Loading Text */}
        <div
          ref={textRef}
          className="text-text-primary opacity-0 transform translate-y-4"
        >
          <span className="gradient-text font-medium">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
