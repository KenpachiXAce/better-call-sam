"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAudioSource, setHasAudioSource] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("3:52");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Use the user-supplied local soundtrack so playback is reliable and private.
  useEffect(() => {
    const audio = new Audio("/audio/all-the-stars.mp3");
    audio.preload = "metadata";
    audio.loop = true;
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setHasAudioSource(true);
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60);
      setDuration(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
    };

    const handleTimeUpdate = () => {
      const minutes = Math.floor(audio.currentTime / 60);
      const seconds = Math.floor(audio.currentTime % 60);
      setCurrentTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      // Graceful fallback when local commercial audio is not supplied
      setHasAudioSource(false);
      setIsPlaying(false);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current || !hasAudioSource) {
      // Toggle visual preview mode if audio file is not locally provided
      setIsPlaying(!isPlaying);
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <aside
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
      aria-label="Background Soundtrack Player"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Information Flyout Tooltip / Panel */}
      <AnimatePresence>
        {(isHovered || isPlaying) && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex flex-col p-3 bg-[#111214]/95 border border-[rgba(247,244,238,0.16)] backdrop-blur-xl shadow-2xl text-[11px] max-w-[210px]"
          >
            <div className="flex items-center justify-between text-[#A5A2A0] text-[9px] uppercase tracking-wider mb-1">
              <span className="flex items-center gap-1 text-[#EA2B1F]">
                <Music className="w-3 h-3" />
                <span>SOUNDTRACK</span>
              </span>
              <span>{isPlaying ? `${currentTime} / ${duration}` : "PAUSED"}</span>
            </div>

            <div className="font-semibold text-[#F7F4EE] truncate">All the Stars</div>
            <div className="text-[10px] text-[#A5A2A0] truncate">Kendrick Lamar &amp; SZA</div>

            {!hasAudioSource && (
              <div className="mt-1.5 pt-1.5 border-t border-[rgba(247,244,238,0.1)] text-[8px] text-[rgba(247,244,238,0.5)]">
                [Audio asset: /public/audio/all-the-stars.mp3]
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Vinyl Record Button */}
      <button
        onClick={togglePlay}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#000000] border-2 border-[rgba(247,244,238,0.2)] hover:border-[#EA2B1F] flex items-center justify-center p-1 group shadow-[0_0_20px_rgba(0,0,0,0.8)] focus-visible:ring-2 focus-visible:ring-[#EA2B1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090A0C] transition-all"
        aria-label={isPlaying ? "Pause All the Stars by Kendrick Lamar & SZA" : "Play All the Stars by Kendrick Lamar & SZA"}
      >
        {/* Soft Violet Hover Glow */}
        <div className="absolute -inset-2 rounded-full bg-[rgba(179,124,255,0.15)] opacity-0 group-hover:opacity-100 filter blur-md transition-opacity pointer-events-none" />

        {/* Vinyl Disc Grooves with Rotation on Play */}
        <div
          className={`w-full h-full rounded-full border border-[#4A4750]/60 flex items-center justify-center relative overflow-hidden transition-transform ${
            isPlaying && !shouldReduceMotion ? "animate-spin" : ""
          }`}
          style={{ animationDuration: "3.5s", animationTimingFunction: "linear" }}
        >
          {/* Concentric Vinyl Grooves */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[rgba(247,244,238,0.15)] flex items-center justify-center">
            {/* Center label */}
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#8D120B] border border-[#EA2B1F] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#F7F4EE]" />
            </div>
          </div>
        </div>

        {/* Center Play / Pause Indicator Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          {isPlaying ? (
            <Pause className="w-4 h-4 text-[#F7F4EE]" />
          ) : (
            <Play className="w-4 h-4 text-[#EA2B1F] ml-0.5" />
          )}
        </div>
      </button>
    </aside>
  );
}
