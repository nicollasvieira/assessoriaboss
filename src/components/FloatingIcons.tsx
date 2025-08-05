import { Scissors, Zap, Brush, PaintBucket, Sparkles, ShieldCheck } from "lucide-react";

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Scissors - Top Left */}
      <div className="absolute top-16 left-8 floating-icon">
        <div className="w-14 h-14 rounded-full border-2 border-amber/40 bg-amber/10 backdrop-blur-md flex items-center justify-center shadow-3d glow-gold">
          <Scissors className="w-7 h-7 text-gold drop-shadow-lg" />
        </div>
      </div>

      {/* Razor - Top Right */}
      <div className="absolute top-24 right-12 floating-icon">
        <div className="w-16 h-16 rounded-full border-2 border-bronze/50 bg-bronze/15 backdrop-blur-md flex items-center justify-center shadow-3d glow-gold">
          <Zap className="w-8 h-8 text-bronze drop-shadow-lg" />
        </div>
      </div>

      {/* Brush - Middle Left */}
      <div className="absolute top-1/2 left-6 floating-icon">
        <div className="w-12 h-12 rounded-full border-2 border-gold/35 bg-gold/12 backdrop-blur-md flex items-center justify-center shadow-3d glow-gold">
          <Brush className="w-6 h-6 text-amber drop-shadow-lg" />
        </div>
      </div>

      {/* Hair Clipper - Bottom Left */}
      <div className="absolute bottom-32 left-16 floating-icon">
        <div className="w-15 h-15 rounded-full border-2 border-amber/45 bg-amber/18 backdrop-blur-md flex items-center justify-center shadow-3d glow-gold">
          <PaintBucket className="w-7 h-7 text-gold drop-shadow-lg" />
        </div>
      </div>

      {/* Barbershop Pole - Bottom Right */}
      <div className="absolute bottom-20 right-8 floating-icon">
        <div className="w-18 h-18 rounded-full border-2 border-bronze/55 bg-bronze/20 backdrop-blur-md flex items-center justify-center shadow-3d glow-gold">
          <div className="w-10 h-10 bg-gradient-to-r from-gold to-bronze rounded-full flex items-center justify-center shadow-inner">
            <Sparkles className="w-5 h-5 text-background drop-shadow-sm" />
          </div>
        </div>
      </div>

      {/* Premium Badge - Top Center Right */}
      <div className="absolute top-20 right-1/3 floating-icon">
        <div className="w-13 h-13 rounded-full border-2 border-gold/40 bg-gold/15 backdrop-blur-md flex items-center justify-center shadow-3d glow-gold">
          <ShieldCheck className="w-6 h-6 text-amber drop-shadow-lg" />
        </div>
      </div>

      {/* Additional floating icon - Middle Right */}
      <div className="absolute top-2/3 right-20 floating-icon">
        <div className="w-11 h-11 rounded-full border-2 border-bronze/30 bg-bronze/8 backdrop-blur-md flex items-center justify-center shadow-3d glow-gold">
          <Scissors className="w-5 h-5 text-bronze drop-shadow-lg rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default FloatingIcons;