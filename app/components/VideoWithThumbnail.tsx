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
      if (video.readyState >= 2) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL("image/jpeg");
          setThumbnail(dataUrl);
          setThumbnailGenerated(true);
        }
      }
    };

    video.addEventListener("loadedmetadata", () => {
      video.currentTime = 0.1; // Seek to a small time to get a frame
    });

    video.addEventListener("seeked", generateThumbnail);

    // Fallback: try to generate after video loads
    if (video.readyState >= 2) {
      generateThumbnail();
    }

    return () => {
      video.removeEventListener("seeked", generateThumbnail);
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
      >
        Your browser does not support the video tag.
      </video>
    </>
  );
}

