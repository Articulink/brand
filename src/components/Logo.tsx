interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "logo-text";

  return (
    <span
      className={`font-display font-extrabold tracking-tight select-none ${textColor} ${className}`}
      style={{ fontSize: "inherit" }}
    >
      articulink
    </span>
  );
}

export function LogoWithSize({
  variant = "default",
  size = "text-3xl"
}: {
  variant?: "default" | "white";
  size?: string;
}) {
  const textColor = variant === "white" ? "text-white" : "logo-text";

  return (
    <span className={`font-display font-extrabold tracking-tight select-none ${textColor} ${size}`}>
      articulink
    </span>
  );
}
