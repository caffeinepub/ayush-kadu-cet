import { useEffect, useRef } from "react";
import type { View } from "../App";
import Navbar from "../components/Navbar";
import type { Theme } from "../data/themes";

interface Props {
  theme: Theme;
  onNavigate: (v: View) => void;
  onStartTest: () => void;
}

export default function HomePage({ theme, onNavigate, onStartTest }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          theme.primary +
          Math.round(p.alpha * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, [theme]);

  const subjects = [
    {
      name: "Maths",
      icon: "∑",
      color: theme.primary,
      desc: "Integration, Vectors, 3D Geometry, Probability & more",
      questions: 20,
    },
    {
      name: "Physics",
      icon: "⚛",
      color: theme.secondary,
      desc: "Rotational Motion, Electrostatics, Modern Physics & more",
      questions: 20,
    },
    {
      name: "Chemistry",
      icon: "⚗",
      color: theme.accent,
      desc: "Coordination, Organic Mechanisms, Electrochemistry & more",
      questions: 20,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar theme={theme} onNavigate={onNavigate} active="home" />

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6"
                style={{
                  background: `${theme.primary}22`,
                  color: theme.primary,
                  border: `1px solid ${theme.primary}44`,
                }}
              >
                🔥 India's Smartest CET Prep Platform
              </div>
              <h1
                className="text-5xl md:text-7xl font-black leading-tight mb-6"
                style={{ color: "#F4F7FF" }}
              >
                MHT-CET?{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Crushed It.
                </span>{" "}
                We Got You.
              </h1>
              <p className="text-lg mb-8" style={{ color: "#AAB3C5" }}>
                PYQ-powered mock tests. 2020–2025 analysis. Subject-wise
                preparation with personalized feedback.{" "}
                <strong style={{ color: "#F4F7FF" }}>Completely free.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={onStartTest}
                  className="px-8 py-4 rounded-full font-bold text-base text-black transition-transform hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    boxShadow: `0 0 30px ${theme.glow}`,
                  }}
                >
                  🚀 Start Mock Test
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("pyq-analytics")}
                  className="px-8 py-4 rounded-full font-bold text-base transition-transform hover:scale-105"
                  style={{
                    color: theme.primary,
                    border: `2px solid ${theme.primary}`,
                    background: `${theme.primary}11`,
                  }}
                >
                  📊 View PYQ Analysis
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="w-64 h-64 rounded-full flex items-center justify-center text-9xl"
                  style={{
                    background: `radial-gradient(circle, ${theme.primary}22, ${theme.secondary}11)`,
                    border: `2px solid ${theme.primary}44`,
                    boxShadow: `0 0 60px ${theme.glow}`,
                  }}
                >
                  🎯
                </div>
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{
                    background: `${theme.secondary}33`,
                    border: `2px solid ${theme.secondary}88`,
                  }}
                >
                  ⏱
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{
                    background: `${theme.accent}33`,
                    border: `2px solid ${theme.accent}88`,
                  }}
                >
                  📈
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "60+", label: "PYQ Questions" },
              { val: "2020–25", label: "Years Covered" },
              { val: "3", label: "Subjects" },
              { val: "100%", label: "Free Forever" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-4 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-3xl font-black"
                  style={{ color: theme.primary }}
                >
                  {s.val}
                </div>
                <div className="text-sm" style={{ color: "#AAB3C5" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Cards */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-3xl font-black mb-8" style={{ color: "#F4F7FF" }}>
            Subject-wise Mock Tests
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {subjects.map((s) => (
              <div
                key={s.name}
                className="rounded-3xl p-6 transition-transform hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${s.color}33`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                  style={{
                    background: `${s.color}22`,
                    border: `1px solid ${s.color}55`,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#F4F7FF" }}
                >
                  {s.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#AAB3C5" }}>
                  {s.desc}
                </p>
                <div
                  className="flex justify-between items-center mb-4 text-xs"
                  style={{ color: "#AAB3C5" }}
                >
                  <span>📝 {s.questions}+ Questions</span>
                  <span>⏱ 2020–2025</span>
                </div>
                <button
                  type="button"
                  onClick={onStartTest}
                  className="w-full py-3 rounded-full font-bold text-sm text-black"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}, ${theme.secondary})`,
                    boxShadow: `0 0 15px ${s.color}44`,
                  }}
                >
                  Take Test →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
