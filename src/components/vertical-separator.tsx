type VerticalSeparatorProps = {
  color?: string;
  dotted?: boolean;
  className?: string;
};

export default function VerticalSeparator({
  color = "currentColor",
  dotted = false,
  className,
}: VerticalSeparatorProps) {
  return (
    <div
      aria-hidden="true"
      style={
        dotted
          ? { borderLeft: `2px dotted ${color}` }
          : { backgroundColor: color }
      }
      className={`${dotted ? "" : "w-px"} self-stretch ${className ?? ""}`}
    />
  );
}
