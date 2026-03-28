export interface Question {
  id: number;
  subject: "Maths" | "Physics" | "Chemistry";
  chapter: string;
  year: number;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  improvementTip: string;
}

export const questions: Question[] = [
  // ===== MATHS =====
  {
    id: 1,
    subject: "Maths",
    chapter: "Integration",
    year: 2022,
    difficulty: "Medium",
    question: "∫(1/(1+x²)) dx is equal to:",
    options: ["tan⁻¹x + C", "sin⁻¹x + C", "sec⁻¹x + C", "cot⁻¹x + C"],
    correctIndex: 0,
    explanation:
      "The standard integral ∫1/(1+x²)dx = tan⁻¹x + C is a fundamental formula.",
    improvementTip:
      "Memorize all 6 inverse trig integrals. Write them daily for a week. Focus on ∫1/(1+x²), ∫1/√(1-x²), ∫1/(x√(x²-1)).",
  },
  {
    id: 2,
    subject: "Maths",
    chapter: "Integration",
    year: 2023,
    difficulty: "Hard",
    question: "∫x·eˣ dx equals:",
    options: ["eˣ(x-1) + C", "eˣ(x+1) + C", "xeˣ + C", "eˣ - x + C"],
    correctIndex: 0,
    explanation:
      "Using integration by parts: ∫x·eˣdx = x·eˣ - ∫eˣdx = xeˣ - eˣ + C = eˣ(x-1) + C.",
    improvementTip:
      "Practice ILATE rule for integration by parts: Inverse trig → Log → Algebraic → Trig → Exponential. Solve 15 IBP problems.",
  },
  {
    id: 3,
    subject: "Maths",
    chapter: "Integration",
    year: 2024,
    difficulty: "Medium",
    question: "∫sin²x dx equals:",
    options: [
      "x/2 - sin2x/4 + C",
      "x/2 + sin2x/4 + C",
      "-cosx·sinx + C",
      "sinx - cosx + C",
    ],
    correctIndex: 0,
    explanation:
      "Use identity: sin²x = (1-cos2x)/2. So ∫sin²x dx = ∫(1-cos2x)/2 dx = x/2 - sin2x/4 + C.",
    improvementTip:
      "Learn trig identities for integration: sin²x=(1-cos2x)/2, cos²x=(1+cos2x)/2. These appear every year.",
  },
  {
    id: 4,
    subject: "Maths",
    chapter: "Probability",
    year: 2023,
    difficulty: "Medium",
    question: "If P(A) = 0.4, P(B) = 0.3, P(A∩B) = 0.1, then P(A∪B) is:",
    options: ["0.6", "0.7", "0.5", "0.8"],
    correctIndex: 0,
    explanation: "P(A∪B) = P(A) + P(B) - P(A∩B) = 0.4 + 0.3 - 0.1 = 0.6.",
    improvementTip:
      "Master addition theorem of probability. Always use P(A∪B) = P(A)+P(B)-P(A∩B). Draw Venn diagrams to visualize.",
  },
  {
    id: 5,
    subject: "Maths",
    chapter: "Probability",
    year: 2024,
    difficulty: "Hard",
    question: "Two dice are thrown. The probability that the sum is 7 is:",
    options: ["1/6", "1/36", "7/36", "5/36"],
    correctIndex: 0,
    explanation:
      "Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes. Total = 36. P = 6/36 = 1/6.",
    improvementTip:
      "Practice dice problems by listing all sample space outcomes. The sum 7 with two dice is the most frequent — 6 ways out of 36.",
  },
  {
    id: 6,
    subject: "Maths",
    chapter: "Matrices & Determinants",
    year: 2022,
    difficulty: "Medium",
    question: "If A = [[1,2],[3,4]], then det(A) is:",
    options: ["-2", "2", "10", "-10"],
    correctIndex: 0,
    explanation: "det(A) = (1×4) - (2×3) = 4 - 6 = -2.",
    improvementTip:
      "Practice 2×2 and 3×3 determinants daily. For 2×2: ad-bc. For 3×3 use cofactor expansion. Do 10 problems per day.",
  },
  {
    id: 7,
    subject: "Maths",
    chapter: "Matrices & Determinants",
    year: 2025,
    difficulty: "Hard",
    question: "The inverse of matrix A = [[2,1],[5,3]] is:",
    options: [
      "[[3,-1],[-5,2]]",
      "[[-3,1],[5,-2]]",
      "[[3,1],[5,2]]",
      "[[2,-1],[-5,3]]",
    ],
    correctIndex: 0,
    explanation: "det(A) = 6-5 = 1. A⁻¹ = (1/det)·adjA = [[3,-1],[-5,2]].",
    improvementTip:
      "Matrix inverse formula: A⁻¹ = (1/det(A))·adj(A). First find det, then swap diagonals and negate off-diagonals for 2×2.",
  },
  {
    id: 8,
    subject: "Maths",
    chapter: "Vectors",
    year: 2021,
    difficulty: "Medium",
    question: "If a = 2î + 3ĵ + 6k̂, then |a| is:",
    options: ["7", "11", "√49", "both A and C"],
    correctIndex: 3,
    explanation:
      "|a| = √(4+9+36) = √49 = 7. Both A and C are correct (7 = √49).",
    improvementTip:
      "Magnitude of vector formula: |a| = √(x²+y²+z²). Practice with 3D vectors every day before the exam.",
  },
  {
    id: 9,
    subject: "Maths",
    chapter: "Vectors",
    year: 2023,
    difficulty: "Hard",
    question: "a⃗·b⃗ = 0 implies:",
    options: ["a⃗ ⊥ b⃗", "a⃗ ∥ b⃗", "|a⃗| = |b⃗|", "a⃗ = b⃗"],
    correctIndex: 0,
    explanation:
      "Dot product = 0 means cos θ = 0, so θ = 90°, meaning the vectors are perpendicular.",
    improvementTip:
      "Remember: dot product = 0 → perpendicular; cross product = 0 → parallel. These properties appear frequently in MHT-CET.",
  },
  {
    id: 10,
    subject: "Maths",
    chapter: "3D Geometry",
    year: 2024,
    difficulty: "Medium",
    question:
      "Direction cosines of the line making equal angles with coordinate axes are:",
    options: ["(1/√3, 1/√3, 1/√3)", "(1,1,1)", "(1/3,1/3,1/3)", "(√3,√3,√3)"],
    correctIndex: 0,
    explanation:
      "If line makes equal angles, l=m=n. Using l²+m²+n²=1 → 3l²=1 → l=1/√3. So (1/√3,1/√3,1/√3).",
    improvementTip:
      "Key identity for direction cosines: l²+m²+n²=1 always. Use this to find unknown direction cosines.",
  },
  {
    id: 11,
    subject: "Maths",
    chapter: "Differential Equations",
    year: 2022,
    difficulty: "Medium",
    question: "Order of the differential equation d²y/dx² + dy/dx + y = 0 is:",
    options: ["2", "1", "3", "0"],
    correctIndex: 0,
    explanation: "Order = highest derivative present = 2 (d²y/dx²).",
    improvementTip:
      "Order = highest derivative, Degree = power of highest derivative (when no fractional powers). Practice identifying these.",
  },
  {
    id: 12,
    subject: "Maths",
    chapter: "Limits & Continuity",
    year: 2021,
    difficulty: "Medium",
    question: "lim(x→0) sinx/x equals:",
    options: ["1", "0", "∞", "undefined"],
    correctIndex: 0,
    explanation:
      "This is a standard limit. lim(x→0) sinx/x = 1 (x in radians).",
    improvementTip:
      "Memorize standard limits: sinx/x=1, tanx/x=1, (eˣ-1)/x=1, (aˣ-1)/x=lna as x→0. These repeat every year.",
  },
  {
    id: 13,
    subject: "Maths",
    chapter: "Limits & Continuity",
    year: 2020,
    difficulty: "Hard",
    question: "lim(x→0) (1+x)^(1/x) equals:",
    options: ["e", "1", "0", "∞"],
    correctIndex: 0,
    explanation:
      "This is the definition of e. lim(x→0)(1+x)^(1/x) = e ≈ 2.718.",
    improvementTip:
      "Key limit: lim(x→0)(1+x)^(1/x) = e. Also lim(n→∞)(1+1/n)ⁿ = e. These are favorite MHT-CET questions.",
  },
  {
    id: 14,
    subject: "Maths",
    chapter: "Complex Numbers",
    year: 2023,
    difficulty: "Medium",
    question: "If z = 3 + 4i, then |z| is:",
    options: ["5", "7", "25", "1"],
    correctIndex: 0,
    explanation: "|z| = √(3²+4²) = √(9+16) = √25 = 5.",
    improvementTip:
      "Modulus of complex number: |a+bi| = √(a²+b²). The 3-4-5 Pythagorean triple appears very often in CET complex number problems.",
  },
  {
    id: 15,
    subject: "Maths",
    chapter: "Conic Sections",
    year: 2024,
    difficulty: "Hard",
    question: "The eccentricity of a circle is:",
    options: ["0", "1", "greater than 1", "between 0 and 1"],
    correctIndex: 0,
    explanation:
      "A circle has eccentricity e = 0. Ellipse: 0<e<1, Parabola: e=1, Hyperbola: e>1.",
    improvementTip:
      "Remember eccentricity values: Circle=0, Ellipse=0 to 1, Parabola=1, Hyperbola>1. Draw and label all four conics.",
  },
  {
    id: 16,
    subject: "Maths",
    chapter: "Integration",
    year: 2021,
    difficulty: "Easy",
    question: "∫eˣ dx equals:",
    options: ["eˣ + C", "xeˣ + C", "eˣ/x + C", "eˣ·x + C"],
    correctIndex: 0,
    explanation: "The integral of eˣ is itself: ∫eˣdx = eˣ + C.",
    improvementTip:
      "eˣ is its own integral and derivative. This is a fundamental property. Never forget it.",
  },
  {
    id: 17,
    subject: "Maths",
    chapter: "Probability",
    year: 2022,
    difficulty: "Medium",
    question: "Bayes' theorem is used to find:",
    options: [
      "Posterior probability",
      "Prior probability",
      "Joint probability",
      "Marginal probability",
    ],
    correctIndex: 0,
    explanation:
      "Bayes' theorem: P(A|B) = P(B|A)·P(A)/P(B). It gives posterior (updated) probability.",
    improvementTip:
      "Practice Bayes' theorem word problems. Identify prior, likelihood, and posterior. Solve 10 such problems from 2019-2024 papers.",
  },
  {
    id: 18,
    subject: "Maths",
    chapter: "3D Geometry",
    year: 2022,
    difficulty: "Medium",
    question: "The distance between points A(1,2,3) and B(4,6,3) is:",
    options: ["5", "√50", "7", "√74"],
    correctIndex: 0,
    explanation: "d = √((4-1)²+(6-2)²+(3-3)²) = √(9+16+0) = √25 = 5.",
    improvementTip:
      "3D distance formula: √((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²). Memorize it cold. It appears in every paper.",
  },
  {
    id: 19,
    subject: "Maths",
    chapter: "Matrices & Determinants",
    year: 2023,
    difficulty: "Easy",
    question: "A matrix A is symmetric if:",
    options: ["Aᵀ = A", "Aᵀ = -A", "A² = A", "A = A⁻¹"],
    correctIndex: 0,
    explanation:
      "A symmetric matrix satisfies Aᵀ = A (transpose equals original). Skew-symmetric: Aᵀ = -A.",
    improvementTip:
      "Know matrix types: Symmetric(Aᵀ=A), Skew-symmetric(Aᵀ=-A), Orthogonal(AᵀA=I), Idempotent(A²=A). These definitions are tested directly.",
  },
  {
    id: 20,
    subject: "Maths",
    chapter: "Differential Equations",
    year: 2024,
    difficulty: "Hard",
    question: "General solution of dy/dx = y is:",
    options: ["y = Ceˣ", "y = Ce⁻ˣ", "y = Cx", "y = eˣ + C"],
    correctIndex: 0,
    explanation:
      "Separating: dy/y = dx → ln|y| = x + k → y = Ceˣ where C = eᵏ.",
    improvementTip:
      "Variable separable method: bring all y terms one side, all x terms other side, then integrate both sides. Practice 15 variable separable DEs.",
  },

  // ===== PHYSICS =====
  {
    id: 21,
    subject: "Physics",
    chapter: "Rotational Motion",
    year: 2022,
    difficulty: "Medium",
    question: "Moment of inertia of a solid sphere about its diameter is:",
    options: ["(2/5)MR²", "(2/3)MR²", "MR²", "(1/2)MR²"],
    correctIndex: 0,
    explanation:
      "For a solid sphere about diameter: I = (2/5)MR². This is a standard result.",
    improvementTip:
      "Memorize all MI formulas: solid sphere=(2/5)MR², hollow sphere=(2/3)MR², disk=(1/2)MR², ring=MR², rod=ML²/12. Make a table and revise daily.",
  },
  {
    id: 22,
    subject: "Physics",
    chapter: "Rotational Motion",
    year: 2023,
    difficulty: "Hard",
    question:
      "A body rolls without slipping. The ratio of translational KE to total KE for a solid cylinder is:",
    options: ["2/3", "1/2", "3/4", "2/5"],
    correctIndex: 0,
    explanation:
      "KE_trans/KE_total = 1/(1+k²/R²). For solid cylinder k²/R²=1/2, so ratio = 1/(3/2) = 2/3.",
    improvementTip:
      "Rolling motion: total KE = (1/2)mv²(1+k²/R²). Memorize k²/R² for each body: solid sphere=2/5, solid cylinder=1/2, ring=1.",
  },
  {
    id: 23,
    subject: "Physics",
    chapter: "Rotational Motion",
    year: 2024,
    difficulty: "Medium",
    question: "Angular momentum L = Iω. If I doubles and ω halves, L:",
    options: ["remains same", "doubles", "halves", "quadruples"],
    correctIndex: 0,
    explanation:
      "L = Iω = (2I)(ω/2) = Iω. Same. Conservation of angular momentum.",
    improvementTip:
      "Angular momentum conservation: when no external torque, L = Iω = constant. Ice skater pulling arms in — ω increases as I decreases.",
  },
  {
    id: 24,
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    year: 2021,
    difficulty: "Medium",
    question: "Faraday's law states that induced EMF is equal to:",
    options: ["-dΦ/dt", "dΦ/dt", "Φ/t", "-Φ·t"],
    correctIndex: 0,
    explanation:
      "Faraday's law: ε = -dΦ/dt (negative sign from Lenz's law - opposes change in flux).",
    improvementTip:
      "Faraday's law: EMF = -N·dΦ/dt for N turns. The negative sign is Lenz's law. Always include it in equations.",
  },
  {
    id: 25,
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    year: 2022,
    difficulty: "Hard",
    question:
      "Self-inductance of a solenoid with n turns/meter, length l, area A is:",
    options: ["μ₀n²lA", "μ₀nlA", "μ₀n²A/l", "μ₀nA"],
    correctIndex: 0,
    explanation: "L = μ₀n²V = μ₀n²lA where n = turns per unit length.",
    improvementTip:
      "Solenoid formulas: B=μ₀nI, L=μ₀n²lA (n=turns/length). Distinguish between N (total turns) and n (turns per length = N/l).",
  },
  {
    id: 26,
    subject: "Physics",
    chapter: "Electrostatics",
    year: 2022,
    difficulty: "Medium",
    question:
      "Electric field inside a conductor in electrostatic equilibrium is:",
    options: ["Zero", "Maximum", "σ/ε₀", "σ/2ε₀"],
    correctIndex: 0,
    explanation:
      "Inside a conductor in electrostatic equilibrium, free charges redistribute so E = 0 inside.",
    improvementTip:
      "Properties of conductors: E=0 inside, all charge on surface, E perpendicular to surface outside = σ/ε₀.",
  },
  {
    id: 27,
    subject: "Physics",
    chapter: "Electrostatics",
    year: 2023,
    difficulty: "Hard",
    question:
      "Capacitance of a parallel plate capacitor with dielectric constant K is:",
    options: ["Kε₀A/d", "ε₀A/Kd", "ε₀A/d", "Kε₀/Ad"],
    correctIndex: 0,
    explanation: "C = Kε₀A/d. Dielectric K increases capacitance by factor K.",
    improvementTip:
      "Capacitor formulas: C=ε₀A/d (air), C=Kε₀A/d (dielectric). Energy = Q²/2C = CV²/2 = QV/2. All three energy forms appear in CET.",
  },
  {
    id: 28,
    subject: "Physics",
    chapter: "Wave Optics",
    year: 2023,
    difficulty: "Medium",
    question: "In Young's double slit experiment, fringe width β equals:",
    options: ["λD/d", "λd/D", "dD/λ", "D/λd"],
    correctIndex: 0,
    explanation:
      "Fringe width β = λD/d where λ=wavelength, D=screen distance, d=slit separation.",
    improvementTip:
      "YDSE fringe width: β = λD/d. Bright fringe at nλD/d, dark fringe at (2n-1)λD/2d. Draw the setup and label each variable.",
  },
  {
    id: 29,
    subject: "Physics",
    chapter: "Wave Optics",
    year: 2024,
    difficulty: "Hard",
    question: "Brewster's angle for glass (μ=1.5) is approximately:",
    options: ["56.3°", "45°", "33.7°", "90°"],
    correctIndex: 0,
    explanation: "tan(iB) = μ = 1.5 → iB = tan⁻¹(1.5) ≈ 56.3°.",
    improvementTip:
      "Brewster's law: tan(iB) = n₂/n₁. At Brewster's angle, reflected light is completely polarized. iB + rB = 90°.",
  },
  {
    id: 30,
    subject: "Physics",
    chapter: "Modern Physics",
    year: 2024,
    difficulty: "Medium",
    question: "Energy of photon with frequency ν is:",
    options: ["hν", "hν/c", "hc/ν", "hc·ν"],
    correctIndex: 0,
    explanation: "E = hν (Planck's equation). Also E = hc/λ since ν = c/λ.",
    improvementTip:
      "Photon energy: E=hν=hc/λ. Momentum p=h/λ=E/c. de Broglie wavelength λ=h/mv. These three are the most tested Modern Physics formulas.",
  },
  {
    id: 31,
    subject: "Physics",
    chapter: "Modern Physics",
    year: 2025,
    difficulty: "Hard",
    question: "In photoelectric effect, stopping potential depends on:",
    options: [
      "Frequency of light",
      "Intensity of light",
      "Both frequency and intensity",
      "Neither",
    ],
    correctIndex: 0,
    explanation:
      "Stopping potential depends only on frequency (determines max KE). Intensity affects current but not stopping potential.",
    improvementTip:
      "Photoelectric effect: frequency determines KE_max and stopping potential; intensity determines photoelectric current (number of electrons).",
  },
  {
    id: 32,
    subject: "Physics",
    chapter: "Thermodynamics",
    year: 2022,
    difficulty: "Medium",
    question: "In an isothermal process, which quantity remains constant?",
    options: ["Temperature", "Pressure", "Volume", "Entropy"],
    correctIndex: 0,
    explanation:
      "Isothermal = constant temperature. Adiabatic = no heat exchange. Isobaric = constant pressure.",
    improvementTip:
      "Thermodynamic processes: Isothermal(T=const), Adiabatic(Q=0), Isobaric(P=const), Isochoric(V=const). Know the PV diagrams for each.",
  },
  {
    id: 33,
    subject: "Physics",
    chapter: "Thermodynamics",
    year: 2023,
    difficulty: "Hard",
    question: "Efficiency of a Carnot engine with T_H=500K, T_L=300K is:",
    options: ["40%", "60%", "50%", "20%"],
    correctIndex: 0,
    explanation: "η = 1 - T_L/T_H = 1 - 300/500 = 1 - 0.6 = 0.4 = 40%.",
    improvementTip:
      "Carnot efficiency: η = 1 - T_cold/T_hot (use Kelvin). This is maximum possible efficiency. Real engines are less efficient.",
  },
  {
    id: 34,
    subject: "Physics",
    chapter: "Gravitation",
    year: 2021,
    difficulty: "Medium",
    question: "Escape velocity from Earth's surface is:",
    options: ["11.2 km/s", "7.9 km/s", "9.8 km/s", "3 × 10⁸ m/s"],
    correctIndex: 0,
    explanation: "Escape velocity = √(2gR) = √(2×9.8×6.4×10⁶) ≈ 11.2 km/s.",
    improvementTip:
      "Escape velocity = √(2gR) = √(2GM/R) ≈ 11.2 km/s for Earth. Orbital velocity = √(gR) ≈ 7.9 km/s. Escape = √2 × orbital velocity.",
  },
  {
    id: 35,
    subject: "Physics",
    chapter: "Semiconductors",
    year: 2022,
    difficulty: "Medium",
    question: "In p-type semiconductor, majority carriers are:",
    options: ["Holes", "Electrons", "Both equal", "Protons"],
    correctIndex: 0,
    explanation:
      "p-type semiconductor (doped with trivalent atoms like B, Al) has holes as majority carriers.",
    improvementTip:
      "p-type: majority=holes, minority=electrons (trivalent dopant). n-type: majority=electrons, minority=holes (pentavalent dopant like P, As, Sb).",
  },
  {
    id: 36,
    subject: "Physics",
    chapter: "Rotational Motion",
    year: 2020,
    difficulty: "Easy",
    question: "Torque is defined as:",
    options: ["r × F", "r · F", "r + F", "F/r"],
    correctIndex: 0,
    explanation:
      "Torque τ = r × F (cross product of position vector and force). It causes rotational motion.",
    improvementTip:
      "Torque = r × F = rF sinθ. Maximum torque when θ=90° (force perpendicular to lever arm). Practice with moment problems.",
  },
  {
    id: 37,
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    year: 2024,
    difficulty: "Medium",
    question: "Lenz's law is based on the principle of:",
    options: [
      "Conservation of energy",
      "Conservation of charge",
      "Conservation of momentum",
      "Newton's 3rd law",
    ],
    correctIndex: 0,
    explanation:
      "Lenz's law (induced current opposes change causing it) is a consequence of conservation of energy.",
    improvementTip:
      "Lenz's law: induced EMF/current always opposes the change in flux. Use right-hand rule to find direction of induced current.",
  },
  {
    id: 38,
    subject: "Physics",
    chapter: "Wave Optics",
    year: 2025,
    difficulty: "Hard",
    question: "The resolving power of a microscope increases when:",
    options: [
      "Wavelength of light decreases",
      "Wavelength increases",
      "Aperture decreases",
      "Distance increases",
    ],
    correctIndex: 0,
    explanation:
      "Resolving power ∝ 1/λ. Smaller wavelength → better resolution. This is why electron microscopes are powerful.",
    improvementTip:
      "Resolving power of microscope = 2n·sinθ/λ. Increases with smaller λ, larger aperture (sinθ), higher n (refractive index of medium).",
  },
  {
    id: 39,
    subject: "Physics",
    chapter: "Electrostatics",
    year: 2021,
    difficulty: "Easy",
    question: "Coulomb's constant k = 1/(4πε₀) has value approximately:",
    options: [
      "9×10⁹ Nm²/C²",
      "9×10⁻¹² Nm²/C²",
      "6.67×10⁻¹¹ Nm²/C²",
      "1.6×10⁻¹⁹ C",
    ],
    correctIndex: 0,
    explanation:
      "k = 9×10⁹ Nm²/C². Note: ε₀ = 8.85×10⁻¹² F/m. G = 6.67×10⁻¹¹ (gravitational constant).",
    improvementTip:
      "Memorize constants: k=9×10⁹, G=6.67×10⁻¹¹, e=1.6×10⁻¹⁹C, h=6.63×10⁻³⁴Js, c=3×10⁸m/s. These appear in every paper.",
  },
  {
    id: 40,
    subject: "Physics",
    chapter: "Modern Physics",
    year: 2021,
    difficulty: "Hard",
    question:
      "In Bohr model of hydrogen, radius of nth orbit is proportional to:",
    options: ["n²", "n", "n³", "1/n"],
    correctIndex: 0,
    explanation:
      "Bohr radius: rₙ = 0.529n² Å. Proportional to n². Energy: Eₙ = -13.6/n² eV.",
    improvementTip:
      "Bohr model: rₙ ∝ n², vₙ ∝ 1/n, Eₙ ∝ -1/n². For H-atom: r₁=0.529Å, E₁=-13.6eV. These relationships are tested every year.",
  },

  // ===== CHEMISTRY =====
  {
    id: 41,
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    year: 2022,
    difficulty: "Medium",
    question: "IUPAC name of [Co(NH₃)₆]³⁺ is:",
    options: [
      "Hexaamminecobalt(III)",
      "Cobalt hexaammine(III)",
      "Hexamminecobalt(3)",
      "Triamminecobalt(VI)",
    ],
    correctIndex: 0,
    explanation:
      "IUPAC: ligands alphabetically (hexaammine) then metal with oxidation state in Roman numerals.",
    improvementTip:
      "IUPAC coordination: [ligands in alphabetical order + metal(ox. state)]. Ligand names: NH₃=ammine, Cl⁻=chlorido, CN⁻=cyanido, H₂O=aqua. Practice 20 naming problems.",
  },
  {
    id: 42,
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    year: 2023,
    difficulty: "Hard",
    question:
      "Coordination number of Co in [Co(en)₂Cl₂]⁺ is (en = ethylenediamine):",
    options: ["6", "4", "5", "2"],
    correctIndex: 0,
    explanation:
      "en is bidentate (2 donor atoms). 2 en = 4 bonds + 2 Cl = 6. Coordination number = 6.",
    improvementTip:
      "Bidentate ligands (en, ox²⁻, acac) contribute 2 to coordination number. Tridentate contribute 3. Always count donor atoms, not number of ligands.",
  },
  {
    id: 43,
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    year: 2024,
    difficulty: "Medium",
    question: "Effective Atomic Number (EAN) of [Fe(CO)₅] (Fe=26) is:",
    options: ["36", "26", "46", "31"],
    correctIndex: 0,
    explanation:
      "Fe = 26 electrons. CO donates 2e each × 5 = 10. EAN = 26 + 10 = 36 (Kr configuration).",
    improvementTip:
      "EAN = atomic number of metal + electrons from ligands. For stable complexes EAN = nearest noble gas (18, 36, 54, 86). Each CO/CN⁻ donates 2e.",
  },
  {
    id: 44,
    subject: "Chemistry",
    chapter: "Organic Reaction Mechanisms",
    year: 2022,
    difficulty: "Hard",
    question: "SN2 reactions are favored by:",
    options: [
      "Primary substrates + strong nucleophile",
      "Tertiary substrates",
      "Weak nucleophiles",
      "Polar protic solvents",
    ],
    correctIndex: 0,
    explanation:
      "SN2: bimolecular, single step, inversion. Favored by 1° substrate, strong nucleophile, polar aprotic solvent.",
    improvementTip:
      "SN2 vs SN1: SN2 favors 1° + strong Nu + aprotic solvent (DMSO, acetone). SN1 favors 3° + weak Nu + protic solvent (water, alcohol). Make a comparison table.",
  },
  {
    id: 45,
    subject: "Chemistry",
    chapter: "Organic Reaction Mechanisms",
    year: 2024,
    difficulty: "Medium",
    question:
      "Which reagent converts alkene to alcohol by anti-Markovnikov addition?",
    options: ["BH₃/THF then H₂O₂/OH⁻", "H₂SO₄/H₂O", "HBr", "Br₂/CCl₄"],
    correctIndex: 0,
    explanation:
      "Hydroboration-oxidation (BH₃ then H₂O₂/NaOH) gives anti-Markovnikov, syn addition, alcohol.",
    improvementTip:
      "Hydroboration-oxidation: anti-Markovnikov, syn addition. Oxymercuration-demercuration: Markovnikov, anti addition. Know both mechanisms cold.",
  },
  {
    id: 46,
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    year: 2021,
    difficulty: "Medium",
    question: "Shape of SF₆ according to VSEPR theory is:",
    options: [
      "Octahedral",
      "Trigonal bipyramidal",
      "Square planar",
      "Tetrahedral",
    ],
    correctIndex: 0,
    explanation:
      "SF₆: S has 6 bond pairs, 0 lone pairs. VSEPR predicts octahedral geometry.",
    improvementTip:
      "VSEPR shapes: 4 BP=tetrahedral, 3 BP+1 LP=pyramidal, 2 BP+2 LP=bent, 5 BP=trigonal bipyramidal, 6 BP=octahedral. Practice with 20 molecules.",
  },
  {
    id: 47,
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    year: 2022,
    difficulty: "Hard",
    question: "Bond order of O₂ using MO theory is:",
    options: ["2", "1", "3", "1.5"],
    correctIndex: 0,
    explanation:
      "O₂ MO configuration: (σ1s)²(σ*1s)²(σ2s)²(σ*2s)²(σ2p)²(π2p)⁴(π*2p)². BO = (8-4)/2 = 2.",
    improvementTip:
      "Bond order = (bonding electrons - antibonding electrons)/2. O₂ BO=2 (paramagnetic), N₂ BO=3 (diamagnetic), F₂ BO=1. Know paramagnetism from unpaired e⁻.",
  },
  {
    id: 48,
    subject: "Chemistry",
    chapter: "Electrochemistry",
    year: 2023,
    difficulty: "Medium",
    question:
      "Standard electrode potential of SHE (Standard Hydrogen Electrode) is:",
    options: ["0 V", "1 V", "-1 V", "0.5 V"],
    correctIndex: 0,
    explanation:
      "SHE is the reference electrode with E° = 0.00 V by convention.",
    improvementTip:
      "SHE: E°=0V, H₂ gas at 1 atm, H⁺ at 1M, 25°C. Cell EMF = E°cathode - E°anode. Positive EMF = spontaneous reaction.",
  },
  {
    id: 49,
    subject: "Chemistry",
    chapter: "Electrochemistry",
    year: 2024,
    difficulty: "Hard",
    question:
      "Faraday's 1st law of electrolysis states that mass deposited is proportional to:",
    options: [
      "Quantity of electricity (Q)",
      "Current only",
      "Time only",
      "Voltage",
    ],
    correctIndex: 0,
    explanation:
      "Faraday's 1st law: m = ZQ = ZIt where Z = electrochemical equivalent, Q = charge (coulombs).",
    improvementTip:
      "Faraday's laws: 1st: m ∝ Q (m=ZIt). 2nd: for same Q, masses ∝ equivalent weights. Faraday constant F = 96500 C/mol.",
  },
  {
    id: 50,
    subject: "Chemistry",
    chapter: "p-Block Elements",
    year: 2024,
    difficulty: "Medium",
    question:
      "Which of the following is the strongest oxidizing agent among halogens?",
    options: ["F₂", "Cl₂", "Br₂", "I₂"],
    correctIndex: 0,
    explanation:
      "F₂ is the strongest oxidizing agent. Oxidizing power decreases down the group: F₂>Cl₂>Br₂>I₂.",
    improvementTip:
      "Halogens: oxidizing power decreases down group (F₂>Cl₂>Br₂>I₂). Reducing power increases down. F₂ can oxidize water itself.",
  },
  {
    id: 51,
    subject: "Chemistry",
    chapter: "p-Block Elements",
    year: 2025,
    difficulty: "Hard",
    question: "Hybridization of N in NO₃⁻ is:",
    options: ["sp²", "sp³", "sp", "sp³d"],
    correctIndex: 0,
    explanation:
      "NO₃⁻: N forms 3 sigma bonds (to 3 O), 0 lone pairs on N → sp² hybridization, trigonal planar.",
    improvementTip:
      "Hybridization counting: count sigma bonds + lone pairs on central atom. 2=sp, 3=sp², 4=sp³, 5=sp³d, 6=sp³d². Pi bonds don't count.",
  },
  {
    id: 52,
    subject: "Chemistry",
    chapter: "Biomolecules",
    year: 2022,
    difficulty: "Medium",
    question: "Which of the following is a reducing sugar?",
    options: ["Glucose", "Sucrose", "Cellulose", "Starch"],
    correctIndex: 0,
    explanation:
      "Glucose is a reducing sugar (has free aldehyde group). Sucrose is non-reducing (no free anomeric OH).",
    improvementTip:
      "Reducing sugars have free aldehyde/ketone group. Glucose, fructose, maltose, lactose = reducing. Sucrose = non-reducing (glycosidic bond at both anomeric carbons).",
  },
  {
    id: 53,
    subject: "Chemistry",
    chapter: "Biomolecules",
    year: 2023,
    difficulty: "Hard",
    question: "The secondary structure of protein involves:",
    options: [
      "Hydrogen bonds",
      "Peptide bonds",
      "Disulfide bonds",
      "Ionic bonds",
    ],
    correctIndex: 0,
    explanation:
      "Secondary structure (alpha helix, beta sheet) is maintained by hydrogen bonds between peptide linkages.",
    improvementTip:
      "Protein structure levels: Primary=peptide bonds (sequence), Secondary=H-bonds (helix/sheet), Tertiary=3D folding (all bonds), Quaternary=multiple subunits.",
  },
  {
    id: 54,
    subject: "Chemistry",
    chapter: "Polymers",
    year: 2023,
    difficulty: "Medium",
    question: "Nylon-6,6 is formed by condensation of:",
    options: [
      "Hexamethylenediamine + adipic acid",
      "Caprolactam",
      "Ethylene + nylon",
      "Vinyl chloride",
    ],
    correctIndex: 0,
    explanation:
      "Nylon-6,6: condensation polymer of hexamethylenediamine (6C) and adipic acid (6C) → 6,6.",
    improvementTip:
      "Nylon-6,6: diamine + dicarboxylic acid. Nylon-6: ring opening of caprolactam. Dacron: ethylene glycol + terephthalic acid. Bakelite: phenol + formaldehyde.",
  },
  {
    id: 55,
    subject: "Chemistry",
    chapter: "Solutions",
    year: 2022,
    difficulty: "Medium",
    question:
      "Which colligative property is used to determine molecular mass of polymer?",
    options: [
      "Osmotic pressure",
      "Boiling point elevation",
      "Freezing point depression",
      "Vapour pressure lowering",
    ],
    correctIndex: 0,
    explanation:
      "Osmotic pressure π = MRT is most sensitive for large molecules (polymers) due to measurable π even at low concentration.",
    improvementTip:
      "Osmotic pressure most sensitive colligative property for high MW substances. All four properties depend on number of solute particles (molality/molarity).",
  },
  {
    id: 56,
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    year: 2020,
    difficulty: "Medium",
    question: "Crystal Field Stabilization Energy is maximum for:",
    options: ["d⁶ in strong field (low spin)", "d⁰", "d¹⁰", "d⁵ in weak field"],
    correctIndex: 0,
    explanation:
      "d⁶ low spin in octahedral field: CFSE = -2.4Δ₀ (maximum negative value = maximum stabilization).",
    improvementTip:
      "CFSE calculation: t₂g electrons give -0.4Δ₀ each, eg give +0.6Δ₀ each. Strong field forces pairing. d⁶ low spin = maximum CFSE.",
  },
  {
    id: 57,
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    year: 2020,
    difficulty: "Easy",
    question:
      "Electronegativity difference for ionic bond character should be greater than:",
    options: ["1.7", "0.5", "0", "3.0"],
    correctIndex: 0,
    explanation:
      "Pauling: EN difference > 1.7 → predominantly ionic (>50% ionic). EN diff < 0.5 → mostly covalent.",
    improvementTip:
      "Ionic character: EN diff > 1.7 → ionic. 0.5-1.7 → polar covalent. < 0.5 → nonpolar covalent. NaCl EN diff = 2.1 (ionic), HCl = 0.9 (polar covalent).",
  },
  {
    id: 58,
    subject: "Chemistry",
    chapter: "Organic Reaction Mechanisms",
    year: 2025,
    difficulty: "Hard",
    question:
      "Markovnikov's rule: in HX addition to alkene, H adds to carbon with:",
    options: ["More H atoms", "Less H atoms", "Equal H atoms", "No H atoms"],
    correctIndex: 0,
    explanation:
      "Markovnikov's rule: H adds to carbon that already has more H (most substituted halide forms). Based on carbocation stability.",
    improvementTip:
      "Markovnikov's rule: H⁺ adds to less substituted C, X⁻ adds to more substituted C. Explained by stability of carbocation intermediates: 3°>2°>1°>methyl.",
  },
  {
    id: 59,
    subject: "Chemistry",
    chapter: "Electrochemistry",
    year: 2022,
    difficulty: "Medium",
    question: "Nernst equation: E = E° - (RT/nF)lnQ. At 25°C, (RT/F) equals:",
    options: ["0.0257 V", "0.0592 V", "96500 V", "8.314 V"],
    correctIndex: 0,
    explanation:
      "RT/F = (8.314×298)/96500 = 0.0257 V. For log₁₀: E = E° - (0.0592/n)logQ.",
    improvementTip:
      "Nernst equation: E = E° - (0.0592/n)log Q at 25°C (using log₁₀). Memorize 0.0592 for MHT-CET calculations. Q = products/reactants from balanced equation.",
  },
  {
    id: 60,
    subject: "Chemistry",
    chapter: "p-Block Elements",
    year: 2020,
    difficulty: "Medium",
    question:
      "PCl₅ can act as both Lewis acid and base because phosphorus has:",
    options: [
      "Empty d orbitals",
      "Empty p orbitals",
      "Lone pairs only",
      "No d orbitals",
    ],
    correctIndex: 0,
    explanation:
      "P has empty 3d orbitals that can accept electron pairs (Lewis acid). Lone pairs on Cl can donate (Lewis base character).",
    improvementTip:
      "Elements with empty d orbitals (P, S, Cl in period 3+) can expand octet and act as Lewis acids. N, O, F cannot expand octet (no d orbitals in period 2).",
  },
];

export const getBySubject = (subject: Question["subject"]) =>
  questions.filter((q) => q.subject === subject);

export const getChapters = (subject: Question["subject"]) => [
  ...new Set(
    questions.filter((q) => q.subject === subject).map((q) => q.chapter),
  ),
];

export const getYearFrequency = (subject: Question["subject"]) => {
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  return years.map((year) => ({
    year,
    count: questions.filter((q) => q.subject === subject && q.year === year)
      .length,
  }));
};

export const getChapterFrequency = (subject: Question["subject"]) => {
  const chapters = getChapters(subject);
  return chapters
    .map((chapter) => ({
      chapter,
      count: questions.filter(
        (q) => q.subject === subject && q.chapter === chapter,
      ).length,
      years: [
        ...new Set(
          questions
            .filter((q) => q.subject === subject && q.chapter === chapter)
            .map((q) => q.year),
        ),
      ].sort(),
    }))
    .sort((a, b) => b.count - a.count);
};
