import { GeoGuessrPlayerScore } from "../types/geoguessr_api";
import { useState, useEffect } from "react";

export const useGeoguessrResults = (gameIds: string[]) => {
  const [data, setData] = useState<{
    [gameId: string]: GeoGuessrPlayerScore[];
  }>({});

  useEffect(() => {
    Promise.all(
      gameIds.map((gameId) =>
        fetch(
          `https://www.geoguessr.com/api/v3/results/scores/${gameId}/0/10`,
          { mode: "cors" }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return [];
          })
          .then((gameResults: GeoGuessrPlayerScore[]) => ({
            gameId,
            gameResults,
          }))
      )
    ).then((gamesResults) =>
      setData(
        gamesResults.reduce(
          (acc, { gameId, gameResults }) => ({ ...acc, [gameId]: gameResults }),
          {}
        )
      )
    );
  }, [gameIds]);

  return { data };
};
