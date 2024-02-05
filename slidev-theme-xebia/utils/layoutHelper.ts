import type { CSSProperties } from "vue";

// see on @slidev/client/layoutHelper.ts for original implementation

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith("/")) {
    // @ts-expect-error env is defined by vite
    return import.meta.env.BASE_URL + url.slice(1);
  }
  return url;
}

type Options = {
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
};
export function handleBackground(
  background?: string,
  options?: Options,
): CSSProperties {
  const {
    backgroundSize = "cover",
    backgroundPosition = "center",
    backgroundRepeat = "no-repeat",
  } = options || {};

  const style = {
    background,
    backgroundImage: background
      ? `url("${resolveAssetUrl(background)}")`
      : undefined,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
  };
  if (!style.background) {
    delete style.background;
  }

  return style;
}
