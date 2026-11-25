
const isProd = process.env.NODE_ENV === "production";

export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined &&
  process.env.NEXT_PUBLIC_BASE_PATH !== ""
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";

export function asset(path: string): string {
  if (!path) return "";

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  const clean = path.startsWith("/") ? path : `/${path}`;

  if (
    BASE_PATH &&
    (clean === BASE_PATH || clean.startsWith(`${BASE_PATH}/`))
  ) {
    return clean;
  }

  return `${BASE_PATH}${clean}`;
}

export function link(href: string): string {
  if (!href) return "";

  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const clean = href.startsWith("/") ? href : `/${href}`;

  if (
    BASE_PATH &&
    (clean === BASE_PATH || clean.startsWith(`${BASE_PATH}/`))
  ) {
    return clean;
  }

  return `${BASE_PATH}${clean}`;
}
