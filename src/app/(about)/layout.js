import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "10+ Projects",
    "4+ Years of Experience",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      {/* <InsightRoll insights={insights} /> */}
      {children}
    </main>
  );
}
