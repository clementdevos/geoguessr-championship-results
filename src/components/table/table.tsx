import React, { useMemo } from "react";
import { GamerScore } from "../../types/gamer";
import { useGeoguessrResults } from "../../hooks/use_geoguessr_results";

export const Table = ({ gameIds }: { gameIds: string[] }) => {
  const { data } = useGeoguessrResults(gameIds);

  console.log({ data });
  const columns = useMemo<Array<{ name: string; id: string }>>(() => {
    return Object.values(data)
      .map((playersScores) => playersScores[0])
      .filter(Boolean)
      .map((score) => ({
        name: score.game.mapName,
        id: score.game.token,
      }));
  }, [data]);

  const gamerScores = useMemo(() => {
    const map: { [userId: string]: GamerScore } = Object.values(data)
      .flat()
      .reduce((acc: { [userId: string]: GamerScore }, playerScore) => {
        if (!acc[playerScore.userId]) {
          acc[playerScore.userId] = {
            playerName: playerScore.playerName,
            total: 0,
            rank: 0,
            games: {},
          };
        }
        acc[playerScore.userId].games[playerScore.gameToken] =
          playerScore.totalScore;
        acc[playerScore.userId].total += playerScore.totalScore;
        return acc;
      }, {});
    return Object.entries(map)
      .map(([userId, gamerScore]) => ({ userId, ...gamerScore }))
      .sort(({ total: a }, { total: b }) => b - a)
      .map((item, index) => ({ ...item, rank: index + 1 }));
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          {columns.map(({ name, id }) => (
            <th key={`column_${id}`}>{name}</th>
          ))}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {gamerScores.map((gamerScore) => (
          <tr>
            <td>{gamerScore.playerName}</td>
            {columns.map(({ id }) => (
              <td>{gamerScore.games[id]}</td>
            ))}
            <td>{gamerScore.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
