/**
 * Flange Grade Images Registry
 * Dynamically imports all extracted grade images for Flanges.
 */

const gradeImageModules = import.meta.glob('../assets/flanges/grades/*.jpg', {
  eager: true,
  import: 'default'
});

export const FLANGE_GRADE_IMAGES = {};

for (const [filePath, moduleExport] of Object.entries(gradeImageModules)) {
  const match = filePath.match(/\/([^/]+)\.jpg$/);
  if (match) {
    const slug = match[1];
    FLANGE_GRADE_IMAGES[slug] = moduleExport;
  }
}

export function getFlangeGradeImage(gradeSlug) {
  if (!gradeSlug) return null;
  const clean = gradeSlug.toLowerCase().trim();
  return FLANGE_GRADE_IMAGES[clean] || null;
}
