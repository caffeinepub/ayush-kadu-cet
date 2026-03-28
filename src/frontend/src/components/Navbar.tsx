import type { View } from "../App";
import type { Theme } from "../data/themes";

interface NavbarProps {
  theme: Theme;
  onNavigate: (v: View) => void;
  active?: View;
}

export default function Navbar({ theme, onNavigate, active }: NavbarProps) {
  const links: { label: string; view: View }[] = [
    { label: "Home", view: "home" },
    { label: "Subjects", view: "subjects" },
    { label: "Mock Tests", view: "test-setup" },
    { label: "PYQ Analytics", view: "pyq-analytics" },
  ];

  return (
    <nav
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(0,0,0,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
      className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
    >
      <button
        type="button"
        className="flex flex-col leading-tight cursor-pointer bg-transparent border-0 p-0"
        onClick={() => onNavigate("home")}
      >
        <span
          className="text-lg font-black tracking-wide"
          style={{
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: `drop-shadow(0 0 8px ${theme.glow})`,
          }}
        >
          Ayush Kadu's
        </span>
        <span
          className="text-2xl font-black tracking-tight"
          style={{ color: theme.primary, textShadow: `0 0 20px ${theme.glow}` }}
        >
          CET.com
        </span>
      </button>
      <div className="hidden md:flex gap-6">
        {links.map((l) => (
          <button
            type="button"
            key={l.view}
            onClick={() => onNavigate(l.view)}
            className="text-sm font-medium transition-all"
            style={{ color: active === l.view ? theme.primary : "#AAB3C5" }}
          >
            {l.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onNavigate("test-setup")}
        className="px-4 py-2 rounded-full text-sm font-bold text-black"
        style={{
          background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
          boxShadow: `0 0 20px ${theme.glow}`,
        }}
      >
        Start Free
      </button>
    </nav>
  );
}
