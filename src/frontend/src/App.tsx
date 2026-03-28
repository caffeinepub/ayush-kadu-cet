import { useEffect, useState } from "react";
import { type Question, questions } from "./data/questions";
import { type Theme, getCurrentTheme } from "./data/themes";
import HomePage from "./pages/HomePage";
import PYQAnalyticsPage from "./pages/PYQAnalyticsPage";
import ResultsPage from "./pages/ResultsPage";
import SubjectsPage from "./pages/SubjectsPage";
import TestPage from "./pages/TestPage";
import TestSetupPage from "./pages/TestSetupPage";

export type View =
  | "home"
  | "subjects"
  | "test-setup"
  | "test"
  | "results"
  | "pyq-analytics";

export interface TestConfig {
  subject: "Maths" | "Physics" | "Chemistry" | "Mixed";
  count: number;
  difficulty: "All" | "Easy" | "Medium" | "Hard";
}

export interface TestResult {
  questions: Question[];
  answers: (number | null)[];
  timeTaken: number;
}

export default function App() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [view, setView] = useState<View>("home");
  const [testConfig, setTestConfig] = useState<TestConfig | null>(null);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const t = getCurrentTheme();
    setTheme(t);
    document.documentElement.style.setProperty("--theme-primary", t.primary);
    document.documentElement.style.setProperty(
      "--theme-secondary",
      t.secondary,
    );
    document.documentElement.style.setProperty("--theme-accent", t.accent);
    document.documentElement.style.setProperty("--theme-bg1", t.bg1);
    document.documentElement.style.setProperty("--theme-bg2", t.bg2);
    document.documentElement.style.setProperty("--theme-glow", t.glow);
  }, []);

  const startTest = (config: TestConfig) => {
    setTestConfig(config);
    setView("test");
  };

  const finishTest = (result: TestResult) => {
    setTestResult(result);
    setView("results");
  };

  const goTo = (v: View) => setView(v);

  if (!theme) return null;

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${theme.bg1} 0%, ${theme.bg2} 100%)`,
        minHeight: "100vh",
      }}
    >
      {view === "home" && (
        <HomePage
          theme={theme}
          onNavigate={goTo}
          onStartTest={() => goTo("test-setup")}
        />
      )}
      {view === "subjects" && <SubjectsPage theme={theme} onNavigate={goTo} />}
      {view === "test-setup" && (
        <TestSetupPage theme={theme} onNavigate={goTo} onStart={startTest} />
      )}
      {view === "test" && testConfig && (
        <TestPage
          theme={theme}
          config={testConfig}
          onNavigate={goTo}
          onFinish={finishTest}
        />
      )}
      {view === "results" && testResult && (
        <ResultsPage theme={theme} result={testResult} onNavigate={goTo} />
      )}
      {view === "pyq-analytics" && (
        <PYQAnalyticsPage theme={theme} onNavigate={goTo} />
      )}
    </div>
  );
}
