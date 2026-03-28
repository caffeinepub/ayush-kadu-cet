import { useState } from "react";
import type { View } from "../App";
import Navbar from "../components/Navbar";
import { getChapterFrequency } from "../data/questions";
import type { Theme } from "../data/themes";

interface Props {
  theme: Theme;
  onNavigate: (v: View) => void;
}

export default function SubjectsPage({ theme, onNavigate }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const subjects = [
    {
      name: "Maths" as const,
      icon: "∑",
      color: theme.primary,
      desc: "Calculus, Algebra, Probability & more",
    },
    {
      name: "Physics" as const,
      icon: "⚛",
      color: theme.secondary,
      desc: "Mechanics, Optics, Modern Physics & more",
    },
    {
      name: "Chemistry" as const,
      icon: "⚗",
      color: theme.accent,
      desc: "Organic, Inorganic & Physical Chemistry",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onNavigate={onNavigate} active="subjects" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-2" style={{ color: "#F4F7FF" }}>
          Subjects
        </h1>
        <p className="mb-10" style={{ color: "#AAB3C5" }}>
          Explore chapters and question distribution for each subject.
        </p>
        <div className="space-y-6">
          {subjects.map((s) => {
            const chapters = getChapterFrequency(s.name);
            const isOpen = expanded === s.name;
            return (
              <div
                key={s.name}
                className="rounded-3xl overflow-hidden"
                style={{
                  border: `1px solid ${s.color}33`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <button
                  type="button"
                  className="w-full p-6 flex items-center justify-between"
                  style={{ background: `${s.color}11` }}
                  onClick={() => setExpanded(isOpen ? null : s.name)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                      style={{
                        background: `${s.color}22`,
                        border: `1px solid ${s.color}55`,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div className="text-left">
                      <div
                        className="text-xl font-black"
                        style={{ color: "#F4F7FF" }}
                      >
                        {s.name}
                      </div>
                      <div className="text-sm" style={{ color: "#AAB3C5" }}>
                        {s.desc}
                      </div>
                    </div>
                  </div>
                  <span style={{ color: s.color, fontSize: "1.5rem" }}>
                    {isOpen ? "▲" : "▼"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="p-6"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    <div className="grid md:grid-cols-2 gap-3">
                      {chapters.map((c, i) => (
                        <div
                          key={c.chapter}
                          className="flex items-center justify-between p-3 rounded-2xl"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="text-xs font-black w-5 h-5 rounded-full flex items-center justify-center"
                              style={{
                                background:
                                  i < 3 ? s.color : "rgba(255,255,255,0.1)",
                                color: i < 3 ? "#000" : "#AAB3C5",
                              }}
                            >
                              {i + 1}
                            </span>
                            <span
                              className="text-sm font-medium"
                              style={{ color: "#F4F7FF" }}
                            >
                              {c.chapter}
                            </span>
                            {c.count >= 3 && (
                              <span
                                className="text-xs"
                                style={{ color: "#FF6B35" }}
                              >
                                🔥
                              </span>
                            )}
                          </div>
                          <span
                            className="text-xs font-bold px-2 py-1 rounded-full"
                            style={{
                              background: `${s.color}22`,
                              color: s.color,
                            }}
                          >
                            {c.count} Qs
                          </span>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate("test-setup")}
                      className="mt-6 w-full py-3 rounded-full font-bold text-sm text-black"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}, ${theme.secondary})`,
                        boxShadow: `0 0 15px ${s.color}44`,
                      }}
                    >
                      Practice {s.name} →
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
