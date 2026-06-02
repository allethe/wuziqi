import { cn } from '@/lib/utils'

interface GameStatusProps {
  currentPlayer: number
  winner: number | null
  BLACK: number
  WHITE: number
}

export default function GameStatus({ currentPlayer, winner, BLACK, WHITE }: GameStatusProps) {
  const getPlayerName = (player: number) => {
    return player === BLACK ? '黑棋' : '白棋'
  }

  const getPlayerColor = (player: number) => {
    return player === BLACK ? 'bg-black' : 'bg-white border-2 border-gray-300'
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800">五子棋</h1>
      <div className="flex items-center gap-3">
        <div className="text-lg font-medium text-gray-600">当前玩家:</div>
        <div className="flex items-center gap-2">
          <div className={cn('w-8 h-8 rounded-full', getPlayerColor(winner || currentPlayer))}></div>
          <span className="text-xl font-bold">
            {winner ? `${getPlayerName(winner)} 获胜!` : getPlayerName(currentPlayer)}
          </span>
        </div>
      </div>
    </div>
  )
}
