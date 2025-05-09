'use client'; // This marks the file as a client-side component

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const videos = [
  {
    title: "wilkinson",
    thumbnail: "/thumbnails/wilkinson.png",
    url: "https://youtu.be/K5Is0uYoVes?si=a6_3WU-FPOfbGuhw",
  },
  {
    title: "invincible",
    thumbnail: "/thumbnails/invincible.png",
    url: "https://youtu.be/zySXmuDDt_I?si=NltSzpcfAGms3ftu&t=23",
  },
  {
    title: "samsung",
    thumbnail: "/thumbnails/samsung.png",
    url: "https://www.facebook.com/watch/?v=1640209502787979",
  },
  {
    title: "ocado",
    thumbnail: "/thumbnails/ocado.png",
    url: "https://youtu.be/DwKMuUtCJTE?si=yp_tK3836540XzHF",
  },
  {
    title: "cadbury",
    thumbnail: "/thumbnails/cadburys.png",
    url: "https://youtu.be/EeOfDlW5Yw4?si=s6qv4Bzed2rDLuPu",
  },
  {
    title: "danone",
    thumbnail: "/thumbnails/danone.png",
    url: "https://www.youtube.com/watch?v=oReBAO7ut04&t=4s",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <main className="min-h-screen bg-[#fff7e4] text-black font-sans relative">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-end p-4 z-50 bg-[#fff7e4] md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-[#fff7e4] p-4 z-40 md:hidden">
          <a href="mailto:noah@noahsacre.com?subject=hey%20what's%20up" className="block py-2">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-16 pb-20 px-4">
        <motion.img
          src="/noahsacrelogo.png"
          alt="Noah Sacré logo"
          className="w-[300px] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="text-md md:text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          artist ☯︎ composer ☯︎ director
        </motion.p>
        <motion.a
          href="mailto:noah@noahsacre.com?subject=hey%20what's%20up"
          className="text-blue-600 underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          contact
        </motion.a>
      </section>

      {/* Work Section */}
      <section className="p-8" id="work">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="w-full h-[180px] object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-sm text-center">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="bg-white p-2 rounded-lg overflow-hidden max-w-3xl w-full relative"
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
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.url.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contact" className="p-8 text-center text-sm text-gray-500">
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/speelburg/" target="_blank" rel="noopener noreferrer" className="underline">insta</a>
          <a href="https://www.youtube.com/speelburg" target="_blank" rel="noopener noreferrer" className="underline">youtube</a>
        </div>
      </footer>
    </main>
  );
}
