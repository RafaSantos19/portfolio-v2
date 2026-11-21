export type Theme = "light" | "dark";
export type Palette = "classic" | "editorial" | "unix";

const appearanceEvent = "portfolio-appearance";

export function isTheme(value: unknown): value is Theme { return value === "light" || value === "dark"; }
export function isPalette(value: unknown): value is Palette { return value === "classic" || value === "editorial" || value === "unix"; }

// Runs before hydration; storage access can be blocked in private browsers.
export const appearanceScript = `(() => {
  const root = document.documentElement;
  try {
    const theme = localStorage.getItem('portfolio-theme');
    const palette = localStorage.getItem('portfolio-palette');
    root.dataset.theme = theme === 'light' ? 'light' : 'dark';
    root.dataset.palette = ['classic', 'editorial', 'unix'].includes(palette) ? palette : 'unix';
  } catch {}
})();`;

export function subscribeAppearance(callback: () => void) {
  function sync(event: StorageEvent) {
    if (event.key !== null && event.key !== "portfolio-theme" && event.key !== "portfolio-palette") return;
    try {
      const theme = localStorage.getItem("portfolio-theme");
      const palette = localStorage.getItem("portfolio-palette");
      document.documentElement.dataset.theme = isTheme(theme) ? theme : "dark";
      document.documentElement.dataset.palette = isPalette(palette) ? palette : "unix";
    } catch { /* Keep the current appearance when storage is unavailable. */ }
    callback();
  }
  window.addEventListener(appearanceEvent, callback);
  window.addEventListener("storage", sync);
  return () => {
    window.removeEventListener(appearanceEvent, callback);
    window.removeEventListener("storage", sync);
  };
}

export function getTheme(): Theme { return document.documentElement.dataset.theme === "light" ? "light" : "dark"; }
export function getPalette(): Palette {
  const value = document.documentElement.dataset.palette;
  return isPalette(value) ? value : "unix";
}
export function getDefaultTheme(): Theme { return "dark"; }
export function getDefaultPalette(): Palette { return "unix"; }

export function setAppearance(key: "theme" | "palette", value: Theme | Palette) {
  document.documentElement.dataset[key] = value;
  try { localStorage.setItem(`portfolio-${key}`, value); } catch { /* The control still works without persistence. */ }
  window.dispatchEvent(new Event(appearanceEvent));
}
