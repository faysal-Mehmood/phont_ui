import { useState, useEffect, useRef } from "react";

const VideoPlayer = ({ videoUrl, subtitles }) => {
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [emotion, setEmotion] = useState("");
  const [emotionIntensity, setEmotionIntensity] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (subtitles) {
        const currentTime = videoRef.current.currentTime;
        const subtitle = subtitles.find(
          (s) => currentTime >= s.start_time && currentTime <= s.end_time
        );

        if (subtitle) {
          setCurrentSubtitle(subtitle.subtitle);
          setEmotion(subtitle.emotion);
          setEmotionIntensity(subtitle.emotion_intensity);
        } else {
          setCurrentSubtitle("");
          setEmotion("");
          setEmotionIntensity(0);
        }
      }

      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      };
    };
  }, [subtitles]);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          style={{ width: "100%" }}
        />
        {currentSubtitle && (
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              width: "100%",
              textAlign: "center",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              fontSize: "24px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
            }}
          >
            {currentSubtitle}
          </div>
        )}
      </div>
      {emotion && (
        <div>
          <p>Emotion: {emotion}</p>
          <p>Intensity: {emotionIntensity}</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
