import BlockchainBackground from '../BlockchainBackground';

export default function BlockchainBackgroundExample() {
  return (
    <div className="relative h-screen bg-background">
      <BlockchainBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-foreground text-2xl">Blockchain Network Animation</p>
      </div>
    </div>
  );
}
