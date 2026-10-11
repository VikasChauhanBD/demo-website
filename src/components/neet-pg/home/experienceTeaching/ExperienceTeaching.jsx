import React from "react";
import { FaPlay } from "react-icons/fa";
import "./ExperienceTeaching.css";
// Add each YouTube link below. The thumbnail is generated automatically.
// Set thumbnailUrl only if you want to use a custom thumbnail image.
const videoCards = [
  {
    number: "01",
    youtubeUrl: "",
    thumbnailUrl:
      "https://cdn.dribbble.com/userupload/49283993/file/22346248d58b131e739fe355d612cbf7.jpeg",
    title: "GRG MASTER CLASS",
    description: "See how Dr. GRG makes difficult concepts simple.",
  },
  {
    number: "02",
    youtubeUrl: "",
    thumbnailUrl:
      "https://cdn.dribbble.com/userupload/49283990/file/aafbf1544987062f9e3b65134bfcda1d.jpeg",
    title: "POWER PACK REVISION",
    description: "Experience focused, high-yield Pharmacology revision.",
  },
  {
    number: "03",
    youtubeUrl: "",
    thumbnailUrl:
      "https://cdn.dribbble.com/userupload/49283991/file/9b429f62adf2d03b9d6a9050cb25214d.jpeg",
    title: "GRG EXPRESS",
    description: "See how Pharmacology can be made faster and more focused.",
  },
];
function getYouTubeThumbnail(url) {
  const videoId = url.match(
    /(?:youtu\.be\/|[?&]v=|youtube\.com\/(?:embed|shorts|live)\/)([a-zA-Z0-9_-]{11})(?=[?&#/]|$)/,
  )?.[1];
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
}
export default function ExperienceTeaching() {
  return (
    <section
      className="experience-section experience-section-three-cards"
      aria-labelledby="experience-heading"
    >
      <div className="experience-container">
        <span className="experience-eyebrow">EXPERIENCE THE TEACHING</span>
        <h2 className="experience-title" id="experience-heading">
          Don&apos;t just read about the GRG way. See it.
        </h2>
        <p className="experience-para">
          See how Dr. GRG explains difficult mechanisms, connects concepts
          clinically and makes Pharmacology easier to remember - without
          oversimplifying the science.
        </p>
        <div className="experience-cards">
          {videoCards.map(
            ({ number, title, description, youtubeUrl, thumbnailUrl }) => {
              const thumbnail = thumbnailUrl || getYouTubeThumbnail(youtubeUrl);
              return (
                <div className="experience-preview" key={number}>
                  <a
                    className="experience-preview-screen"
                    href={youtubeUrl || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${title} on YouTube`}
                    aria-disabled={!youtubeUrl}
                  >
                    {thumbnail && (
                      <img
                        className="experience-video-thumbnail"
                        src={thumbnail}
                        alt={`${title} video thumbnail`}
                        loading="lazy"
                      />
                    )}
                    <span className="experience-card-number" aria-hidden="true">
                      {number}
                    </span>
                    <div className="experience-play" aria-hidden="true">
                      <FaPlay />
                    </div>
                  </a>
                  <div className="experience-preview-bar">
                    <div className="experience-preview-text">
                      <h3 className="experience-card-title">{title}</h3>
                      <p className="experience-card-description">
                        {description}
                      </p>
                    </div>
                    <a
                      className="experience-cta"
                      href={youtubeUrl || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={!youtubeUrl}
                    >
                      WATCH FREE VIDEO
                    </a>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}