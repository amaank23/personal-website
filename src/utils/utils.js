import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const primaryColor = "#ff5925";
export const secondaryColor = "#1a1a1a";
export const attentionColor = "#ff5925";
export const themeObject = {
  dark: {
    textColor: "var(--text-primary)",
    bgColor: "var(--background)",
    surfaceColor: "var(--surface)",
    primaryColor: "var(--primary)",
    accentColor: "var(--accent)",
  },
  light: {
    textColor: "#1e293b",
    bgColor: "#f8fafc",
    surfaceColor: "#ffffff",
    primaryColor: "var(--primary)",
    accentColor: "var(--accent)",
  },
};

export function onStartAnimation(gsap) {
  try {
    const timeline = gsap.timeline();
    timeline
      .from(".hero-title", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.2,
      })
      .from(".hero-description", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power4.out",
        delay: 0.5,
      })
      .from(".social-links a", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out",
        delay: 1,
      });
  } catch (error) {
    console.error("Animation error:", error);
  }
}

export function initScrollAnimations(gsap) {
  try {
    // Fade in elements on scroll
    gsap.utils.toArray(".fade-in").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // Stagger elements on scroll
    gsap.utils.toArray(".stagger-group").forEach((group) => {
      const elements = group.querySelectorAll(".stagger-item");

      gsap.from(elements, {
        scrollTrigger: {
          trigger: group,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    });
  } catch (error) {
    console.error("Scroll animation error:", error);
  }
}
