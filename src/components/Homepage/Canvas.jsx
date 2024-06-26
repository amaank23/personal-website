import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/themeContext";
import { themeObject } from "../../utils/utils";

const Canvas = () => {
  const canvasRef = useRef(null);
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const mp = 20;
    const particles = [];

    for (let i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 4 + 1,
        d: Math.random() * mp,
      });
    }

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = themeObject[themeContext.theme].textColor;
      ctx.beginPath();

      for (let i = 0; i < mp; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }

      ctx.fill();
      update();
    };

    const update = () => {
      angle += 0.01;

      for (let i = 0; i < mp; i++) {
        const p = particles[i];
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;

        if (p.x > W + 5 || p.x < -5 || p.y > H) {
          if (i % 3 > 0) {
            particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
          } else {
            if (Math.sin(angle) > 0) {
              particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
            } else {
              particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
            }
          }
        }
      }
    };

    const animationLoop = setInterval(draw, 33);

    return () => clearInterval(animationLoop);
  }, [themeContext.theme]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      style={{ backgroundColor: themeObject[themeContext.theme].bgColor }}
    />
  );
};

export default Canvas;
