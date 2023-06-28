import * as React from "react";

const embedLinks = [
  "https://open.spotify.com/embed/track/5LGpqIyYU3arwCamXguaKO?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/0moXPCiUTp52M3mh1eRvBW?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/3DiNJhs0bSk2FWAAA53Ilf?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/0eKc1IhMMHoRdxIKYmJRpm?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/6y1Z5dInVdOFNx7QpozBoO?utm_source=generator&theme=0",
];

export default function MusicPlayer() {
  return (
    <div className="bg-[#282828] p-[20px] rounded-[7px]">
      <iframe
        className=" rounded-[12px]"
        src="https://open.spotify.com/embed/track/5LGpqIyYU3arwCamXguaKO?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <div className="px-[10px]">
        {embedLinks.map((link, idx) => (
          <iframe
            style={{ borderRadius: 0 }}
            key={idx.toString()}
            className="rounded-none m-0"
            src={link}
            width="100%"
            height="85"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        ))}
      </div>
    </div>
  );
}
