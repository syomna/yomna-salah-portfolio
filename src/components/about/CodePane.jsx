const DOTS = ["#ff5f57", "#febc2e", "#28c840"];

const CODE_HTML = `<span style="color:rgba(255,255,255,0.2)">// hi, I'm Yomna 👋</span>

<span style="color:#c084fc">const</span> <span style="color:#fbbf24">yomna</span> <span style="color:#c084fc">=</span> <span style="color:#67e8f9">{</span>

  <span style="color:#fbbf24">focus</span><span style="color:#c084fc">:</span>     <span style="color:#86efac">'production apps · mobile & web'</span>,
  <span style="color:#fbbf24">stack</span><span style="color:#c084fc">:</span>      <span style="color:#86efac">'Flutter · React'</span>,
  <span style="color:#fbbf24">tools</span><span style="color:#c084fc">:</span>      <span style="color:#86efac">'Firebase · Node.js · Tailwind'</span>,

  <span style="color:#fbbf24">build</span><span style="color:#c084fc">:</span> <span style="color:#67e8f9">()</span> <span style="color:#c084fc">=></span> <span style="color:#fbbf24">ProductionApp</span>(),

<span style="color:#67e8f9">}</span>`;

const CodePane = () => (
  <div className="bg-ink overflow-hidden">
    <div className="px-4 py-[10px] border-b border-white/5 flex items-center gap-[6px]">
      {DOTS.map((c) => (
        <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
      ))}
      <span className="font-mono text-[10px] text-white/20 ml-2 tracking-[0.04em]">
        yomna.js
      </span>
    </div>

    <pre
      className="px-[18px] py-[22px] font-mono text-[12px] leading-[2] text-white/70 whitespace-pre overflow-x-auto m-0"
      dangerouslySetInnerHTML={{ __html: CODE_HTML }}
    />
  </div>
);

export default CodePane;
