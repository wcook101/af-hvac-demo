"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";

const videoSrc = "/commercial/af-hvac-commercial.mp4";
const posterSrc = "/commercial/af-hvac-commercial-poster.jpg";

export function CommercialFeature() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [playing, setPlaying] = useState(false);

  function startPlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.getAttribute("src")) {
      video.src = videoSrc;
    }
    video.loop = false;
    video.muted = false;
    video.volume = 1;
    setPlaying(true);
    void video.play();
  }

  function watchCommercial() {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    startPlayback();
  }

  return (
    <section
      ref={sectionRef}
      id="commercial"
      aria-labelledby="commercial-heading"
      className="scroll-mt-40 bg-navy-deep px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-xl shadow-black/30">
            <video
              ref={videoRef}
              poster={posterSrc}
              preload="none"
              playsInline
              controls={playing}
              width={1080}
              height={1440}
              className="h-auto w-full"
              onPlay={() => setPlaying(true)}
              onEnded={() => setPlaying(false)}
            />
            {playing ? null : (
              <button
                type="button"
                onClick={startPlayback}
                className="absolute inset-0 flex items-center justify-center bg-navy-deep/15"
                aria-label="Play the A&F HVAC commercial"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-copper text-navy shadow-xl shadow-black/40 transition hover:bg-[#f09a68]">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-9 w-9 fill-current">
                    <path d="M8 5.5v13l11-6.5-11-6.5z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Our commercial</p>
          <h2
            id="commercial-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl lg:text-5xl"
          >
            No Heat? Don&apos;t Get Left in the Cold.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            When your heating system stops working, you need someone you can count on. For over 25
            years, A&amp;F HVAC has been keeping local families comfortable.
          </p>
          <p className="mt-4 font-semibold text-cream">Family Owned &amp; Operated for Over 25 Years.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={watchCommercial} className="btn-copper h-12 px-6">
              Watch Our Commercial
            </button>
            <a href={site.phoneHref} className="btn-ghost h-12 px-6">
              Call {site.phoneDisplay}
            </a>
            <a href="/contact#estimate" className="btn-ghost h-12 px-6">
              Request Service
            </a>
          </div>
          <p className="mt-8 font-display text-2xl font-semibold tracking-tight text-copper">
            Your Comfort Is Our Business.
          </p>
        </div>
      </div>
    </section>
  );
}
