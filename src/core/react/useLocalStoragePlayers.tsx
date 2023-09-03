import { useEffect, useState } from 'react';
import { Player } from '../useCases/draft-teams';

const LOCAL_STORAGE_KEY = 'draftedPlayers';

function useLocalStoragePlayers() {
  const storedPlayers = localStorage.getItem(LOCAL_STORAGE_KEY);
  const initial = storedPlayers ? JSON.parse(storedPlayers) : null;

  const [players, setPlayers] = useState<Player>(initial);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(players));
  }, [players]);

  return [players, setPlayers];
}

export default useLocalStoragePlayers;