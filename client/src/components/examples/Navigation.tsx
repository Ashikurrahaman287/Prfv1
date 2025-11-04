import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="relative">
      <Navigation />
      <div className="h-screen bg-background pt-20">
        <p className="text-center text-foreground">Scroll to see navigation effect</p>
      </div>
    </div>
  );
}
