import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  withHover?: boolean;
  borderPosition?: "top" | "left";
}

export function Card({
  children,
  withHover = false,
  borderPosition = "top",
}: CardProps) {
  return (
    <div
      className={`relative overflow-hidden bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,71,136,0.2)]${
        withHover ? " transition hover:shadow-[0_20px_50px_-25px_rgba(0,71,136,0.35)]" : ""
      }${borderPosition === "left" ? " border-s-4 border-primary" : ""}`}
    >
      {borderPosition === "top" && (
        <div className="absolute top-0 start-0 h-1 w-full bg-gradient-to-r from-primary to-secondary" />
      )}
      {children}
    </div>
  );
}
