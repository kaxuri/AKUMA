import BackgroundLines from "@/components/BackgroundLines";
import VantaLogo from "@/components/VantaLogo";

export default function VantaPage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <BackgroundLines />

      <div
        className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
        style={{ animation: "fadeInUp 1.4s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        <div className="flex items-center gap-6 sm:gap-8">

          <div
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 shrink-0"
            style={{ animation: "fadeInUp 1.6s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <VantaLogo />
          </div>

        </div>
        <div
          className="w-px bg-white/20 self-stretch"
          style={{ animation: "fadeInUp 1.6s 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
        />

        <p
          className="text-white/50 tracking-[0.35em] uppercase select-none"
          style={{
            fontFamily: "'Barlow Condensed', 'Geist', sans-serif",
            fontSize: "clamp(0.65rem, 1.4vw, 0.85rem)",
            letterSpacing: "0.35em",
            animation: "fadeInUp 1.6s 0.45s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          Coming Soon&nbsp;&nbsp;—&nbsp;&nbsp;Q4 2026
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
