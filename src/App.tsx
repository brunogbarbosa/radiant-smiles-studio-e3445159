import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";

const IMG = {
  hero: "/__l5e/assets-v1/65963398-d7fb-4b2c-960c-7d190e12568c/image.png",
  about: "/__l5e/assets-v1/23fad150-fdc2-4cac-9d73-b7ff92187e9f/image-8.png",
  office: "/__l5e/assets-v1/6bf7d4ac-14b5-4df9-b753-08629e60473d/image-9.png",
  ba1: "/__l5e/assets-v1/1786b43d-4a44-444a-a82b-d861780df0ee/image-3.png",
  ba2: "/__l5e/assets-v1/6520b00d-003f-4232-a050-e15cb4840070/image-4.png",
  ba3: "/__l5e/assets-v1/50f152df-3409-4b4f-b10b-d5c1c197b246/image-7.png",
  ba4: "/__l5e/assets-v1/3e6d7777-b24a-469e-a84e-cd6578a9ba3d/image-2.png",
  face: "/__l5e/assets-v1/74843a85-1f4c-4efc-9d4e-9f7f73845868/image-5.png",
  lips: "/__l5e/assets-v1/9f87b5ed-467f-48ad-baa8-93394c556834/image-6.png",
};

const AGENDA = "https://tinyurl.com/renovareodonto";
const IG = "https://instagram.com/dra.thaiscastro";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const children = el.querySelectorAll<HTMLElement>(".fade-up, .cta-line");
            children.forEach((c, i) => {
              setTimeout(() => c.classList.add("visible"), i * 110);
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(253, 250, 245, 0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "border-color 300ms ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px solid var(--honey)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Fraunces, serif",
            fontWeight: 700,
            fontStyle: "italic",
            color: "var(--honey)",
            fontSize: 18,
          }}
        >
          TC
        </div>
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--brown)",
              fontWeight: 400,
            }}
          >
            DRA. THAÍS CASTRO
          </div>
          <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 2 }}>
            DENTISTA · RECIFE · CROPE 10838
          </div>
        </div>
      </div>
      <div className="no-mobile" style={{ display: "flex", gap: 34 }}>
        {["SOBRE", "TRATAMENTOS", "RESULTADOS", "CONTATO"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "var(--mid)",
              transition: "color 300ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--honey)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mid)")}
          >
            {l}
          </a>
        ))}
      </div>
      <a href={AGENDA} target="_blank" rel="noreferrer" className="btn-honey" style={{ fontSize: 11, padding: "12px 24px" }}>
        AGENDAR CONSULTA
      </a>
    </nav>
  );
}

