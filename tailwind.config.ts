import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        brand: { green: "#3ddc97", blue: "#6ea8fe", orange: "#ff9a5c", violet: "#b48cff", draft: "#d9b45a" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        fill: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
        blink: { "50%": { opacity: "0" } },
        "pulse-soft": { "0%,100%": { opacity: "0.5", transform: "scale(.96)" }, "50%": { opacity: "1", transform: "scale(1.04)" } },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%,55%": { opacity: "1" },
          "65%,100%": { transform: "translateY(340%)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        blink: "blink 1s steps(1) infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        glow: "pulse-soft 7s ease-in-out infinite",
        scan: "scan 6s cubic-bezier(.6,0,.4,1) infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
