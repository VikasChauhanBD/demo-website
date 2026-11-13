import { useState } from "react";
import "./Pillars.css";

const BASE = "https://cdn.sanity.io/images/nyyhaljw/production";

const SIZES = [384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];

const cdn = (file, width, rect = "") =>
  `${BASE}/${file}?${rect}w=1000&h=1000&q=80&auto=format&w=${width}`;

const DEFAULT_IMAGE = {
  alt: "Pharmacology",
  file: "d1f041b778083f5edf7f73da7d3453cc94b6b817-740x740.jpg",
};

const pillars = [
  {
    title: "Mindset",
    href: "#mindset",
    alt: "Mindset",
    file: "c3d544c889178165641ac5bc53181625d5cd3152-740x740.jpg",
  },
  {
    title: "Wealth",
    href: "#wealth",
    alt: "Wealth",
    file: "30775456991a25a9c2ee25f7bb38909535b693a4-740x740.jpg",
  },
  {
    title: "Health",
    href: "#health",
    alt: "Health",
    file: "25bc0844d925755384f609fdcc3df394b88797bc-740x740.jpg",
  },
  {
    title: "Relationships",
    href: "#relationships",
    alt: "Relationships",
    file: "5a659b515be1871e82dbbcac4091fd7eb5dec269-740x740.jpg",
  },
  {
    title: "Business",
    href: "#business",
    alt: "Business",
    file: "95e1ae577997a794ea045ff16b68f8a660407d12-740x740.jpg",
  },
  {
    title: "Leadership",
    href: "#leadership",
    alt: "Leadership",
    file: "e1d265d75bc624a25396ffd69268344ace73e710-1124x770.webp",
    rect: "rect=177,0,770,770&",
  },
  {
    title: "Happiness",
    href: "#happiness",
    alt: "Happiness",
    file: "e3204efb18573e9b85b17a537c18656d8ede46b8-740x740.jpg",
  },
];

const getImage = (pillar, width = 3840) =>
  cdn(pillar.file, width, pillar.rect || "");

const getSrcSet = (pillar) =>
  SIZES.map(
    (width) => `${cdn(pillar.file, width, pillar.rect || "")} ${width}w`,
  ).join(", ");

function Arrow() {
  return (
    <svg className="pillar-arrow" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10.9724 10.0006L6.84766 5.87577L8.02616 4.69727L13.3295 10.0006L8.02616 15.3038L6.84766 14.1253L10.9724 10.0006Z" />
    </svg>
  );
}

export default function Pillars() {
  const [active, setActive] = useState(null);

  return (
    <main className="pillars-page">
      <section className="pillars-section">
        <div className="pillars-container">
          <div className="pillars-grid">
            <div className="pillars-content">
              <div className="pillars-label">
                <span className="pillars-dot"></span>

                <h1>Pillars for an Extraordinary Life</h1>
              </div>

              <ul className="pillars-list" onMouseLeave={() => setActive(null)}>
                {pillars.map((pillar, index) => {
                  const activeItem = active === index;

                  const dimmed = active !== null && !activeItem;

                  return (
                    <li
                      key={pillar.title}
                      className={dimmed ? "pillar-item dimmed" : "pillar-item"}
                    >
                      <a
                        href={pillar.href}
                        className={
                          activeItem ? "pillar-link active" : "pillar-link"
                        }
                        onMouseEnter={() => setActive(index)}
                        onFocus={() => setActive(index)}
                        onBlur={() => setActive(null)}
                      >
                        <span className="pillar-title">{pillar.title}</span>

                        <span className="explore-button">
                          <span>Explore</span>
                          <Arrow />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pillars-image-wrapper">
              <div className="pillars-image">
                {/* DEFAULT IMAGE */}

                <img
                  className={
                    active === null ? "pillar-photo visible" : "pillar-photo"
                  }
                  src={cdn(DEFAULT_IMAGE.file, 2048)}
                  alt={DEFAULT_IMAGE.alt}
                />

                {pillars.map((pillar, index) => (
                  <img
                    key={pillar.title}
                    className={
                      active === index ? "pillar-photo visible" : "pillar-photo"
                    }
                    src={getImage(pillar)}
                    srcSet={getSrcSet(pillar)}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    alt={pillar.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
