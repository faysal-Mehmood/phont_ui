
import { useRef, useState, useEffect } from 'react';
import styles from './CustomVideoPlayer.module.scss';

const CustomVideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        const current = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        setProgress((current / duration) * 100);
      }
    };

    const video = videoRef.current;
    video?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className={styles.videoPlayer}>
      <video ref={videoRef} controls className={styles.video}>
        <source src="/videos/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
