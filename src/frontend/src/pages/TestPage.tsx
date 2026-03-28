import { useCallback, useEffect, useState } from "react";
import type { TestConfig, TestResult, View } from "../App";
import { type Question, questions } from "../data/questions";
import type { Theme } from "../data/themes";

interface Props {
  theme: Theme;
  config: TestConfig;
  onNavigate: (v: View) => void;
  onFinish: (result: TestResult) => void;
}

export default function TestPage({ theme, config, onFinish }: Props) {
  const [testQs] = useState<Question[]>(() => {
    let pool =
      config.subject === "Mixed"
        ? questions
        : questions.filter((q) => q.subject === config.subject);
    if (config.difficulty !== "All")
      pool = pool.filter((q) => q.difficulty === config.difficulty);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(config.count, shuffled.length));
  });

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    new Array(config.count).fill(null),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setSelected(answers[current]);
  }, [current, answers]);

  const selectOption = (idx: number) => {
    setSelected(idx);
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
  };

  const submitTest = useCallback(() => {
    onFinish({ questions: testQs, answers, timeTaken: seconds });
  }, [testQs, answers, seconds, onFinish]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const q = testQs[current];
  if (!q) return null;
  const progress = ((current + 1) / testQs.length) * 100;

  const optionStyle = (idx: number) => {
    const isSelected = selected === idx;
    return {
      background: isSelected ? `${theme.primary}22` : "rgba(255,255,255,0.04)",
      border: isSelected
        ? `2px solid ${theme.primary}`
        : "2px solid rgba(255,255,255,0.1)",
      color: "#F4F7FF",
      boxShadow: isSelected ? `0 0 15px ${theme.glow}` : "none",
    };
  };

  const unanswered = answers.filter((a) => a === null).length;

  return (
    <div className="min-h-screen flex flex-col" style={{ color: "#F4F7FF" }}>
      <div
        className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between"
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(0,0,0,0.5)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="font-bold text-sm" style={{ color: theme.primary }}>
          Q {current + 1} / {testQs.length}
        </div>
        <div className="flex-1 mx-6">
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                boxShadow: `0 0 8px ${theme.glow}`,
              }}
            />
          </div>
        </div>
        <div className="font-mono font-bold" style={{ color: "#AAB3C5" }}>
          ⏱ {formatTime(seconds)}
        </div>
      </div>

      <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-10">
        <div className="flex gap-2 mb-6 flex-wrap">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: `${theme.primary}22`, color: theme.primary }}
          >
            {q.subject}
          </span>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: "rgba(255,255,255,0.08)", color: "#AAB3C5" }}
          >
            {q.chapter}
          </span>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: `${theme.secondary}22`,
              color: theme.secondary,
            }}
          >
            PYQ {q.year}
          </span>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background:
                q.difficulty === "Hard"
                  ? "#ff4f4f22"
                  : q.difficulty === "Medium"
                    ? "#ffaa0022"
                    : "#22e64822",
              color:
                q.difficulty === "Hard"
                  ? "#ff4f4f"
                  : q.difficulty === "Medium"
                    ? "#ffaa00"
                    : "#22e648",
            }}
          >
            {q.difficulty}
          </span>
        </div>

        <div
          className="rounded-3xl p-8 mb-6"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          <p className="text-lg font-medium leading-relaxed">{q.question}</p>
        </div>

        <div className="space-y-3 mb-8">
          {q.options.map((opt, idx) => (
            <button
              type="button"
              key={`${q.id}-${idx}`}
              onClick={() => selectOption(idx)}
              className="w-full text-left p-4 rounded-2xl font-medium text-sm transition-all hover:scale-[1.01]"
              style={optionStyle(idx)}
            >
              <span
                className="inline-block w-7 h-7 rounded-full text-center leading-7 font-bold mr-3 text-xs"
                style={{
                  background:
                    selected === idx ? theme.primary : "rgba(255,255,255,0.1)",
                  color: selected === idx ? "#000" : "#AAB3C5",
                }}
              >
                {String.fromCharCode(65 + idx)}
              </span>
              {opt}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="px-6 py-3 rounded-full font-bold text-sm transition-all disabled:opacity-30"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#F4F7FF",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            ← Previous
          </button>

          {current < testQs.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrent((c) => c + 1)}
              className="px-6 py-3 rounded-full font-bold text-sm text-black transition-transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                boxShadow: `0 0 15px ${theme.glow}`,
              }}
            >
              Next →
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowConfirm(true)}
              className="px-6 py-3 rounded-full font-bold text-sm text-black transition-transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}, ${theme.secondary})`,
                boxShadow: `0 0 15px ${theme.glow}`,
              }}
            >
              Submit Test 🏁
            </button>
          )}
        </div>

        <p className="text-center mt-6 text-sm" style={{ color: "#AAB3C5" }}>
          {answers.filter((a) => a !== null).length} of {testQs.length} answered
        </p>
      </div>

      {showConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
        >
          <div
            className="rounded-3xl p-8 max-w-sm w-full mx-4"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h3 className="text-xl font-black mb-2">Submit Test?</h3>
            <p className="mb-6 text-sm" style={{ color: "#AAB3C5" }}>
              {unanswered > 0
                ? `You have ${unanswered} unanswered questions.`
                : "All questions answered!"}
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3 rounded-full font-bold text-sm"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#F4F7FF",
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={submitTest}
                className="flex-1 py-3 rounded-full font-bold text-sm text-black"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                }}
              >
                Yes, Submit!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
