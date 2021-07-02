import {
  SELECTED,
  IGNORED,
  NOT_SELECTED,
  MOUSE_LEFT,
  MOUSE_RIGHT,
  Ghost,
} from "./data";

export const toggleSelection = (
  selected: Record<string, number>,
  evidenceName: string,
  button: number
): number => {
  const current = selected[evidenceName];
  if (current === NOT_SELECTED) {
    return button === MOUSE_LEFT ? SELECTED : IGNORED;
  }
  if (button === MOUSE_LEFT && current === SELECTED) {
    return NOT_SELECTED;
  } else if (button === MOUSE_LEFT && current === IGNORED) {
    return SELECTED;
  } else if (button === MOUSE_RIGHT && current === IGNORED) {
    return NOT_SELECTED;
  } else if (button === MOUSE_RIGHT && current === SELECTED) {
    return IGNORED;
  }
  console.log("ERROR should not reach");
  return NOT_SELECTED;
};

export const ghostMatches = (
  ghost: Ghost,
  selected: Record<string, number>
): boolean => {
  for (const [key, value] of Object.entries(ghost.evidence)) {
    if (
      (value && selected[key] === IGNORED) ||
      (!value && selected[key] === SELECTED)
    ) {
      return false;
    }
  }
  return true;
};
