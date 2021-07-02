import React, { useState } from "react";
import {
  ALL_EVIDENCE,
  GHOSTS,
  MOUSE_LEFT,
  MOUSE_RIGHT,
  SELECTED,
  NOT_SELECTED,
  IGNORED,
  EvidenceDescription,
  Ghost,
} from "./data";
import { toggleSelection, ghostMatches } from "./util";
import "./App.css";

const freshState = (): Record<string, number> =>
  ALL_EVIDENCE.reduce(
    (
      acc: Record<string, number>,
      e: EvidenceDescription
    ): Record<string, number> => {
      acc[e.short] = NOT_SELECTED;
      return acc;
    },
    {}
  );

export const App = (): React.ReactElement => {
  const [selected, setSelected] = useState(freshState);

  const toggle = (evidence: string, button: number): void => {
    setSelected({
      [evidence]: toggleSelection(selected, evidence, button),
      ...selected,
    });
  };

  const reset = (): void => {
    setSelected(freshState);
  };

  const tableRow = (ghost: Ghost) => {
    return (
      <tr key={ghost.name}>
        <td className="">
          {ghost.name}
        </td>
        {ALL_EVIDENCE.map((evidence: EvidenceDescription) => (
          <td>{ !!ghost.evidence.has(evidence.short) ? "X" : ""}</td>
        )}
      </tr>
    );
  };

  return (
    <div className="container">
      <h1>Phasmo Selector</h1>
      <div className="spacer" />
      <table>
        <thead>
          <tr className="border-bottom">
            <th />
            {ALL_EVIDENCE.map((evidence: EvidenceDescription) => (
              <th
                className=""
                key={evidence.short}
                onClick={() => toggle(evidence.short, MOUSE_LEFT)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  toggle(evidence.short, MOUSE_RIGHT);
                }}
              >
                {evidence.long}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{GHOSTS.map((ghost: Ghost) => tableRow(ghost))}</tbody>
      </table>
      <div className="spacer-more" />
      <div className="button-bar">
        <button className="btn-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
