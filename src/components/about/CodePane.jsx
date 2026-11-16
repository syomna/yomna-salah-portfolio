const DOTS = ["#ff5f57", "#febc2e", "#28c840"];

// Dart / Flutter syntax colours
const K = "#c084fc"; // keywords
const T = "#67e8f9"; // types
const S = "#86efac"; // strings
const P = "#fbbf24"; // properties / annotations
const C = "rgba(255,255,255,0.2)"; // comments

const CODE_HTML = `<span style="color:${C}">// hi, I'm Yomna 👋</span>

<span style="color:${K}">import</span> <span style="color:${S}">'package:flutter/material.dart'</span>;

<span style="color:${K}">class</span> <span style="color:${T}">Yomna</span> <span style="color:${K}">extends</span> <span style="color:${T}">Developer</span> {
  <span style="color:${K}">final</span> <span style="color:${T}">String</span> <span style="color:${P}">focus</span> <span style="color:${K}">=</span> <span style="color:${S}">'Production Mobile Apps'</span>;
  <span style="color:${K}">final</span> <span style="color:${P}">stack</span> <span style="color:${K}">=</span> [<span style="color:${S}">'Flutter'</span>, <span style="color:${S}">'Dart'</span>, <span style="color:${S}">'SwiftUI'</span>, <span style="color:${S}">'Firebase'</span>];
  <span style="color:${K}">final</span> <span style="color:${P}">tools</span> <span style="color:${K}">=</span> [<span style="color:${S}">'AI'</span>, <span style="color:${S}">'Clean Architecture'</span>, <span style="color:${S}">'Codemagic'</span>];

  <span style="color:${P}">@override</span>
  <span style="color:${T}">ProductionApp</span> <span style="color:${P}">build</span>() <span style="color:${K}">=&gt;</span> <span style="color:${T}">ProductionApp</span>();
}`;

const CodePane = () => (
  <div className="bg-ink overflow-hidden">
    <div className="px-4 py-[10px] border-b border-white/5 flex items-center gap-[6px]">
      {DOTS.map((c) => (
        <div
          key={c}
          style={{ width: 9, height: 9, borderRadius: "50%", background: c }}
        />
      ))}
      <span className="font-mono text-[10px] text-white/20 ml-2 tracking-[0.04em]">
        main.dart
      </span>
    </div>

    <pre
      className="px-[18px] py-[22px] font-mono text-[12px] leading-[2] text-white/70 whitespace-pre overflow-x-auto m-0"
      dangerouslySetInnerHTML={{ __html: CODE_HTML }}
    />
  </div>
);

export default CodePane;
