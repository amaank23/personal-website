export const primaryColor = "#161616";
export const secondaryColor = "#1A1A1A";
export const attentionColor = "#FF5925";
export const themeObject = {
  dark: {
    textColor: "white",
    bgColor: "black",
  },
  light: {
    textColor: "black",
    bgColor: "white",
  },
};
export function onStartAnimation(gsap) {
  Math.getDistance = function (x1, y1, x2, y2) {
    var xs = x2 - x1,
      ys = y2 - y1;
    xs *= xs;
    ys *= ys;
    return Math.sqrt(xs + ys);
  };

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;
  let radius = Math.getDistance(0, 0, centerX, centerY);

  const timeline = gsap.timeline();
  timeline
    .from(".line, .profile-container img", {
      yPercent: 100,
      stagger: { each: 0.2 },
    })
    .from(".nav-menu", { yPercent: 110 })
    .from(".logo", { yPercent: 110 }, "<")
    // .to(".canvas-container", { autoAlpha: 1 })
    .to(".wheel-down", { autoAlpha: 1 }, "+=1");
}
