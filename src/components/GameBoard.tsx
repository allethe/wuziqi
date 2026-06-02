import { cn } from '@/lib/utils'

interface GameBoardProps {
  board: number[][]
  onPlaceStone: (row: number, col: number) => void
  BOARD_SIZE: number
  BLACK: number
  WHITE: number
  EMPTY: number
}

export default function GameBoard({ board, onPlaceStone, BOARD_SIZE, BLACK, WHITE, EMPTY }: GameBoardProps) {
  const cellSize = 30

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div
        className="relative bg-amber-200 rounded-lg p-4"
        style={{
          width: BOARD_SIZE * cellSize + 48,
          height: BOARD_SIZE * cellSize + 48,
        }}
      >
        <div
          className="relative"
          style={{
            width: BOARD_SIZE * cellSize,
            height: BOARD_SIZE * cellSize,
          }}
        >
          <svg
            className="absolute inset-0"
            width={BOARD_SIZE * cellSize}
            height={BOARD_SIZE * cellSize}
          >
            {Array.from({ length: BOARD_SIZE }).map((_, i) => (
              <g key={`grid-${i}`}>
                <line
                  x1={i * cellSize + cellSize / 2}
                  y1={cellSize / 2}
                  x2={i * cellSize + cellSize / 2}
                  y2={BOARD_SIZE * cellSize - cellSize / 2}
                  stroke="#78350f"
                  strokeWidth="1"
                />
                <line
                  x1={cellSize / 2}
                  y1={i * cellSize + cellSize / 2}
                  x2={BOARD_SIZE * cellSize - cellSize / 2}
                  y2={i * cellSize + cellSize / 2}
                  stroke="#78350f"
                  strokeWidth="1"
                />
              </g>
            ))}
          </svg>
          {Array.from({ length: BOARD_SIZE }).map((_, row) =>
            Array.from({ length: BOARD_SIZE }).map((_, col) => (
              <div
                key={`cell-${row}-${col}`}
                className="absolute flex items-center justify-center cursor-pointer hover:bg-amber-300/50 transition-colors z-10"
                style={{
                  width: cellSize,
                  height: cellSize,
                  left: col * cellSize,
                  top: row * cellSize,
                }}
                onClick={() => onPlaceStone(row, col)}
              >
                {board[row][col] !== EMPTY && (
                  <div
                    className={cn(
                      'w-6 h-6 rounded-full shadow-md',
                      board[row][col] === BLACK ? 'bg-black' : 'bg-white border-2 border-gray-300'
                    )}
                  ></div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