function Hero() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="hero-section"
      style={{ position: "relative", height: "100vh", minHeight: 720, overflow: "hidden", background: "var(--ivory)" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 25% 55%, var(--honey-glow) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-1%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "Fraunces, serif",
          fontWeight: 700,
          fontSize: "clamp(80px, 14vw, 190px)",
          color: "rgba(196,154,90,0.06)",
          letterSpacing: "-3px",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        SORRISO
      </div>

      <div
        className="hero-text"
        style={{ position: "absolute", left: "7%", top: "50%", transform: "translateY(-50%)", width: "50%", zIndex: 3 }}
      >
        <div
          className="fade-up"
          style={{
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: 999,
            background: "var(--honey-dim)",
            border: "1px solid var(--honey)",
            color: "var(--honey)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          ✦ CROPE 10838 · RECIFE · 12 ANOS
        </div>
        <h1
          className="fade-up"
          style={{
            fontFamily: "Fraunces, serif",
            fontSize: "clamp(58px, 8vw, 110px)",
            lineHeight: 0.92,
            margin: 0,
            color: "var(--brown)",
            letterSpacing: "-2px",
          }}
        >
          <span style={{ fontWeight: 300, fontStyle: "italic" }}>Há 12 anos </span>
          <span style={{ fontWeight: 700, color: "var(--honey)" }}>renovando </span>
          <span style={{ fontWeight: 300, fontStyle: "italic" }}>sorrisos.</span>
        </h1>
        <p
          className="fade-up"
          style={{
            marginTop: 24,
            fontSize: 16,
            fontWeight: 300,
            color: "var(--mid)",
            maxWidth: 520,
            lineHeight: 1.6,
          }}
        >
          Harmonização Facial, Clareamento e Prótese Fixa em Recife — com cuidado, técnica e resultado natural.
        </p>
        <div className="fade-up" style={{ display: "flex", gap: 24, alignItems: "center", marginTop: 32, flexWrap: "wrap" }}>
          <a href={AGENDA} target="_blank" rel="noreferrer" className="btn-honey">
            AGENDAR CONSULTA
          </a>
          <a href="#resultados" className="arrow-btn">
            VER TRANSFORMAÇÕES <span className="arr">→</span>
          </a>
        </div>
        <div
          className="fade-up"
          style={{
            marginTop: 40,
            fontSize: 13,
            fontWeight: 300,
            color: "var(--muted)",
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span>12 anos de experiência</span>
          <span>·</span>
          <span>CROPE 10838</span>
          <span>·</span>
          <span>Recife · PE</span>
        </div>
      </div>

      <div
        className="hero-visual"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100vh",
          width: "42%",
          clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
          background: "linear-gradient(150deg, var(--warm) 0%, var(--sand) 100%)",
          overflow: "hidden",
        }}
      >
        <img
          src={IMG.hero}
          alt="Dra. Thaís Castro"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
        />
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          style={{ position: "absolute", top: 32, left: 60, opacity: 0.6 }}
        >
          <path d="M20 120 A100 100 0 0 1 120 20" stroke="var(--honey)" strokeWidth="1" fill="none" />
        </svg>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: -20,
            background: "var(--ivory)",
            border: "1px solid var(--honey)",
            padding: "8px 16px",
            borderRadius: 999,
            fontFamily: "Fraunces, serif",
            fontStyle: "italic",
            fontSize: 13,
            color: "var(--brown)",
            boxShadow: "0 10px 30px rgba(61,43,26,0.08)",
          }}
        >
          Dra. Thaís Castro
        </div>
      </div>

      <div
        className="no-mobile"
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.3em",
            color: "var(--honey)",
            opacity: 0.6,
            writingMode: "vertical-rl",
          }}
        >
          SCROLL
        </div>
        <div style={{ width: 1, height: 60, background: "var(--honey)", opacity: 0.4 }} className="scroll-line" />
      </div>
    </section>
  );
}

