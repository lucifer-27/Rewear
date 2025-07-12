import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

interface SmartValuationBadgeProps {
  originalPrice: number;
  points: number;
}

export function SmartValuationBadge({ originalPrice, points }: SmartValuationBadgeProps) {
  return (
    <Badge variant="outline" className="border-accent bg-accent/10 text-accent-foreground">
      <div className="flex items-center gap-2 font-code">
        <Sparkles className="h-4 w-4 text-yellow-500" />
        <span>
          Auto-Valued: ₹{originalPrice.toLocaleString()} (Original) → {points.toLocaleString()} pts
        </span>
      </div>
    </Badge>
  );
}
