import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./WeDo.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const programData = [
  {
    title: "Arts & Culture",
    para: "Art and artists are crucial for fostering human connection and enriching our lives. Through our Arts and Culture program, the foundation champions the arts' ability to inspire, uplift, and strengthen human connections. We recognize that the arts play a vital role in creating vibrant, healthy communities. </br> With a focus on Florida, we collaborate with artists, curators, scholars, and organizations to ensure equal access to outstanding arts and cultural experiences. Our initiatives emphasize the importance of making the arts accessible to all, regardless of background or income. By supporting a diverse array of artistic expressions and cultural programs, we aim to celebrate creativity, foster inclusivity, and build a more connected and culturally rich society.",
    image:
      "https://www.hejlfoundation.org/app/uploads/2024/06/img-program-02-jpg.webp",
  },
  {
    title: "Education",
    para: "Knowledge holds the key to empowerment, and quality education is paramount for unlocking opportunities. Our Education program funds initiatives aimed at expanding learning and support for children, especially those from low- and moderate-income communities. </br> By increasing educational opportunities, we address poverty and equip all children with the tools they need to succeed in school, careers, and life. Additionally, we focus on post-secondary education by collaborating with colleges, universities, and organizations. We fund fellowships, seminars, and projects in various fields, ensuring that students have access to higher education and the resources necessary for academic and professional success. Through these efforts, we aim to create a more equitable and prosperous future for all.",
    image:
      "https://www.hejlfoundation.org/app/uploads/2024/06/img-program-01-jpg.webp",
  },
  {
    title: "Health",
    para: "Ensuring healthy futures for people and the planet is at the heart of our mission. Our Health program strives to diminish health inequities by funding innovative tools, strategies, and research. This includes supporting the development of vaccines, biologics, and cross-cutting technology platforms. </br> These efforts aim to reduce the overall burden of viruses and diseases that affect everyone, ultimately promoting a healthier, more equitable world for all.",
    image:
      "https://www.hejlfoundation.org/app/uploads/2024/06/img-program-03-jpg.webp",
  },
  {
    title: "Privacy & Advocacy",
    para: "Our Policy & Advocacy program is dedicated to establishing strategic partnerships and advocating for policies that support the advancement of the foundation's mission. By shaping global policies, fostering financial innovation, and providing strategic advisory services, we aim to create a supportive environment for our major program and policy objectives. </br> We also focus on building strong partnerships and alliances that can advance the foundation’s goals both nationally and globally. Through these efforts, we strive to drive impactful change and support sustainable progress across all areas of our work.",
    image:
      "https://www.hejlfoundation.org/app/uploads/2024/06/img-program-04-jpg.webp",
  },
];

const circleData = [
  { top: "4%", left: "-3%", size: 180, type: "fill" },
  { top: "22%", left: "88%", size: 130, type: "ring" },
  { top: "38%", left: "4%", size: 90, type: "ring" },
  { top: "55%", left: "92%", size: 200, type: "fill" },
  { top: "72%", left: "-4%", size: 150, type: "fill" },
  { top: "90%", left: "80%", size: 110, type: "ring" },
];

function WeDo() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const dotPathRef = useRef(null);
  const maskPathRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const svg = svgRef.current;
      const dotPath = dotPathRef.current;
      const maskPath = maskPathRef.current;

      /* ---------- build path: section top-left -> images -> section bottom-right ---------- */
      const buildPath = () => {
        const sectionRect = section.getBoundingClientRect();
        const W = sectionRect.width;
        const H = sectionRect.height;
        svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

        const points = gsap.utils.toArray(".we-do-media", section).map((el) => {
          const r = el.getBoundingClientRect();
          return {
            x: r.left - sectionRect.left + r.width / 2,
            top: r.top - sectionRect.top,
            bottom: r.bottom - sectionRect.top,
          };
        });

        if (!points.length) return;

        const first = points[0];
        const last = points[points.length - 1];

        // start: top-left corner of the section, curve into the first image
        const startMidY = first.top / 2;
        let d = `M 0 0 C 0 ${startMidY}, ${first.x} ${startMidY}, ${first.x} ${first.top}`;
        d += ` L ${first.x} ${first.bottom}`;

        // zig-zag between the images
        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const next = points[i];
          const midY = (prev.bottom + next.top) / 2;
          d += ` C ${prev.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.top}`;
          d += ` L ${next.x} ${next.bottom}`;
        }

        // finish: curve from the last image to the bottom-right corner of the section
        const endMidY = (last.bottom + H) / 2;
        d += ` C ${last.x} ${endMidY}, ${W} ${endMidY}, ${W} ${H}`;

        dotPath.setAttribute("d", d);
        maskPath.setAttribute("d", d);

        const length = maskPath.getTotalLength();
        maskPath.style.strokeDasharray = length;
      };

      const mm = gsap.matchMedia();

      /* ---------- dashed line draw (desktop only) ---------- */
      mm.add("(min-width: 769px)", () => {
        buildPath();
        ScrollTrigger.addEventListener("refreshInit", buildPath);

        gsap.fromTo(
          maskPath,
          { strokeDashoffset: () => maskPath.getTotalLength() },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        );

        return () => {
          ScrollTrigger.removeEventListener("refreshInit", buildPath);
        };
      });

      /* ---------- circles zoom up with scroll ---------- */
      gsap.utils
        .toArray(".we-do-circle", sectionRef.current)
        .forEach((circle) => {
          gsap.fromTo(
            circle,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: circle,
                start: "top 95%",
                end: "top 35%",
                scrub: 1,
              },
            },
          );
        });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <div className="we-do-section" ref={sectionRef}>
      {circleData.map((c, i) => (
        <span
          key={i}
          className={`we-do-circle we-do-circle--${c.type}`}
          style={{
            top: c.top,
            left: c.left,
            width: `${c.size}px`,
            height: `${c.size}px`,
          }}
        />
      ))}

      <svg className="we-do-line" ref={svgRef} preserveAspectRatio="none">
        <defs>
          <mask
            id="we-do-line-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <path
              ref={maskPathRef}
              fill="none"
              stroke="#ffffff"
              strokeWidth="10"
            />
          </mask>
        </defs>
        <path
          ref={dotPathRef}
          fill="none"
          stroke="#1a4fd6"
          strokeWidth="4"
          strokeLinecap="butt"
          strokeDasharray="16 12"
          mask="url(#we-do-line-mask)"
        />
      </svg>

      <h2>Program Areas</h2>

      <div className="we-do-wrap">
        {programData.map((item, index) => (
          <div
            key={item.title}
            className={`we-do-card ${index % 2 !== 0 ? "we-do-card--reverse" : ""}`}
          >
            <div className="we-do-media">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="we-do-content">
              <h3>{item.title}</h3>
              {item.para.split("</br>").map((text, i) => (
                <p key={i}>{text.trim()}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeDo;