function Manifesto() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      style={{
        background: "var(--warm)",
        padding: "96px 8%",
        display: "flex",
        gap: 40,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div className="fade-up" style={{ width: "32%", position: "relative", minWidth: 220 }}>
        <div style={{ width: 1, height: 80, background: "var(--honey)", marginBottom: 20 }} />
        <div
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 700,
            fontSize: 100,
            color: "var(--honey)",
            opacity: 0.2,
            lineHeight: 1,
          }}
        >
          12
        </div>
        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--muted)", marginTop: 8 }}>
          anos
        </div>
      </div>
      <div className="fade-up" style={{ flex: 1, minWidth: 300 }}>
        <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--brown)" }}>
          Quando você pensar
        </div>
        <div
          style={{
            fontFamily: "Libre Baskerville, serif",
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.6vw, 32px)",
            color: "var(--honey)",
            marginTop: 6,
          }}
        >
          que estética é futilidade,
        </div>
        <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: "clamp(34px, 4vw, 48px)", color: "var(--brown)", marginTop: 8 }}>
          lembre-se.
        </div>
        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--muted)", marginTop: 20 }}>
          — Dra. Thaís Castro
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  const ref = useReveal();
  return (
    <section
      id="sobre"
      ref={ref}
      style={{ background: "var(--ivory)", padding: "120px 8%", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 60,
          fontFamily: "Fraunces, serif",
          fontWeight: 700,
          fontSize: 160,
          color: "var(--honey)",
          opacity: 0.05,
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        01
      </div>
      <div style={{ display: "flex", gap: 80, alignItems: "center", flexWrap: "wrap" }}>
        <div className="fade-up" style={{ width: "42%", minWidth: 280, position: "relative" }}>
          <img
            src={IMG.about}
            alt="Dra. Thaís Castro"
            style={{
              width: "100%",
              minHeight: 520,
              maxHeight: 640,
              objectFit: "cover",
              objectPosition: "top center",
              borderRadius: 16,
              border: "1px solid var(--honey)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -20,
              right: -24,
              background: "var(--sand)",
              border: "1px solid var(--honey)",
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "var(--brown)",
              textTransform: "uppercase",
            }}
          >
            CROPE 10838
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 300 }}>
          <div className="fade-up" style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--honey)", marginBottom: 20 }}>
            SOBRE
          </div>
          <h2
            className="fade-up"
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(40px, 5vw, 52px)",
              color: "var(--brown)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Thaís<br />Castro
          </h2>
          <p className="fade-up" style={{ marginTop: 28, fontSize: 16, fontWeight: 300, color: "var(--mid)", lineHeight: 1.7 }}>
            Dentista há 12 anos em Recife, especialista em Harmonização Facial, Clareamento e Prótese Fixa. Uma missão clara: devolver autoestima e sorriso com naturalidade, técnica apurada e escuta verdadeira. Cada paciente é único — e cada resultado, também.
          </p>
          <div className="fade-up" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
            {["12 anos de experiência", "Atendimento humanizado", "Resultados naturais"].map((d) => (
              <div key={d} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 14, color: "var(--brown)" }}>
                <span style={{ color: "var(--honey)", fontFamily: "Fraunces, serif" }}>✦</span>
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tratamentos() {
  const ref = useReveal();
  const cards = [
    { n: "I", t: "HARMONIZAÇÃO FACIAL", d: "Botox, preenchimento e técnicas avançadas para um rosto equilibrado, natural e rejuvenescido.", w: "44%", h: 360, mt: 0 },
    { n: "II", t: "CLAREAMENTO DENTAL", d: "Sorriso mais branco com segurança, sem sensibilidade e com resultado duradouro.", w: "30%", h: 290, mt: 52 },
    { n: "III", t: "PRÓTESE FIXA", d: "Reabilitação estética e funcional com próteses de alta precisão e estética natural.", w: "22%", h: 330, mt: 0 },
  ];
  return (
    <section id="tratamentos" ref={ref} style={{ background: "var(--sand)", padding: "120px 8%" }}>
      <div className="fade-up" style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--muted)" }}>
        TRATAMENTOS
      </div>
      <h2
        className="fade-up"
        style={{
          fontFamily: "Fraunces, serif",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "clamp(40px, 6vw, 64px)",
          color: "var(--brown)",
          margin: "8px 0 60px",
          lineHeight: 1,
        }}
      >
        que transformam
      </h2>
      <div className="stack-mobile" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        {cards.map((c) => (
          <div
            key={c.n}
            className="card-hover fade-up"
            style={{
              width: c.w,
              height: c.h,
              marginTop: c.mt,
              background: "var(--ivory)",
              borderTop: "2px solid var(--honey)",
              borderRadius: 12,
              padding: 32,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: 20,
                bottom: 10,
                fontFamily: "Fraunces, serif",
                fontWeight: 700,
                fontSize: 80,
                color: "var(--honey)",
                opacity: 0.08,
                lineHeight: 1,
                pointerEvents: "none",
              }}
            >
              {c.n}
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--honey)", marginBottom: 20 }}>0{cards.indexOf(c) + 1}</div>
              <div style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 16, textTransform: "uppercase", color: "var(--brown)", letterSpacing: "0.05em" }}>
                {c.t}
              </div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 300, color: "var(--mid)", lineHeight: 1.6, position: "relative", zIndex: 2 }}>
              {c.d}
            </div>
          </div>
        ))}
      </div>

      <div
        className="fade-up"
        style={{
          marginTop: 40,
          background: "var(--honey-dim)",
          border: "1px solid var(--honey)",
          borderRadius: 12,
          padding: "32px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ fontSize: 13, color: "var(--mid)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Botox Facial · Toxina Botulínica · Preenchimento
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "clamp(22px, 3vw, 28px)", color: "var(--brown)", marginTop: 6 }}>
            também no consultório.
          </div>
        </div>
        <a href={AGENDA} target="_blank" rel="noreferrer" className="arrow-btn">
          CONVERSAR <span className="arr">→</span>
        </a>
      </div>
    </section>
  );
}

