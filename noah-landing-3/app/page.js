'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const videos = [
  {
    title: "wilkinson sword",
    thumbnail: "/thumbnails/wilkinson.png",
    url: "https://youtu.be/K5Is0uYoVes?si=a6_3WU-FPOfbGuhw",
    description: "composer + producer",
  },
  {
    title: "invincible",
    thumbnail: "/thumbnails/invincible.png",
    url: "https://youtu.be/zySXmuDDt_I?si=NltSzpcfAGms3ftu&t=23",
    description: "artist + writer + producer",
  },
  {
    title: "samsung",
    thumbnail: "/thumbnails/samsung.png",
    url: "https://youtu.be/iKs9r8oeMgM?si=V14FyjcSSYFE-EiV",
    description: "artist + writer + producer",
  },
  {
    title: "john legend",
    thumbnail: "/thumbnails/johnlegend1.png",
    url: "https://youtu.be/jJN_VX-_bdc?si=KLGYJzfRChIxPJhW",
    description: "director + animator",
  },
  {
    title: "animation reel",
    thumbnail: "/thumbnails/animationreel.png",
    url: "https://www.youtube.com/watch?v=EkFGu2qWFEY",
    description: "director + animator",
  },
  {
    title: "ocado",
    thumbnail: "/thumbnails/ocado.png",
    url: "https://youtu.be/DwKMuUtCJTE?si=yp_tK383640XzHF",
    description: "composer + writer + producer",
  },
  {
    title: "the national",
    thumbnail: "/thumbnails/thenational1.png",
    url: "https://youtu.be/NYeX551dfiY?si=uHoM4_Mz5B1f-beE",
    description: "director + animator",
  },
  {
    title: "ikea",
    thumbnail: "/thumbnails/ikea.png",
    url: "https://www.tiktok.com/@ikeauk/video/7502396170581445910",
    description: "composer + producer",
  },
  {
    title: "danone",
    thumbnail: "/thumbnails/danone.png",
    url: "https://youtu.be/oReBAO7ut04?si=StHPcO0RLu7f7Mpw",
    description: "composer + writer + producer",
  },
  {
    title: "cadbury",
    thumbnail: "/thumbnails/cadbury.png",
    url: "https://youtu.be/EeOfDlW5Yw4?si=s6qv4Bzed2rDLuPu",
    description: "composer + producer",
  },
  {
    title: "john legend + kelly clarkson",
    thumbnail: "/thumbnails/johnlegend2.png",
    url: "https://youtu.be/DlMP7FGYJmk?si=HnQZnNu8v5BEsWVV",
    description: "director + animator",
  },
  {
    title: "romantic dividends",
    thumbnail: "/thumbnails/romanticdividends.png",
    url: "https://youtube.com/shorts/iKUO-isnG_U?si=LjYMaIlaj0uQnQ5i",
    description: "director + animator",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <main className="min-h-screen bg-[#fff7e4] text-black font-sans relative overflow-x-hidden">

      {!menuOpen && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(true)}
            className="hover:bg-transparent focus:outline-none focus:ring-0"
          >
            <Menu />
          </Button>
        </div>
      )}

      <section className="fixed top-0 left-0 right-0 bg-[#fff7e4] text-center z-40 pt-10 pb-6 px-4">
        <motion.img
          src="/noahsacrelogo.png"
          alt="Noah Sacré logo"
          className="w-[300px] mb-3 sm:w-[250px] md:w-[300px] lg:w-[350px] mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="text-md md:text-lg mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          artist ☯︎ composer ☯︎ director
        </motion.p>
        <motion.a
          href="mailto:noah@noahsacre.com?subject=hey%20what's%20up"
          className="text-[#2a9c62] font-bold underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          hire me!
        </motion.a>
      </section>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-[240px] bg-[#fff7e4] z-50 flex flex-col items-center justify-center text-[#2a9c62] font-bold space-y-2">
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:bg-transparent focus:outline-none focus:ring-0"
            >
              <X className="text-black" />
            </Button>
          </div>
          <a
            href="mailto:noah@noahsacre.com?subject=hey%20what's%20up"
            className="block py-2 text-center"
          >
            contact
          </a>
          <a
            href="https://www.instagram.com/speelburg/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-center"
          >
            insta
          </a>
          <a
            href="https://www.youtube.com/speelburg"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-center"
          >
            youtube
          </a>
        </div>
      )}

      <section className="p-8 pt-[330px]" id="work">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 mx-auto px-4 sm:px-8 lg:px-32">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-[90%] mx-auto h-[180px] object-cover"
              />
              <p className="mt-2 text-sm text-center text-[#2a9c62] font-bold">
                {video.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm bg-black/10 transition-all duration-300 ease-in-out flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="bg-[#fff7e4] p-2 rounded-lg overflow-hidden max-w-3xl w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" onClick={() => setSelectedVideo(null)}>
                  <X />
                </Button>
              </div>
              <div className="aspect-video mb-4">
                {(() => {
                  const { url } = selectedVideo;
                  let embedUrl = "";

                  if (url.includes("youtu.be")) {
                    const id = url.split("youtu.be/")[1].split("?")[0];
                    embedUrl = `https://www.youtube.com/embed/${id}`;
                  } else if (url.includes("youtube.com/shorts")) {
                    const id = url.split("shorts/")[1].split("?")[0];
                    embedUrl = `https://www.youtube.com/embed/${id}`;
                  } else if (url.includes("youtube.com/watch")) {
                    const id = new URL(url).searchParams.get("v");
                    embedUrl = `https://www.youtube.com/embed/${id}`;
                  } else if (url.includes("tiktok.com")) {
                    const id = url.split("/video/")[1].split("?")[0];
                    embedUrl = `https://www.tiktok.com/embed/${id}`;
                  }

                  return (
                    <iframe
                      src={embedUrl}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  );
                })()}
              </div>

              {selectedVideo.description && (
                <p className="text-center text-sm text-[#2a9c62] font-semibold mb-2">
                  {selectedVideo.description}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer id="contact" className="p-8 text-center text-sm">
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/speelburg/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold text-[#000000]"
          >
            insta
          </a>
          <a
            href="https://www.youtube.com/speelburg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold text-[#000000]"
          >
            youtube
          </a>
        </div>
      </footer>
    </main>
  );
}
