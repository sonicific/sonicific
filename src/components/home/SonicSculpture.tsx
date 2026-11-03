import { useLanguage } from "../../i18n/LanguageProvider";
import { useId, useRef, type PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";
export function SonicSculpture() {
  const { t } = useLanguage();
  const id = useId().replace(/:/g, "");
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty(
      "--turn-x",
      `${((event.clientY - bounds.top) / bounds.height - 0.5) * -9}deg`,
    );
    ref.current?.style.setProperty(
      "--turn-y",
      `${((event.clientX - bounds.left) / bounds.width - 0.5) * 12}deg`,
    );
  };
  const reset = () => {
    ref.current?.style.setProperty("--turn-x", "0deg");
    ref.current?.style.setProperty("--turn-y", "0deg");
  };
  return (
    <div
      className="sculpture-scene"
      onPointerMove={move}
      onPointerLeave={reset}
      aria-hidden="true"
    >
      <div className="sculpture-grid" />
      <span className="scene-coordinate scene-coordinate-top">
        {"SG / CONNECTED THINKING"}
      </span>
      <span className="scene-cross scene-cross-one">{"+"}</span>
      <span className="scene-cross scene-cross-two">{"+"}</span>
      <div ref={ref} className="sculpture-object">
        <svg viewBox="0 0 600 600" className="sculpture-svg" fill="none">
          <defs>
            <linearGradient
              id={`${id}ribbon`}
              x1="140"
              y1="80"
              x2="470"
              y2="480"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#e8f4c9" />
              <stop offset=".2" stopColor="#b3d8a1" />
              <stop offset=".38" stopColor="#1c6358" />
              <stop offset=".53" stopColor="#0b3a37" />
              <stop offset=".7" stopColor="#70a78c" />
              <stop offset=".88" stopColor="#dcf4b5" />
              <stop offset="1" stopColor="#a9c98d" />
            </linearGradient>
            <linearGradient
              id={`${id}edge`}
              x1="150"
              y1="100"
              x2="440"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f3ffde" />
              <stop offset=".45" stopColor="#76a98c" />
              <stop offset="1" stopColor="#d6f09c" />
            </linearGradient>
            <radialGradient id={`${id}core`}>
              <stop stopColor="#f3f9da" />
              <stop offset=".45" stopColor="#c5e59e" />
              <stop offset="1" stopColor="#689b72" />
            </radialGradient>
            <filter
              id={`${id}shadow`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>
          <ellipse
            cx="313"
            cy="514"
            rx="152"
            ry="22"
            fill="#193e32"
            opacity=".15"
            filter={`url(#${id}shadow)`}
          />
          <g className="sculpture-ribbon">
            <path
              d="M405 137C344 64 195 100 168 187C134 298 437 264 431 381C425 482 251 513 180 431"
              stroke="#234f42"
              strokeWidth="100"
              strokeLinecap="round"
              transform="translate(7 13)"
            />
            <path
              d="M405 137C344 64 195 100 168 187C134 298 437 264 431 381C425 482 251 513 180 431"
              stroke={`url(#${id}ribbon)`}
              strokeWidth="100"
              strokeLinecap="round"
            />
            <path
              d="M405 99C325 45 205 101 202 178C198 256 464 255 464 376C464 473 301 549 202 454"
              stroke={`url(#${id}edge)`}
              strokeWidth="2"
              opacity=".8"
            />
            {Array.from({ length: 8 }, (_, index) => (
              <path
                key={index}
                d="M405 137C344 64 195 100 168 187C134 298 437 264 431 381C425 482 251 513 180 431"
                stroke="#f3ffdb"
                strokeWidth=".65"
                opacity=".13"
                transform={`translate(${index * 2 - 7} ${index * 3 - 10})`}
              />
            ))}
          </g>
          <circle
            cx="441"
            cy="250"
            r="30"
            fill={`url(#${id}core)`}
            className="sculpture-satellite"
          />
          <circle cx="129" cy="361" r="12" fill="#cced91" />
          <ellipse
            cx="300"
            cy="300"
            rx="252"
            ry="95"
            transform="rotate(-27 300 300)"
            stroke="#54866b"
            strokeOpacity=".35"
            strokeDasharray="3 7"
          />
        </svg>
      </div>
      <div className="scene-label scene-label-strategy">
        <span className="status-dot" />
        {t(" Chiến lược có hướng")}
      </div>
      <div className="scene-label scene-label-growth">
        <ArrowUpRight size={18} />
        <span>
          {t("Sáng tạo.")}
          <br />
          <strong>{t("Kết nối. Tăng trưởng.")}</strong>
        </span>
      </div>
      <span className="scene-coordinate scene-coordinate-bottom">
        {"A SIGNAL OF WHAT’S NEXT ↗"}
      </span>
    </div>
  );
}
