import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhyGrgSir.css";

gsap.registerPlugin(ScrollTrigger);

const WhyGrgSir = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const introItems = gsap.utils.toArray(".why-grg-intro > *");
      const cards = gsap.utils.toArray(".why-grg-card");
      const flowItems = gsap.utils.toArray(".why-grg-flow-item");
      const ctaContent = gsap.utils.toArray(".why-grg-cta > *");

      // Initial states
      gsap.set(introItems, {
        opacity: 0,
        y: 35,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 50,
        scale: 0.96,
      });

      gsap.set(flowItems, {
        opacity: 0,
        scale: 0.8,
        y: 20,
      });

      gsap.set(ctaContent, {
        opacity: 0,
        y: 30,
      });

      // Intro animation
      gsap.to(introItems, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-grg-intro",
          start: "top 78%",
          once: true,
        },
      });

      // Cards animation
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-grg-cards",
          start: "top 78%",
          once: true,
        },
      });

      // Flow animation
      gsap.to(flowItems, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".why-grg-way",
          start: "top 78%",
          once: true,
        },
      });

      // CTA animation
      gsap.to(ctaContent, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-grg-cta",
          start: "top 82%",
          once: true,
        },
      });

      // Card hover animations
      cards.forEach((card) => {
        const icon = card.querySelector(".why-grg-card-icon");

        const enter = () => {
          gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 8,
            scale: 1.08,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        card._enter = enter;
        card._leave = leave;
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="why-grg-section" ref={sectionRef}>
      <div className="why-grg-container">
        {/* Intro */}
        <div className="why-grg-intro">
          <span className="why-grg-label">WHY GRG SIR?</span>

          <h2 className="why-grg-title">Pharmacology Doesn't Have to Be</h2>

          <h3 className="why-grg-sub-title">Just Memorisation</h3>

          <p className="why-grg-description">
            There is a lot to remember in Pharmacology. But before remembering a
            drug, it helps to understand{" "}
            <strong>why it works in the first place.</strong>
          </p>

          <p className="why-grg-description">
            That is the approach behind GRG Sir's teaching.
          </p>
        </div>

        {/* Learning Method */}
        <div className="why-grg-cards">
          <article className="why-grg-card">
            <div className="why-grg-card-number">01</div>

            <div className="why-grg-card-icon">
              <span>◉</span>
            </div>

            <div className="why-grg-card-content">
              <h3>Understand</h3>
              <p>Start with the concept and the mechanism.</p>
            </div>
          </article>

          <article className="why-grg-card">
            <div className="why-grg-card-number">02</div>

            <div className="why-grg-card-icon">
              <span>✦</span>
            </div>

            <div className="why-grg-card-content">
              <h3>Remember</h3>
              <p>
                Use mnemonics, stories and simple associations when something is
                difficult to retain.
              </p>
            </div>
          </article>

          <article className="why-grg-card">
            <div className="why-grg-card-number">03</div>

            <div className="why-grg-card-icon">
              <span>↗</span>
            </div>

            <div className="why-grg-card-content">
              <h3>Apply</h3>
              <p>
                Connect what you learn with clinical situations and questions.
              </p>
            </div>
          </article>

          <article className="why-grg-card">
            <div className="why-grg-card-number">04</div>

            <div className="why-grg-card-icon">
              <span>↻</span>
            </div>

            <div className="why-grg-card-content">
              <h3>Revise</h3>
              <p>Come back to the important points again and again.</p>
            </div>
          </article>
        </div>

        {/* GRG Way */}
        <div className="why-grg-way">
          <div className="why-grg-way-heading">
            <span>The GRG Way</span>
            <h3>Learn it. Connect it. Remember it.</h3>
          </div>

          <div className="why-grg-flow">
            <div className="why-grg-flow-item">
              <span>Understand</span>
            </div>

            <div className="why-grg-flow-arrow">→</div>

            <div className="why-grg-flow-item">
              <span>Remember</span>
            </div>

            <div className="why-grg-flow-arrow">→</div>

            <div className="why-grg-flow-item">
              <span>Apply</span>
            </div>

            <div className="why-grg-flow-arrow">→</div>

            <div className="why-grg-flow-item">
              <span>Revise</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="why-grg-cta">
          <div className="why-grg-cta-glow"></div>

          <span className="why-grg-cta-label">YOUR PHARMACOLOGY JOURNEY</span>

          <h2>
            You don't have to remember
            <span>everything in one sitting.</span>
          </h2>

          <p>Build your understanding step by step with GRG Sir.</p>

          <a href="#start-learning" className="why-grg-button">
            <span>Learn Pharmacology With GRG Sir</span>
            <span className="why-grg-button-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyGrgSir;
