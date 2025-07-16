import { useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import iitMapImg from "@/assets/iit-map.jpg";

const MapSection = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [pinchStartDist, setPinchStartDist] = useState<number | null>(null);
  const [baseScale, setBaseScale] = useState<number>(scale);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.3, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for pinch-to-zoom
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      setPinchStartDist(Math.hypot(dx, dy));
      setBaseScale(scale);
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStartDist) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDist = Math.hypot(dx, dy);
      const newScale = baseScale * (newDist / pinchStartDist);
      setScale(Math.min(Math.max(newScale, 0.5), 3));
    }
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      setPinchStartDist(null);
    }
  };

  return (
    <section id='map' className='py-16 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6 uppercase'>Campus Map</h2>
            <p className='text-lg text-iit-blue/70 max-w-3xl mx-auto'>
              Navigate through the IIT Kharagpur campus with our interactive map. Use the controls to zoom and explore
              different areas.
            </p>
          </div>

          {/* Map Container */}
          <div className='relative bg-white rounded-xl shadow-lg overflow-hidden'>
            {/* Controls */}
            <div className='absolute top-4 right-4 z-20 flex flex-col space-y-2'>
              <Button
                onClick={handleZoomIn}
                size='sm'
                className='bg-iit-blue hover:bg-iit-blue/90 text-white w-7 h-7 md:[w-10 h-10] p-0 rounded-lg shadow-lg'
                disabled={scale >= 3}>
                <ZoomIn className='w-4 h-4' />
              </Button>
              <Button
                onClick={handleZoomOut}
                size='sm'
                className='bg-iit-blue hover:bg-iit-blue/90 text-white w-7 h-7 md:[w-10 h-10] p-0 rounded-lg shadow-lg'
                disabled={scale <= 0.5}>
                <ZoomOut className='w-4 h-4' />
              </Button>
              <Button
                onClick={handleReset}
                size='sm'
                className='bg-iit-gold hover:bg-iit-gold/90 text-white w-7 h-7 md:[w-10 h-10] p-0 rounded-lg shadow-lg'>
                <RotateCcw className='w-4 h-4 md:[w-2 h-2]' />
              </Button>
            </div>

            {/* Zoom Level Indicator */}
            <div className='absolute top-4 left-4 z-20 bg-black/70 text-white px-3 py-1 rounded-lg text-sm'>
              Zoom: {Math.round(scale * 100)}%
            </div>

            {/* Map Image Container */}
            <div
              className='relative w-full overflow-hidden cursor-grab active:cursor-grabbing'
              style={{ aspectRatio: "16/9" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}>
              <img
                src={iitMapImg}
                alt='IIT Kharagpur Campus Map'
                className='transition-transform duration-300 ease-out select-none'
                style={{
                  transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                  transformOrigin: "center center",
                }}
                draggable={false}
              />

              {/* Overlay with instructions */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none'>
                <div className='absolute bottom-1 md:bottom-4 left-4 text-white'>
                  <div className='flex items-center space-x-2 text-sm bg-black/50 px-1 py-1 md:px-3 md:py-2 rounded-lg'>
                    <MapPin className='w-4 h-4' />
                    <span className='text-xs md:text-base'>Click and drag to pan • Use controls to zoom</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
