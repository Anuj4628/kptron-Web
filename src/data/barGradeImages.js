/**
 * Bar Grade Images Registry
 * Dynamically imports all extracted grade images for Bars.
 */

const gradeImageModules = import.meta.glob('../assets/bars/grades/*.jpg', {
  eager: true,
  import: 'default'
});

export const BAR_GRADE_IMAGES = {};

for (const [filePath, moduleExport] of Object.entries(gradeImageModules)) {
  const match = filePath.match(/\/([^/]+)\.jpg$/);
  if (match) {
    const slug = match[1];
    BAR_GRADE_IMAGES[slug] = moduleExport;
  }
}

export function getBarGradeImage(gradeSlug) {
  if (!gradeSlug) return null;
  const clean = gradeSlug.toLowerCase().trim();
  return BAR_GRADE_IMAGES[clean] || null;
}
