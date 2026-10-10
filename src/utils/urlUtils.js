/**
 * ======================================================================
 * URL Utilities for SEO-friendly naming conventions across KPTRON
 * Supports clean, SEO-friendly hyphen-separated URLs alternating between:
 * - manufactured-in-mumbai
 * - stockist-in-mumbai
 * ======================================================================
 */

import { 
  resolveProductFromPath, 
  stripSeoSuffix, 
  SUFFIX_MANUFACTURED, 
  SUFFIX_STOCKIST 
} from '../data/productSeoRegistry.js';

export const MANUFACTURED_SUFFIX = `-${SUFFIX_MANUFACTURED}`;
export const STOCKIST_SUFFIX = `-${SUFFIX_STOCKIST}`;

/**
 * Checks whether a URL, path, or slug has the manufactured-in-mumbai indicator
 */
export function isManufacturedInMumbaiUrl(url = '') {
  if (!url || typeof url !== 'string') return false;
  return url.toLowerCase().includes(SUFFIX_MANUFACTURED);
}

/**
 * Checks whether a URL, path, or slug has the stockist-in-mumbai indicator
 */
export function isStockistInMumbaiUrl(url = '') {
  if (!url || typeof url !== 'string') return false;
  return url.toLowerCase().includes(SUFFIX_STOCKIST);
}

/**
 * Strips -manufactured-in-mumbai or -stockist-in-mumbai from any slug or segment
 */
export function cleanProductSlug(slug = '') {
  return stripSeoSuffix(slug);
}

/**
 * Formats any product URL to its canonical alternating SEO URL format.
 * Preserves query strings, hashes, and normalizes legacy paths.
 *
 * Reference format:
 * /products/pipes-tubes/stainless-steel-304-304l-304h-pipes-tubes-manufactured-in-mumbai
 * /products/pipes-tubes/stainless-steel-316-pipes-tubes-stockist-in-mumbai
 */
export function formatProductUrl(url) {
  if (!url || typeof url !== 'string') return url;

  // Handle hash routing, e.g. #products/... or #/products/...
  const isHash = url.startsWith('#');
  let cleanUrl = url;
  if (isHash) {
    cleanUrl = url.replace(/^#\/?/, '/');
  }

  // Preserve query string if any (e.g. ?grade=316l)
  const queryIdx = cleanUrl.indexOf('?');
  let query = '';
  let pathOnly = cleanUrl;
  if (queryIdx !== -1) {
    query = cleanUrl.slice(queryIdx);
    pathOnly = cleanUrl.slice(0, queryIdx);
  }

  // Preserve secondary hash if any inside path (e.g. #rfq)
  const hashIdx = pathOnly.indexOf('#');
  let secondaryHash = '';
  if (hashIdx !== -1) {
    secondaryHash = pathOnly.slice(hashIdx);
    pathOnly = pathOnly.slice(0, hashIdx);
  }

  // If path is not under /products, return original
  if (!pathOnly.startsWith('/products')) {
    return url;
  }

  // If path is exactly /products or /products/
  if (pathOnly === '/products' || pathOnly === '/products/') {
    return isHash ? `#${pathOnly.slice(1)}${secondaryHash}${query}` : `${pathOnly}${secondaryHash}${query}`;
  }

  // 1. Check if path resolves to a registered canonical product
  const resolved = resolveProductFromPath(pathOnly);
  if (resolved && resolved.canonicalUrl) {
    let finalQuery = query;
    // If original path had a 4th segment representing a grade for a type, preserve it as ?grade=...
    const rawSegments = pathOnly.replace(/^\/products\/?/i, '').split('/').filter(Boolean);
    if (rawSegments.length >= 4 && (rawSegments[0] === 'flanges' || rawSegments[0] === 'fasteners')) {
      const extraGrade = rawSegments[3];
      if (extraGrade && !finalQuery.includes('grade=')) {
        finalQuery = finalQuery ? `${finalQuery}&grade=${extraGrade}` : `?grade=${extraGrade}`;
      }
    }

    return isHash 
      ? `#${resolved.canonicalUrl.slice(1)}${secondaryHash}${finalQuery}` 
      : `${resolved.canonicalUrl}${secondaryHash}${finalQuery}`;
  }

  // 2. Fallback for category landings and hubs
  let segments = pathOnly.split('/').filter(Boolean);

  // If the last segment is the isolated suffix, pop it
  const lastLower = segments[segments.length - 1].toLowerCase();
  if (lastLower === SUFFIX_MANUFACTURED || lastLower === SUFFIX_STOCKIST) {
    segments.pop();
  }

  if (segments.length <= 1) {
    return isHash ? `#products${secondaryHash}${query}` : `/products${secondaryHash}${query}`;
  }

  // Clean all segments from any existing suffix
  segments = segments.map((seg, idx) => {
    if (idx === 0) return seg; // 'products'
    return cleanProductSlug(seg);
  });

  // Default hub suffix
  const lastIdx = segments.length - 1;
  segments[lastIdx] = `${segments[lastIdx]}${MANUFACTURED_SUFFIX}`;

  const formattedPath = '/' + segments.join('/');
  return isHash 
    ? `#${formattedPath.slice(1)}${secondaryHash}${query}` 
    : `${formattedPath}${secondaryHash}${query}`;
}
