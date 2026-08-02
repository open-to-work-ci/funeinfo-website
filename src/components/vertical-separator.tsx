type VerticalSeparatorProps = {
  color?: string;
  dotted?: boolean;
  className?: string;
  orientation?: "vertical" | "horizontal";
  stretch?: boolean;
};

export default function VerticalSeparator({
  color = "currentColor",
  dotted = false,
  className,
  orientation = "vertical",
  stretch = true,
}: VerticalSeparatorProps) {
  const isHorizontal = orientation === "horizontal";
  return (
    <div
      aria-hidden="true"
      style={
        dotted
          ? isHorizontal
            ? { borderTop: `2px dotted ${color}` }
            : { borderLeft: `2px dotted ${color}` }
          : { backgroundColor: color }
      }
      className={`${dotted ? "" : isHorizontal ? "h-px w-full" : "w-px"} ${stretch ? "self-stretch" : ""} ${className ?? ""}`}
    />
  );
}
