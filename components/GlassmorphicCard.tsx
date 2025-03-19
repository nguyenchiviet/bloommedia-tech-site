import { cn } from '@/lib/utils';

interface GlassmorphicCardProps {
  className?: string;
  children: React.ReactNode;
  highlightTop?: boolean;
}

export function GlassmorphicCard({ 
  className, 
  children, 
  highlightTop = false 
}: GlassmorphicCardProps) {
  return (
    <div 
      className={cn(
        "relative rounded-xl overflow-hidden backdrop-blur-md border border-white/30",
        highlightTop ? "bg-gradient-to-b from-white/25 to-white/10" : "bg-white/15",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {/* Add a subtle overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
