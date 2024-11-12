export default function VideoComponent({ videoId }) {
  return (
    <div className="relative w-full h-0 pb-[56.25%] md:pb-[38%] overflow-hidden rounded-2xl shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
        title="YouTube Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}
