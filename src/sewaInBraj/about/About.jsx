import React from 'react';
import './About.css';

export default function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-heading slide-down">Hare Krishna</h1>

      <p className="about-intro fade-in delay-1">
        Welcome to our sacred initiative based in the holy land of Vrindavan. For the past 7 years, our devoted team has been running a spiritual NGO dedicated to supporting underprivileged children.
      </p>

      <p className="about-body fade-in delay-2">
        These children are not only receiving education, but are also learning deep-rooted values of spirituality, devotion, and self-sufficiency. Most of the handcrafted, organic, and original products you see in our shop are made lovingly by them.
      </p>

      <p className="about-body fade-in delay-3">
        Every purchase you make directly contributes to their education, well-being, and spiritual journey. We, the devotees of Lord Krishna, are humbled and grateful for your support in this divine cause.
      </p>

      <div className="about-video-container fade-in delay-4">
        {/* <iframe
          width="100%"
          height="315"
          src="https://youtube.com/shorts/cOa1B1aSdeI?si=0l-NQUB9sWT4BVGV"
          title="About Our NGO - Vrindavan"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/cOa1B1aSdeI"
  title="About Our NGO - Vrindavan"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
      </div>
    </div>
  );
}
