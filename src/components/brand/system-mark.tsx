import { brandTokens } from "@/lib/brand";

type SystemMarkProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function SystemMark({ tone = "dark", className }: SystemMarkProps) {
  const opacity = brandTokens.markOpacity[tone];

  return (
    <span className={`system-mark ${className ?? ""}`} aria-hidden="true">
      <span
        className="system-mark-dot"
        style={{
          width: brandTokens.markSize,
          height: brandTokens.markSize,
          opacity
        }}
      />
    </span>
  );
}

