export function getBreakpoint(name, defaultVal) {
  return parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`--breakpoint-${name}`, defaultVal)
  );
}