function Resultados() {
  const ref = useReveal();
  const items = [
    { before: IMG.ba1, after: IMG.ba1, proc: "Clareamento Dental", split: true },
    { before: IMG.ba2, after: IMG.ba2, proc: "Alinhamento & Estética", split: true },
    { before: IMG.ba3, after: IMG.ba3, proc: "Reabilitação Estética", split: true },
    { before: IMG.ba4, after: IMG.ba4, proc: "Prótese Fixa", split: true },
    { before: IMG.face, after: IMG.face, proc: "Harmonização Facial", split: true },
    { before: IMG.lips, after: IMG.lips, proc: "Preenchimento Labial", split: true },
  ];
  return (
    <section id="resultados" ref={ref} style={{ background: "var(--ivory)", padding: "120px 8%" }}>
      <div className="fade-up" style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(36px, 4.5vw, 52px)", color: "var(--mid)" }}>
        as nossas
      </div>
      <h2
        className="fade-up"
        style={{
          fontFamily: "Fraunces, serif",
          fontWeight: 700,
          fontSize: "clamp(44px, 6vw, 64px)",
          color: "var(--brown)",
          margin: "0 0 60px",
          lineHeight: 1,
          letterSpacing: "-1px",
        }}
      >
        TRANSFORMAÇÕES
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {items.map((it, i) => (
          <div
            key={i}
            className="fade-up card-hover"
            style={{ borderRadius: 12, border: "1px solid var(--honey)", overflow: "hidden", background: "var(--sand)" }}
          >
            <div style={{ position: "relative", aspectRatio: "1 / 1", overflow: "hidden" }}>
              <img
                src={it.before}
                alt={`${it.proc} — resultado`}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  background: "var(--honey-dim)",
                  border: "1px solid var(--honey)",
                  color: "var(--honey)",
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  padding: "6px 12px",
                  borderRadius: 999,
                }}
              >
                ANTES
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "var(--honey)",
                  color: "var(--ivory)",
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  padding: "6px 12px",
                  borderRadius: 999,
                }}
              >
                DEPOIS
              </div>
            </div>
            <div style={{ padding: "16px 20px", background: "var(--warm)" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted)" }}>
                RESULTADO REAL
              </div>
              <div style={{ fontSize: 14, color: "var(--brown)", marginTop: 4, fontWeight: 700, letterSpacing: "0.05em" }}>
                {it.proc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Depoimentos() {
  const ref = useReveal();
  return (
    <section ref={ref} style={{ background: "var(--sand)", padding: "120px 8%" }}>
      <div className="fade-up" style={{ display: "flex", gap: 18, alignItems: "baseline", flexWrap: "wrap", marginBottom: 60 }}>
        <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(40px, 5vw, 56px)", color: "var(--brown)" }}>
          feedbacks
        </span>
        <span style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: "clamp(40px, 5vw, 56px)", color: "var(--honey)" }}>
          reais.
        </span>
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "stretch", flexWrap: "wrap" }}>
        <div
          className="fade-up"
          style={{
            flex: "1 1 55%",
            minWidth: 300,
            background: "var(--ivory)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: "56px 48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 20,
              fontFamily: "Fraunces, serif",
              fontWeight: 700,
              fontSize: 140,
              color: "var(--honey)",
              opacity: 0.15,
              lineHeight: 1,
            }}
          >
            "
          </span>
          <p style={{ fontFamily: "Libre Baskerville, serif", fontStyle: "italic", fontSize: "clamp(20px, 2vw, 24px)", color: "var(--brown)", lineHeight: 1.5, position: "relative", zIndex: 2 }}>
            A Dra. Thaís mudou minha relação com o espelho. Após anos com vergonha do sorriso, hoje eu mostro os dentes em todas as fotos.
          </p>
          <div style={{ marginTop: 28, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "var(--honey)", textTransform: "uppercase" }}>
            Camila R.
          </div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>Recife · PE</div>
        </div>
        <div style={{ flex: "1 1 38%", minWidth: 260, display: "flex", flexDirection: "column", gap: 24 }}>
          {[
            { q: "Clareamento incrível, resultado superou tudo que eu esperava. Atendimento acolhedor do início ao fim.", n: "Juliana M.", c: "Olinda · PE" },
            { q: "12 anos de experiência que aparecem no resultado. Harmonização facial perfeita, naturalíssima.", n: "Fernanda L.", c: "Recife · PE" },
          ].map((t) => (
            <div
              key={t.n}
              className="fade-up"
              style={{ background: "var(--ivory)", border: "1px solid var(--line)", borderRadius: 12, padding: "28px 28px", flex: 1 }}
            >
              <p style={{ fontFamily: "Libre Baskerville, serif", fontStyle: "italic", fontSize: 15, color: "var(--brown)", lineHeight: 1.5, margin: 0 }}>
                "{t.q}"
              </p>
              <div style={{ marginTop: 20, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "var(--honey)", textTransform: "uppercase" }}>
                {t.n}
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{t.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  const ref = useReveal();
  return (
    <section
      id="contato"
      ref={ref}
      style={{
        background: "var(--warm)",
        padding: "140px 8%",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 55% 65% at 50% 50%, var(--honey-glow) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="cta-line" style={{ margin: "0 auto 36px" }} />
        <div className="fade-up" style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(48px, 7vw, 72px)", color: "var(--brown)", lineHeight: 1 }}>
          agende sua
        </div>
        <div
          className="fade-up"
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 700,
            fontSize: "clamp(56px, 8vw, 80px)",
            color: "var(--honey)",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginTop: 6,
          }}
        >
          CONSULTA
        </div>
        <p className="fade-up" style={{ fontSize: 15, fontWeight: 300, color: "var(--mid)", marginTop: 24, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          Atendimento personalizado em Recife. 12 anos transformando sorrisos.
        </p>
        <div className="fade-up" style={{ marginTop: 40 }}>
          <a href={AGENDA} target="_blank" rel="noreferrer" className="btn-honey" style={{ padding: "18px 52px", fontSize: 13 }}>
            AGENDAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--brown)", color: "var(--sand)", padding: "80px 8% 32px", borderTop: "1px solid var(--line)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 48 }}>
        <div>
          <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 700, fontSize: 34, color: "var(--honey)" }}>TC</div>
          <div style={{ marginTop: 10, fontSize: 14, color: "var(--sand)" }}>Dra. Thaís Castro</div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>Dentista · Recife · CROPE 10838</div>
          <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 16, color: "var(--honey)", marginTop: 24, maxWidth: 260, lineHeight: 1.5 }}>
            Há 12 anos renovando sorrisos e autoestima.
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--honey)", textTransform: "uppercase", marginBottom: 20 }}>
            NAVEGUE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { l: "SOBRE", h: "#sobre" },
              { l: "TRATAMENTOS", h: "#tratamentos" },
              { l: "RESULTADOS", h: "#resultados" },
              { l: "CONTATO", h: "#contato" },
            ].map((x) => (
              <a key={x.l} href={x.h} style={{ fontSize: 13, color: "var(--muted)", letterSpacing: "0.05em" }}>
                {x.l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--honey)", textTransform: "uppercase", marginBottom: 20 }}>
            CONTATO
          </div>
          <a href={IG} target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--sand)", display: "block", marginBottom: 10 }}>
            @dra.thaiscastro
          </a>
          <a href={AGENDA} target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--honey)", display: "block" }}>
            Agendar consulta →
          </a>
        </div>
      </div>
      <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid rgba(196,154,90,0.2)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
        © 2025 Dra. Thaís Castro · CROPE 10838 · Recife — PE
      </div>
    </footer>
  );
}

function Whatsapp() {
  return (
    <a
      href={AGENDA}
      target="_blank"
      rel="noreferrer"
      className="wa-pulse"
      aria-label="Agendar via WhatsApp"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "var(--honey)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        transition: "transform 300ms",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--ivory)">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Manifesto />
      <Sobre />
      <Tratamentos />
      <Resultados />
      <Depoimentos />
      <CtaFinal />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
