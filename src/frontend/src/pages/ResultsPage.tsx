import { useState } from "react";
import type { TestResult, View } from "../App";
import Navbar from "../components/Navbar";
import type { Theme } from "../data/themes";

interface Props {
  theme: Theme;
  result: TestResult;
  onNavigate: (v: View) => void;
}

function getGrade(pct: number) {
  if (pct >= 90)
    return { emoji: "🏆", label: "Excellent! MHT-CET Ready", color: "#FFD700" };
  if (pct >= 75)
    return { emoji: "⭐", label: "Great Performance!", color: "#18D7FF" };
  if (pct >= 60)
    return { emoji: "👍", label: "Good, Keep Pushing!", color: "#22E6C8" };
  if (pct >= 45)
    return { emoji: "📚", label: "Needs More Practice", color: "#FFB347" };
  return {
    emoji: "💪",
    label: "Don't Give Up! Keep Studying",
    color: "#FF6B6B",
  };
}

function getStudyTime(pct: number) {
  if (pct >= 90) return "30 min daily revision";
  if (pct >= 75) return "1 hour focused practice";
  if (pct >= 60) return "2 hours daily study";
  if (pct >= 45) return "3 hours dedicated study";
  return "4+ hours intensive preparation";
}

export default function ResultsPage({ theme, result, onNavigate }: Props) {
  const [showReview, setShowReview] = useState(false);
  const { questions, answers, timeTaken } = result;

  const correct = answers.filter(
    (a, i) => a === questions[i].correctIndex,
  ).length;
  const wrong = answers.filter(
    (a, i) => a !== null && a !== questions[i].correctIndex,
  ).length;
  const skipped = answers.filter((a) => a === null).length;
  const pct = Math.round((correct / questions.length) * 100);
  const grade = getGrade(pct);
  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;

  const wrongByChapter: Record<
    string,
    { count: number; tips: string[]; subject: string }
  > = {};
  for (let i = 0; i < answers.length; i++) {
    const a = answers[i];
    if (a !== null && a !== questions[i].correctIndex) {
      const ch = questions[i].chapter;
      if (!wrongByChapter[ch])
        wrongByChapter[ch] = {
          count: 0,
          tips: [],
          subject: questions[i].subject,
        };
      wrongByChapter[ch].count++;
      if (!wrongByChapter[ch].tips.includes(questions[i].improvementTip)) {
        wrongByChapter[ch].tips.push(questions[i].improvementTip);
      }
    }
  }

  const weakChapters = Object.entries(wrongByChapter).sort(
    (a, b) => b[1].count - a[1].count,
  );
  const top3 = weakChapters.slice(0, 3);

  const glass = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
  };

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onNavigate={onNavigate} />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Score Header */}
        <div
          className="rounded-3xl p-10 mb-8 text-center"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${theme.primary}18, transparent 70%)`,
            border: `1px solid ${grade.color}44`,
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="text-7xl mb-4">{grade.emoji}</div>
          <div
            className="text-8xl font-black mb-2"
            style={{
              color: grade.color,
              textShadow: `0 0 30px ${grade.color}66`,
            }}
          >
            {correct}
            <span className="text-4xl" style={{ color: "#AAB3C5" }}>
              /{questions.length}
            </span>
          </div>
          <div
            className="text-3xl font-black mb-4"
            style={{ color: grade.color }}
          >
            {pct}%
          </div>
          <div
            className="inline-block px-6 py-3 rounded-full font-bold text-lg"
            style={{
              background: `${grade.color}22`,
              color: grade.color,
              border: `2px solid ${grade.color}66`,
              boxShadow: `0 0 20px ${grade.color}44`,
            }}
          >
            {grade.emoji} {grade.label}
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Correct", val: String(correct), color: "#22E648" },
            { label: "Wrong", val: String(wrong), color: "#FF4F4F" },
            { label: "Skipped", val: String(skipped), color: "#AAB3C5" },
            { label: "Time", val: `${mins}m ${secs}s`, color: theme.primary },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 text-center"
              style={glass}
            >
              <div className="text-3xl font-black" style={{ color: s.color }}>
                {s.val}
              </div>
              <div
                className="text-xs font-semibold mt-1"
                style={{ color: "#AAB3C5" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Study Plan */}
        {weakChapters.length > 0 && (
          <div
            className="rounded-3xl p-8 mb-8"
            style={{ ...glass, border: `1px solid ${theme.primary}33` }}
          >
            <h2
              className="text-2xl font-black mb-2"
              style={{ color: "#F4F7FF" }}
            >
              📋 Your Personalized Study Plan
            </h2>
            <p className="text-sm mb-6" style={{ color: "#AAB3C5" }}>
              Based on your wrong answers, here's exactly what to focus on:
            </p>

            <div
              className="flex items-center gap-3 mb-6 p-4 rounded-2xl"
              style={{
                background: `${theme.primary}11`,
                border: `1px solid ${theme.primary}33`,
              }}
            >
              <span className="text-2xl">⏰</span>
              <div>
                <div className="font-bold" style={{ color: theme.primary }}>
                  Recommended Daily Study Time
                </div>
                <div className="text-sm" style={{ color: "#AAB3C5" }}>
                  {getStudyTime(pct)}
                </div>
              </div>
            </div>

            {top3.length > 0 && (
              <div className="mb-6">
                <h3
                  className="text-sm font-black mb-4"
                  style={{ color: theme.secondary }}
                >
                  🎯 TOP {top3.length} PRIORITIES
                </h3>
                <div className="space-y-4">
                  {top3.map(([chapter, data], i) => (
                    <div
                      key={chapter}
                      className="rounded-2xl p-5"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                            style={{ background: theme.primary, color: "#000" }}
                          >
                            {i + 1}
                          </span>
                          <span
                            className="font-bold"
                            style={{ color: "#F4F7FF" }}
                          >
                            {chapter}
                          </span>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              color: "#AAB3C5",
                              background: "rgba(255,255,255,0.08)",
                            }}
                          >
                            {data.subject}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {data.count >= 2 && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-bold"
                              style={{
                                background: "#FF4F4F22",
                                color: "#FF4F4F",
                                border: "1px solid #FF4F4F44",
                              }}
                            >
                              🔴 High Priority
                            </span>
                          )}
                          <span
                            className="text-sm font-bold"
                            style={{ color: "#FF4F4F" }}
                          >
                            {data.count} wrong
                          </span>
                        </div>
                      </div>
                      <p
                        className="text-sm leading-relaxed mt-2 pl-9"
                        style={{ color: "#AAB3C5" }}
                      >
                        {data.tips[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {weakChapters.length > 3 && (
              <div>
                <h3
                  className="text-sm font-black mb-3"
                  style={{ color: "#AAB3C5" }}
                >
                  ALSO REVISE
                </h3>
                <div className="flex flex-wrap gap-2">
                  {weakChapters.slice(3).map(([chapter, data]) => (
                    <span
                      key={chapter}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: `${theme.secondary}22`,
                        color: theme.secondary,
                        border: `1px solid ${theme.secondary}44`,
                      }}
                    >
                      {chapter} ({data.count})
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Perfect score message */}
        {weakChapters.length === 0 && (
          <div
            className="rounded-3xl p-8 mb-8 text-center"
            style={{ background: "#22E64811", border: "1px solid #22E64844" }}
          >
            <div className="text-4xl mb-3">🎉</div>
            <h2
              className="text-xl font-black mb-2"
              style={{ color: "#22E648" }}
            >
              Perfect or Near-Perfect Score!
            </h2>
            <p style={{ color: "#AAB3C5" }}>
              Keep maintaining this level. Try a harder difficulty or mixed
              subject test next!
            </p>
          </div>
        )}

        {/* General instructions */}
        <div className="rounded-3xl p-8 mb-8" style={glass}>
          <h2 className="text-xl font-black mb-4" style={{ color: "#F4F7FF" }}>
            💡 General Tips to Improve
          </h2>
          <div className="space-y-3">
            {[
              {
                icon: "📅",
                tip: "Solve at least one full mock test daily in the 30 days before MHT-CET.",
              },
              {
                icon: "⏱",
                tip: "During actual exam: spend max 90 seconds per question. Skip and return.",
              },
              {
                icon: "🔁",
                tip: "Revise wrong answers immediately after each test — don't just note them.",
              },
              {
                icon: "📊",
                tip: "Check PYQ Analytics to see which chapters appear most — prioritize them.",
              },
              {
                icon: "✍️",
                tip: "Write formulas by hand every morning. Muscle memory helps under exam pressure.",
              },
            ].map(({ icon, tip }) => (
              <div key={tip} className="flex items-start gap-3">
                <span className="text-lg mt-0.5">{icon}</span>
                <p className="text-sm" style={{ color: "#AAB3C5" }}>
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Question Review Toggle */}
        <div
          className="rounded-3xl overflow-hidden mb-8"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <button
            type="button"
            onClick={() => setShowReview(!showReview)}
            className="w-full p-6 flex justify-between items-center font-bold"
            style={{ background: "rgba(255,255,255,0.05)", color: "#F4F7FF" }}
          >
            <span>📝 Review All Questions</span>
            <span style={{ color: theme.primary }}>
              {showReview ? "▲ Hide" : "▼ Show"}
            </span>
          </button>
          {showReview && (
            <div
              className="divide-y"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              {questions.map((q, i) => {
                const userAns = answers[i];
                const isCorrect = userAns === q.correctIndex;
                const isSkipped = userAns === null;
                const statusIcon = isSkipped ? "⬜" : isCorrect ? "✅" : "❌";
                return (
                  <div
                    key={q.id}
                    className="p-6"
                    style={{ background: "rgba(0,0,0,0.2)" }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl mt-0.5">{statusIcon}</span>
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.08)",
                              color: "#AAB3C5",
                            }}
                          >
                            Q{i + 1}
                          </span>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: `${theme.primary}22`,
                              color: theme.primary,
                            }}
                          >
                            {q.chapter}
                          </span>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              color: "#AAB3C5",
                            }}
                          >
                            PYQ {q.year}
                          </span>
                        </div>
                        <p
                          className="text-sm font-medium mb-3"
                          style={{ color: "#F4F7FF" }}
                        >
                          {q.question}
                        </p>
                        <div className="space-y-1 mb-3">
                          {q.options.map((opt, oi) => (
                            <div
                              key={`${q.id}-opt-${oi}`}
                              className="text-xs px-3 py-1.5 rounded-xl"
                              style={{
                                background:
                                  oi === q.correctIndex
                                    ? "#22E64822"
                                    : userAns === oi && !isCorrect
                                      ? "#FF4F4F22"
                                      : "transparent",
                                color:
                                  oi === q.correctIndex
                                    ? "#22E648"
                                    : userAns === oi && !isCorrect
                                      ? "#FF4F4F"
                                      : "#AAB3C5",
                                border:
                                  oi === q.correctIndex
                                    ? "1px solid #22E64844"
                                    : "none",
                              }}
                            >
                              {String.fromCharCode(65 + oi)}. {opt}
                              {oi === q.correctIndex && " ✓"}
                              {userAns === oi &&
                                !isCorrect &&
                                " ✗ (your answer)"}
                            </div>
                          ))}
                        </div>
                        {!isCorrect && (
                          <>
                            <p
                              className="text-xs p-3 rounded-xl mb-2"
                              style={{
                                background: "#22E64811",
                                color: "#22E648",
                              }}
                            >
                              💡 <strong>Explanation:</strong> {q.explanation}
                            </p>
                            <p
                              className="text-xs p-3 rounded-xl"
                              style={{
                                background: `${theme.primary}11`,
                                color: theme.primary,
                              }}
                            >
                              🎯 <strong>How to improve:</strong>{" "}
                              {q.improvementTip}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            onClick={() => onNavigate("test-setup")}
            className="px-8 py-4 rounded-full font-bold text-black transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              boxShadow: `0 0 25px ${theme.glow}`,
            }}
          >
            🔄 New Test
          </button>
          <button
            type="button"
            onClick={() => onNavigate("pyq-analytics")}
            className="px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
            style={{
              color: theme.primary,
              border: `2px solid ${theme.primary}`,
              background: `${theme.primary}11`,
            }}
          >
            📊 PYQ Analytics
          </button>
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
            style={{
              color: "#AAB3C5",
              border: "2px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  );
}
