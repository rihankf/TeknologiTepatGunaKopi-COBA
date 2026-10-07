export default function SectionHeading({
  eyebrow = "",
  title,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`section-heading${light ? " light" : ""}${className ? ` ${className}` : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
