import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`fixed bottom-20 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-white shadow-soft ring-1 ring-white/15 transition duration-300 hover:-translate-y-1 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Lên đầu trang"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
