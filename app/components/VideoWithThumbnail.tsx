"use client";

import { useEffect, useRef, useState } from "react";

interface VideoWithThumbnailProps {
  src: string;
  className?: string;
}

export default function VideoWithThumbnail({ src, className = "" }: VideoWithThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [thumbnailGenerated, setThumbnailGenerated] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas || thumbnailGenerated) return;

    const generateThumbnail = () => {
      try {
        if (video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
            setThumbnail(dataUrl);
            setThumbnailGenerated(true);
          }
        }
      } catch (error) {
        console.error("Error generating thumbnail:", error);
      }
    };

    const handleLoadedMetadata = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        video.currentTime = 0.1; // Seek to a small time to get a frame
      }
    };

    const handleSeeked = () => {
      generateThumbnail();
    };

    const handleLoadedData = () => {
      if (!thumbnailGenerated) {
        generateThumbnail();
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("loadeddata", handleLoadedData);

    // Try to generate immediately if video is already loaded
    if (video.readyState >= 2) {
      setTimeout(() => {
        if (!thumbnailGenerated) {
          generateThumbnail();
        }
      }, 100);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [thumbnailGenerated]);

  return (
    <>
      <canvas ref={canvasRef} className="hidden" />
      <video
        ref={videoRef}
        src={src}
        poster={thumbnail || undefined}
        controls
        className={className}
        preload="metadata"
        crossOrigin="anonymous"
      >
        Your browser does not support the video tag.
      </video>
    </>
  );
}

