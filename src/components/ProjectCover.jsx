import { Picture } from "./Picture.jsx";

// transition: nur ein sichtbares Bild pro Projekt darf den Übergangsnamen tragen, sonst bricht der Übergang ab
export function ProjectCover({ project, text, sizes, eager = false, className = "aspect-[16/10]", transition = true }) {
  return (
    <div
      className={`overflow-hidden bg-[#f4f4f2] ${className}`}
      style={transition ? { viewTransitionName: `cover-${project.slug}` } : undefined}
    >
      <Picture image={project.cover} alt={text.coverAlt} sizes={sizes} eager={eager} className="h-full w-full object-cover" />
    </div>
  );
}
