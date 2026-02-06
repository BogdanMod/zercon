import Link from "next/link";
import { brandTokens, LogoVariant } from "@/lib/brand";
import { SystemMark } from "@/components/brand/system-mark";
import { Wordmark } from "@/components/brand/wordmark";

type LogoProps = {
  href?: string;
  size?: "header" | "footer";
  tone?: "light" | "dark";
  className?: string;
  animate?: boolean;
};

const variant: LogoVariant = "A";

export function Logo({
  href = "/",
  size = "header",
  tone = "dark",
  className,
  animate = false
}: LogoProps) {
  const fontSize = brandTokens.logoFontSize[size];

  return (
    <Link
      href={href}
      className={`brand-logo brand-group ${animate ? "brand-appear" : ""} ${className ?? ""}`}
      style={{ fontSize, letterSpacing: brandTokens.logoTracking }}
      aria-label="Zercon"
    >
      <SystemMark tone={tone} />
      <Wordmark variant={variant} />
    </Link>
  );
}

