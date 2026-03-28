import { useState } from "react";
import type { TestConfig, View } from "../App";
import Navbar from "../components/Navbar";
import type { Theme } from "../data/themes";

interface Props {
  theme: Theme;
  onNavigate: (v: View) => void;
  onStart: (config: TestConfig) => void;
}

export default function TestSetupPage({ theme, onNavigate, onStart }: Props) {
  const [subject, setSubject] = useState<TestConfig["subject"]>("Maths");
  const [count, setCount] = useState(10);
  const [difficulty, setDifficulty] = useState<TestConfig["difficulty"]>("All");

  const subjects: TestConfig["subject"][] = [
    "Maths",
    "Physics",
    "Chemistry",
    "Mixed",
  ];
  const counts = [10, 20, 30];
  const difficulties: TestConfig["difficulty"][] = [
    "All",
    "Easy",
    "Medium",
    "Hard",
  ];

  const pill = (active: boolean, color: string) => ({
    background: active
      ? `linear-gradient(135deg, ${color}, ${theme.secondary})`
      : "rgba(255,255,255,0.07)",
    border: active ? "none" : "1px solid rgba(255,255,255,0.12)",
    color: active ? "#000" : "#F4F7FF",
    boxShadow: active ? `0 0 20px ${theme.glow}` : "none",
  });

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onNavigate={onNavigate} active="test-setup" />
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-2" style={{ color: "#F4F7FF" }}>
          Configure Your Test
        </h1>
        <p className="mb-10" style={{ color: "#AAB3C5" }}>
          Set up a personalized mock test based on PYQ patterns.
        </p>

        <div
          className="rounded-3xl p-8"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="mb-8">
            <p
              className="block text-sm font-bold mb-3"
              style={{ color: theme.primary }}
            >
              SELECT SUBJECT
            </p>
            <div className="flex flex-wrap gap-3">
              {subjects.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setSubject(s)}
                  className="px-5 py-2 rounded-full font-semibold text-sm transition-all"
                  style={pill(subject === s, theme.primary)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p
              className="block text-sm font-bold mb-3"
              style={{ color: theme.primary }}
            >
              NUMBER OF QUESTIONS
            </p>
            <div className="flex gap-3">
              {counts.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setCount(c)}
                  className="px-5 py-2 rounded-full font-semibold text-sm transition-all"
                  style={pill(count === c, theme.primary)}
                >
                  {c} Qs
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <p
              className="block text-sm font-bold mb-3"
              style={{ color: theme.primary }}
            >
              DIFFICULTY
            </p>
            <div className="flex flex-wrap gap-3">
              {difficulties.map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className="px-5 py-2 rounded-full font-semibold text-sm transition-all"
                  style={pill(difficulty === d, theme.primary)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onStart({ subject, count, difficulty })}
            className="w-full py-4 rounded-full font-black text-lg text-black transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              boxShadow: `0 0 30px ${theme.glow}`,
            }}
          >
            🚀 Start Test
          </button>
        </div>
      </div>
    </div>
  );
}
