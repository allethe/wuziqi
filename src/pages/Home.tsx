import GameStatus from '@/components/GameStatus'
import GameControls from '@/components/GameControls'
import GameBoard from '@/components/GameBoard'
import { useGame } from '@/hooks/useGame'

export default function Home() {
  const {
    board,
    currentPlayer,
    winner,
    placeStone,
    resetGame,
    undo,
    resign,
    history,
    BOARD_SIZE,
    BLACK,
    WHITE,
    EMPTY,
  } = useGame()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-12 px-4">
      <div className="flex flex-col items-center gap-8">
        <GameStatus
          currentPlayer={currentPlayer}
          winner={winner}
          BLACK={BLACK}
          WHITE={WHITE}
        />
        <GameBoard
          board={board}
          onPlaceStone={placeStone}
          BOARD_SIZE={BOARD_SIZE}
          BLACK={BLACK}
          WHITE={WHITE}
          EMPTY={EMPTY}
        />
        <GameControls
          onReset={resetGame}
          onUndo={undo}
          onResign={resign}
          hasHistory={history.length > 0}
        />
      </div>
    </div>
  )
}
