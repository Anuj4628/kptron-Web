/**
 * URL Utilities for SEO-friendly naming conventions across KPTRON
 * Ensures consistent suffix: -manufactured-in-mumbai on all product paths.
 */

export const MANUFACTURED_SUFFIX = '-manufactured-in-mumbai';

/**
 * Checks whether a URL, path, or slug has the manufactured-in-mumbai indicator
 */
export function isManufacturedInMumbaiUrl(url = '') {
  if (!url || typeof url !== 'string') return false;
  return url.toLowerCase().includes('manufactured-in-mumbai');
}

/**
 * Strips -manufactured-in-mumbai or manufactured-in-mumbai from any slug or segment
 */
export function cleanProductSlug(slug = '') {
  if (!slug || typeof slug !== 'string') return '';
  return slug
    .replace(/-manufactured-in-mumbai$/i, '')
    .replace(/^manufactured-in-mumbai$/i, '');
}

/**
 * Formats any product URL to include the SEO suffix -manufactured-in-mumbai on the final segment.
 * Preserves query strings, hashes, avoids duplicate suffixes, and normalizes legacy paths.
 *
 * Examples:
 * - /products/flanges -> /products/flanges-manufactured-in-mumbai
 * - /products/flanges/stainless-steel -> /products/flanges/stainless-steel-manufactured-in-mumbai
 * - /products/flanges/stainless-steel/threaded-flange-316l -> /products/flanges/stainless-steel/threaded-flange-316l-manufactured-in-mumbai
 * - /products/flanges/stainless-steel/manufactured-in-mumbai -> /products/flanges/stainless-steel-manufactured-in-mumbai
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

  // Split path into segments
  let segments = pathOnly.split('/').filter(Boolean);

  // If the last segment is the isolated 'manufactured-in-mumbai', pop it
  if (segments[segments.length - 1].toLowerCase() === 'manufactured-in-mumbai') {
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

  // Append -manufactured-in-mumbai to the very last segment
  const lastIdx = segments.length - 1;
  segments[lastIdx] = `${segments[lastIdx]}${MANUFACTURED_SUFFIX}`;

  const formattedPath = '/' + segments.join('/');
  return isHash 
    ? `#${formattedPath.slice(1)}${secondaryHash}${query}` 
    : `${formattedPath}${secondaryHash}${query}`;
}
