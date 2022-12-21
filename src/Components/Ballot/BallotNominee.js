import "./BallotNominee.css";
import React, { useCallback } from "react";

export const BallotNominee = ({
  nominee: { nomineeId, nomineeTitle, nomineePhotoUrl },
  isSelected,
  onSelect,
}) => {
  const selectNominee = useCallback(
    (e) => {
      const { nomineeId } = e.target.dataset;
      onSelect({ nomineeId });
    },
    [onSelect]
  );

  const className = isSelected
    ? "ballot-nominee selected"
    : "ballot-nominee";

  return (
    <div className={className}>
      <div className="ballot-nominee-title" title={nomineeTitle}>
        {nomineeTitle}
      </div>
      <img
        alt={nomineeTitle}
        className="ballot-nominee-image"
        height={150}
        src={nomineePhotoUrl}
      />
      <button
        className="ballot-nominee-select-button"
        data-nominee-id={nomineeId}
        onClick={selectNominee}
      >
        Select
      </button>
    </div>
  );
};
