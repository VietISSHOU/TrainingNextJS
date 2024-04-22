"use client";
import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import { useState } from "react";
import "lightbox.js-react/dist/index.css";

export default function DemoLB() {
  const images = [
    {
      src: "https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75",
      alt: "VJC.",
    },
    {
      src: "https://source.unsplash.com/rsAeSMzOX9Y/768x512",
      alt: "Mechanical keyboard with white, pastel green and red keycaps.",
    },
    {
      src: "https://source.unsplash.com/Z6SXt1v5tP8/768x512",
      alt: "Mechanical keyboard with white, pastel pink, yellow and red keycaps.",
    },
    {
      src: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Night.",
    },
  ];

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img
        src="https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75"
        width={"100%"}
        height={"100%"}
        style={{ marginTop: "165px" }}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <SlideshowLightbox
        images={images}
        showThumbnails={true}
        open={isOpen}
        lightboxIdentifier="lbox1"
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
}
