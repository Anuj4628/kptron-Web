/**
 * Fastener Grade Images Registry
 * Dynamically imports all extracted grade images for Fasteners.
 */

const gradeImageModules = import.meta.glob('../assets/fasteners/grades/*.jpg', {
  eager: true,
  import: 'default'
});

export const FASTENER_GRADE_IMAGES = {};

for (const [filePath, moduleExport] of Object.entries(gradeImageModules)) {
  const match = filePath.match(/\/([^/]+)\.jpg$/);
  if (match) {
    const slug = match[1];
    FASTENER_GRADE_IMAGES[slug] = moduleExport;
  }
}

export function getFastenerGradeImage(gradeSlug) {
  if (!gradeSlug) return null;
  const clean = gradeSlug.toLowerCase().trim();
  return FASTENER_GRADE_IMAGES[clean] || null;
}
