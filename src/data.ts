export interface GhostEvidence {
  box: boolean;
  fingerprints: boolean;
  writing: boolean;
  orbs: boolean;
  emf: boolean;
  freezing: boolean;

  has: (name: string) => boolean;
}

export interface Ghost {
  name: string;
  description: string;
  evidence: GhostEvidence;
}

export interface EvidenceDescription {
  short: string;
  long: string;
}

export const SELECTED = 0;
export const NOT_SELECTED = 1;
export const IGNORED = 2;

export const MOUSE_LEFT = 0;
export const MOUSE_RIGHT = 1;

export const ALL_EVIDENCE: Array<EvidenceDescription> = [
  { short: "emf", long: "EMF 5" },
  { short: "fingerprints", long: "Fingerprints" },
  { short: "freezing", long: "Freezing" },
  { short: "orbs", long: "Ghost Orbs" },
  { short: "writing", long: "Book writing" },
  { short: "box", long: "Spirit Box" },
];

const hasEvidence = (name: string): boolean => {
  if (name === "emf" && this.emf) {
    return true;
  } else if (name === "fingerprints" && this.fingerprints) {
    return true;
  } else if (name === "freezing" && this.freezing) {
    return true;
  } else if (name === "orbs" && this.orbs) {
    return true;
  } else if (name === "writing" && this.writing) {
    return true;
  } else if (name === "box" && this.box) {
    return true;
  }
  return false;
};

export const GHOSTS: Array<Ghost> = [
  {
    name: "Spirit",
    description:
      "Smudge Sticks will prevent it from attacking for a long time.",
    evidence: {
      box: true,
      fingerprints: true,
      writing: true,
      orbs: false,
      emf: false,
      freezing: false,
    },
  },
  {
    name: "Wraith",
    description:
      "Usually flies, including through walls/lockers/doors. Toxic reaction to salt.",
    evidence: {
      box: true,
      fingerprints: true,
      writing: false,
      orbs: false,
      emf: false,
      freezing: true,
    },
  },
  {
    name: "Phantom",
    description:
      "Looking at it will cause large sanity loss. Taking a photo of it will cause it to temporarily disappear.",
    evidence: {
      box: false,
      fingerprints: false,
      writing: false,
      orbs: true,
      emf: true,
      freezing: true,
    },
  },
  {
    name: "Poltergeist",
    description: "Interacts with many items at a time.",
    evidence: {
      box: true,
      fingerprints: true,
      writing: false,
      orbs: true,
      emf: false,
      freezing: false,
    },
  },
  {
    name: "Banshee",
    description:
      "Targets a single person at a time. Will be less aggressive near Crucifixes.",
    evidence: {
      box: false,
      fingerprints: true,
      writing: false,
      orbs: false,
      emf: true,
      freezing: true,
    },
  },
  {
    name: "Jinn",
    description:
      "Territorial & fast. Faster when target is far away and power supply is on.",
    evidence: {
      box: true,
      fingerprints: false,
      writing: false,
      orbs: true,
      emf: true,
      freezing: false,
    },
  },
  {
    name: "Mare",
    description: "Increased chance to attack in the dark.",
    evidence: {
      box: true,
      fingerprints: false,
      writing: false,
      orbs: true,
      emf: false,
      freezing: true,
    },
  },
  {
    name: "Revenant",
    description: "Very fast when hunting; slows greatly when being hid from.",
    evidence: {
      box: false,
      fingerprints: true,
      writing: true,
      orbs: false,
      emf: true,
      freezing: false,
    },
  },
  {
    name: "Shade",
    description:
      "Very shy. Will not start a hunt when multiple people are nearby.",
    evidence: {
      box: false,
      fingerprints: false,
      writing: true,
      orbs: true,
      emf: true,
      freezing: false,
    },
  },
  {
    name: "Demon",
    description:
      "Aggressive, and attacks more often. Asking a successful question via Ouija board will not lower sanity.",
    evidence: {
      box: true,
      fingerprints: false,
      writing: true,
      orbs: false,
      emf: false,
      freezing: true,
    },
  },
  {
    name: "Yurei",
    description:
      "Drains sanity faster than other ghosts. Smudging its room prevents roaming for a long time.",
    evidence: {
      box: false,
      fingerprints: false,
      writing: true,
      orbs: true,
      emf: false,
      freezing: true,
    },
  },
  {
    name: "Oni",
    description:
      "More active when around multiple people. Can rapidly move items.",
    evidence: {
      box: true,
      fingerprints: false,
      writing: true,
      orbs: false,
      emf: true,
      freezing: false,
    },
  },
];
