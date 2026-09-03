import type { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export default function InteractiveCard({ children, className }: InteractiveCardProps) {
  return <div className={className}>{children}</div>;
}
