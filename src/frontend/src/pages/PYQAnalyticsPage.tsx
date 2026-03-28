import { useState } from "react";
import type { View } from "../App";
import Navbar from "../components/Navbar";
import { getChapterFrequency, getYearFrequency } from "../data/questions";
import type { Theme } from "../data/themes";

interface Props {
  theme: Theme;
  onNavigate: (v: View) => void;
}

type Subject = "Maths" | "Physics" | "Chemistry";

export default function PYQAnalyticsPage({ theme, onNavigate }: Props) {
  const [subject, setSubject] = useState<Subject>("Maths");
  const yearData = getYearFrequency(subject);
  const chapterData = getChapterFrequency(subject);
  const maxYear = Math.max(...yearData.map((d) => d.count), 1);

  const glass = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
  };
  const subjectColors: Record<Subject, string> = {
    Maths: theme.primary,
    Physics: theme.secondary,
    Chemistry: theme.accent,
  };

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onNavigate={onNavigate} active="pyq-analytics" />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-2" style={{ color: "#F4F7FF" }}>
          PYQ Analytics
        </h1>
        <p className="mb-8" style={{ color: "#AAB3C5" }}>
          Frequency analysis of MHT-CET questions from 2020–2025.
        </p>

        <div className="flex gap-3 mb-10">
          {(["Maths", "Physics", "Chemistry"] as Subject[]).map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setSubject(s)}
              className="px-6 py-3 rounded-full font-bold text-sm transition-all"
              style={{
                background:
                  subject === s
                    ? `linear-gradient(135deg, ${subjectColors[s]}, ${theme.secondary})`
                    : "rgba(255,255,255,0.07)",
                color: subject === s ? "#000" : "#F4F7FF",
                border:
                  subject === s ? "none" : "1px solid rgba(255,255,255,0.12)",
                boxShadow: subject === s ? `0 0 20px ${theme.glow}` : "none",
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="rounded-3xl p-8 mb-8" style={glass}>
          <h2 className="text-xl font-black mb-6" style={{ color: "#F4F7FF" }}>
            Year-wise Question Frequency ({subject})
          </h2>
          <div className="flex items-end gap-4 h-48">
            {yearData.map((d) => (
              <div
                key={d.year}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: subjectColors[subject] }}
                >
                  {d.count}
                </span>
                <div
                  className="w-full rounded-t-xl transition-all"
                  style={{
                    height: `${(d.count / maxYear) * 160}px`,
                    minHeight: "4px",
                    background: `linear-gradient(180deg, ${subjectColors[subject]}, ${theme.secondary}88)`,
                    boxShadow: `0 0 10px ${theme.glow}`,
                  }}
                />
                <span className="text-xs" style={{ color: "#AAB3C5" }}>
                  {d.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl p-8 mb-8" style={glass}>
          <h2 className="text-xl font-black mb-6" style={{ color: "#F4F7FF" }}>
            Chapter-wise Weightage
          </h2>
          <div className="space-y-3">
            {chapterData.map((c, i) => (
              <div
                key={c.chapter}
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                  style={{
                    background:
                      i < 3 ? subjectColors[subject] : "rgba(255,255,255,0.1)",
                    color: i < 3 ? "#000" : "#AAB3C5",
                  }}
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-bold text-sm"
                      style={{ color: "#F4F7FF" }}
                    >
                      {c.chapter}
                    </span>
                    {c.count >= 3 && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-bold"
                        style={{
                          background: "#FF6B3522",
                          color: "#FF6B35",
                          border: "1px solid #FF6B3544",
                        }}
                      >
                        🔥 High Yield
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-1 h-1.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(c.count / chapterData[0].count) * 100}%`,
                          background: `linear-gradient(90deg, ${subjectColors[subject]}, ${theme.secondary})`,
                        }}
                      />
                    </div>
                    <span
                      className="text-xs font-bold"
                      style={{ color: subjectColors[subject] }}
                    >
                      {c.count} Qs
                    </span>
                  </div>
                  <div className="flex gap-1 mt-1">
                    {c.years.map((y) => (
                      <span
                        key={y}
                        className="text-xs px-1.5 py-0.5 rounded"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          color: "#AAB3C5",
                        }}
                      >
                        {y}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => onNavigate("test-setup")}
            className="px-8 py-4 rounded-full font-black text-black transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              boxShadow: `0 0 30px ${theme.glow}`,
            }}
          >
            🚀 Practice {subject} Now
          </button>
        </div>
      </div>
    </div>
  );
}
