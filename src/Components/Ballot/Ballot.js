import "./Ballot.css";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../Api/Api";
import { BallotCategory } from "./BallotCategory";

export const Ballot = () => {
  const [ballotData, setBallotData] = useState({ categories: [] });
  const [nominations, setNominations] = useState({});

  const nominate = useCallback(
    ({ categoryId, nomineeId }) => {
      setNominations({ ...nominations, [categoryId]: nomineeId });
    },
    [nominations]
  );
  const submitBallot = useCallback(() => {
    window.alert(JSON.stringify(nominations, null, 2));
  }, [nominations]);

  useEffect(() => {
    api.getBallotData().then(setBallotData);
  }, []);

  return (
    <div className="ballot">
      <h2 className="ballot-header">AWARDS 2021</h2>
      {ballotData.categories.map((category) => (
        <BallotCategory
          key={category.categoryId}
          category={category}
          nominate={nominate}
          selectedNomineeId={nominations[category.categoryId]}
        />
      ))}
      <button className="ballot-submit-button" onClick={submitBallot}>
        Submit
      </button>
    </div>
  );
};
