type VerticalSeparatorProps = {
  color?: string;
  className?: string;
};

export default function VerticalSeparator({
  color = "currentColor",
  className,
}: VerticalSeparatorProps) {
  return (
    <div
      aria-hidden="true"
      style={{ backgroundColor: color }}
      className={`w-px self-stretch ${className ?? ""}`}
    />
  );
}
