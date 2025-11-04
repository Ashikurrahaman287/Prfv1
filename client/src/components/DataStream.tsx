export default function DataStream() {
  const streams = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 5) % 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${8 + Math.random() * 4}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-20"
          style={{
            left: stream.left,
            height: '200px',
            animationDelay: stream.delay,
            animationDuration: stream.duration,
            animation: 'dataStreamFall linear infinite',
          }}
        />
      ))}
      
      <style>{`
        @keyframes dataStreamFall {
          0% {
            transform: translateY(-200px);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
