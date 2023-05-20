/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        fontSize: {
            12: ["0.75rem", "1.25rem"],
            13: ["0.8125rem", "1.5rem"],
            14: ["0.875rem", "1.25rem"],
            16: ["1rem", "1.5rem"],
            18: ["1.125rem", "1.75rem"],
            20: ["1.25rem", "1.875rem"],
            24: ["1.5rem", "2rem"],
            30: ["1.875rem", "2.375rem"],
            36: [
                "2.25rem",
                {
                    lineHeight: "2.75rem",
                    letterSpacing: "-2%",
                },
            ],
            48: [
                "3rem",
                {
                    lineHeight: "3.75rem",
                    letterSpacing: "-2%",
                },
            ],
            60: [
                "3.75rem",
                {
                    lineHeight: "4.5rem",
                    letterSpacing: "-2%",
                },
            ],
        },
        colors: {
            white: "#fff",
            black: "#000",
            warning: {
             50:   "#FFFAEB",
             700: "#B54708",
            },
            gray: {
                25: "#FCFCFD",
                50: "#F9FAFB",
                200: "#EAECF0",
                300: "#D0D5DD",
                500: "#667085",
                600: "#475467",
                700: "#344054",                
                900: "#101828",
            },
            error: {
                50: "#FEF3F2",
                300: "#FDA29B",
                500: "#F04438",
                700: "#B42318",
            },
            success: {
                50: "#ECFDF3",
                600: "#039855",
                500: "#12B76A",
                700: "#027A48",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Open sans", "sans-serif"],
            },
            backgroundImage: {
                "line-pattern": "url(./src/assets/img/line-pattern.png)",
                "gradient-45deg":
                    "linear-gradient(45deg, var(--tw-gradient-stops))"  },
        },
        screens: {
            mobile: "375px",
            tablet: "768px",
            desktop: "1024px",
        },
    },
    plugins: [],
};