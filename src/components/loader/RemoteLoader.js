import React from "react";

const customLoaderStyles = `
  @keyframes move-electron {
      from {
          offset-distance: 0%;
      }
      to {
          offset-distance: 100%;
      }
  }

  .electron-1 {
      /* This SVG path data must match the corresponding <ellipse> in the SVG */
      offset-path: path("M40,10 A30,30 0 1,1 40,70 A30,30 0 1,1 40,10");
      animation: move-electron 4s linear infinite;
  }
  
  .electron-2 {
      /* This path corresponds to the second, rotated <ellipse> */
      offset-path: path("M10,40 A30,30 0 1,1 70,40 A30,30 0 1,1 10,40");
      animation: move-electron 3s ease-in-out infinite;
      animation-delay: -0.5s;
  }
`;

export default function RemoteLoader() {
  return (
    <div className="h-full w-full overflow-hidden flex justify-center items-center bg-[#0B1C24] text-slate-200">
      <style>{customLoaderStyles}</style>

      <div
        className="flex flex-col items-center gap-5"
        role="status"
        aria-live="polite"
        aria-label="Content is loading"
      >
        <svg
          className="w-20 h-20 animate-[spin_8s_linear_infinite] [filter:drop-shadow(0_0_5px_rgba(0,169,224,0.7))]"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="fill-cyan-400" cx="40" cy="40" r="6" />

          <ellipse
            className="stroke-cyan-400/30 stroke-1 fill-none"
            cx="40"
            cy="40"
            rx="30"
            ry="30"
          />
          <ellipse
            className="stroke-cyan-400/30 stroke-1 fill-none"
            cx="40"
            cy="40"
            rx="30"
            ry="30"
            transform="rotate(90 40 40)"
          />

          <circle
            className="electron electron-1 fill-purple-600 stroke-white stroke-[0.5]"
            r="4"
          />
          <circle
            className="electron electron-2 fill-purple-600 stroke-white stroke-[0.5]"
            r="3.5"
          />
        </svg>

        <div className="text-lg font-medium tracking-wider animate-pulse">
          Bootstrapping Module...
        </div>
      </div>
    </div>
  );
}
