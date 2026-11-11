import { Picture } from "./Picture.jsx";

export function ProjectCover({ project, text, sizes, eager = false, className = "aspect-[16/10]" }) {
  return (
    <div className={`overflow-hidden bg-[#f4f4f2] ${className}`} style={{ viewTransitionName: `cover-${project.slug}` }}>
      <Picture image={project.cover} alt={text.coverAlt} sizes={sizes} eager={eager} className="h-full w-full object-cover" />
    </div>
  );
}
