import "./BallotCategory.css";
import React, { useCallback } from "react";
import { BallotNominee } from "./BallotNominee";

export const BallotCategory = ({
  category: { categoryId, categoryNominees, categoryTitle },
  nominate,
  selectedNomineeId,
}) => {
  const onSelectNominee = useCallback(
    ({ nomineeId }) => {
      nominate({ categoryId, nomineeId });
    },
    [categoryId, nominate]
  );

  return (
    <div className="ballot-category">
      <h2 className="ballot-category-title">{categoryTitle}</h2>
      <div className="ballot-category-content">
        {categoryNominees.map((nominee) => (
          <BallotNominee
            key={nominee.nomineeId}
            nominee={nominee}
            isSelected={selectedNomineeId === nominee.nomineeId}
            onSelect={onSelectNominee}
          />
        ))}
      </div>
    </div>
  );
};
