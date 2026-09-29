import React, { useRef, useState } from "react";
import "./EventsSection.css";

const events = [
  {
    name: "BUSINESS MASTERY",
    subtitle: "Grow your business exponentially",
    video:
      "https://cdnsnty.tonyrobbins.com/2024-05-08T01-20-51.563Z-Homepage_Cards_BM.mp4",
    logo: "https://cdn.sanity.io/images/nyyhaljw/production/9fc4ecf5a801e10e563ced83f062d542430e67b2-600x344.svg?rect=220,0,160,344&w=160&h=344&q=80&auto=format",
  },
  {
    name: "LEADERSHIP ACADEMY",
    subtitle: "Become a great leader",
    video:
      "https://cdnsnty.tonyrobbins.com/2024-04-23T01-09-03.192Z--f5b1-4906-b04f-c0b24647b806.mp4",
    logo: "https://cdn.sanity.io/images/nyyhaljw/production/241403b0dd4ee08094a135f86b8bd15dad16da5d-215x92.svg?rect=28,0,160,92&w=160&h=92&q=80&auto=format",
  },
  {
    name: "DATE WITH DESTINY",
    subtitle: "Create life according to your terms",
    video:
      "https://cdnsnty.tonyrobbins.com/2024-05-08T01-12-57.745Z-Homepage_Cards_DWD.mp4",
    logo: "https://cdn.sanity.io/images/nyyhaljw/production/193c4f5eab47da3a487695387952c0da6173be1f-600x336.svg?rect=220,0,160,336&w=160&h=336&q=80&auto=format",
  },
  {
    name: "UNLEASH THE POWER WITHIN",
    subtitle: "The Life You Want Is Still Waiting for You",
    video:
      "https://cdnsnty.tonyrobbins.com/2024-05-08T15-59-19.630Z-UPW_About_SizzleTeaser.mp4",
    logo: "https://cdn.sanity.io/images/nyyhaljw/production/3b173677a053c52a06823013b74c34960b30ccc6-550x486.svg?rect=195,0,160,486&w=160&h=486&q=80&auto=format",
  },
  {
    name: "LIFE MASTERY",
    subtitle: "Master mind and body",
    video:
      "https://cdnsnty.tonyrobbins.com/2024-05-08T20-27-49.267Z-Homepage_Cards_LMCropped.mp4",
    logo: "https://cdn.sanity.io/images/nyyhaljw/production/9f8860196a03e1e8e8565b69cf7b702f27bb8181-476x472.svg?rect=158,0,160,472&w=160&h=472&q=80&auto=format",
  },
  {
    name: "WEALTH MASTERY",
    subtitle: "Build your money machine",
    video:
      "https://cdnsnty.tonyrobbins.com/2024-05-08T16-00-11.997Z-WM_About_SizzleTeaser.mp4",
    logo: "https://cdn.sanity.io/images/nyyhaljw/production/7d88b4974aade411c8862988333959b2e2179361-500x317.svg?rect=170,0,160,317&w=160&h=317&q=80&auto=format",
  },
  {
    name: "LIFE & WEALTH MASTERY FIJI",
    subtitle: "Rejuvenate your health and build your wealth",
    image:
      "https://cdn.sanity.io/images/nyyhaljw/production/372dfa7c7b88df2f0b2ef58f091cf8b059e92015-1520x855.jpg?rect=478,0,564,855&w=330&h=500&q=80&auto=format",
    logo: "https://cdn.sanity.io/images/nyyhaljw/production/8ff1c39c59227d8a1348aaf61db646f265136b12-600x462.svg?rect=220,0,160,462&w=160&h=462&q=80&auto=format",
  },
];

const EventsSection = () => {
  const sliderRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const moveSlider = (direction) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const card = slider.querySelector(".event-card");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 10;
    const moveAmount = (cardWidth + gap) * 3;
    slider.scrollBy({
      left: direction * moveAmount,
      behavior: "smooth",
    });
    setTimeout(() => {
      updateActiveDot();
    }, 500);
  };

  const updateActiveDot = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const card = slider.querySelector(".event-card");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 10;
    const position = slider.scrollLeft / (cardWidth + gap);
    const page = Math.round(position / 3);
    setActiveDot(Math.max(0, Math.min(page, 3)));
  };

  const goToPage = (index) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const card = slider.querySelector(".event-card");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 10;
    const scrollPosition = index * (cardWidth + gap) * 3;
    slider.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    setActiveDot(index);
  };

  return (
    <section className="events-section">
      <div className="events-header">
        <div className="events-heading">
          <h2>Events that liberate</h2>
          <a href="#events" className="discover-events">
            <span>Discover events</span>
            <svg viewBox="0 0 20 20">
              <path d="M10.9724 10.0006L6.84766 5.87577L8.02616 4.69727L13.3295 10.0006L8.02616 15.3038L6.84766 14.1253L10.9724 10.0006Z" />
            </svg>
          </a>
        </div>

        <div className="events-arrows">
          <button
            type="button"
            onClick={() => moveSlider(-1)}
            aria-label="Previous events"
          >
            <svg viewBox="0 0 24 24">
              <path d="M13.1685 12.0007L8.21875 7.05093L9.63296 5.63672L15.997 12.0007L9.63296 18.3646L8.21875 16.9504L13.1685 12.0007Z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => moveSlider(1)}
            aria-label="Next events"
          >
            <svg viewBox="0 0 24 24">
              <path d="M13.1685 12.0007L8.21875 7.05093L9.63296 5.63672L15.997 12.0007L9.63296 18.3646L8.21875 16.9504L13.1685 12.0007Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="events-slider" ref={sliderRef} onScroll={updateActiveDot}>
        {events.map((event, index) => (
          <article className="event-card" key={event.name}>
            <a href="#events" className="event-card-link">
              {event.video ? (
                <video
                  className="event-media"
                  src={event.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  className="event-media"
                  src={event.image}
                  alt={event.name}
                />
              )}
              <div className="event-overlay"></div>
              <div className="event-content">
                <img
                  src={event.logo}
                  alt={event.name}
                  className={`event-logo event-logo-${index}`}
                />
                <p>{event.subtitle}</p>
              </div>
            </a>
          </article>
        ))}
      </div>

      <div className="events-pagination">
        {[0, 1, 2, 3].map((dot) => (
          <button
            key={dot}
            type="button"
            aria-label={`Go to event page ${dot + 1}`}
            className={
              activeDot === dot ? "pagination-dot active" : "pagination-dot"
            }
            onClick={() => goToPage(dot)}
          />
        ))}
      </div>
    </section>
  );
};
export default EventsSection;
