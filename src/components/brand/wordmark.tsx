import { brandTokens, LogoVariant } from "@/lib/brand";

type WordmarkProps = {
  variant: LogoVariant;
  className?: string;
};

export function Wordmark({ variant, className }: WordmarkProps) {
  const dividerStyle = {
    width: brandTokens.divider.width,
    height: brandTokens.divider.height,
    borderRadius: "999px",
    background: "currentColor",
    opacity: 0.45
  } as const;

  return (
    <span className={`brand-wordmark ${className ?? ""}`}>
      <span>ZER</span>
      {variant === "A" && <span className="brand-divider" style={dividerStyle} aria-hidden="true" />}
      {variant === "B" && (
        <span
          className="brand-divider"
          style={{
            width: brandTokens.divider.thickness,
            height: "1em",
            opacity: 0.5
          }}
          aria-hidden="true"
        />
      )}
      {variant === "C" && (
        <span
          className="brand-divider"
          style={{
            width: "0.9em",
            height: brandTokens.divider.height,
            opacity: 0
          }}
          aria-hidden="true"
        />
      )}
      <span>CON</span>
    </span>
  );
}

