import { RefreshCw, RotateCcw, Flag } from 'lucide-react'

interface GameControlsProps {
  onReset: () => void
  onUndo: () => void
  onResign: () => void
  hasHistory: boolean
}

export default function GameControls({ onReset, onUndo, onResign, hasHistory }: GameControlsProps) {
  return (
    <div className="flex gap-3 p-4 bg-white rounded-xl shadow-lg">
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
      >
        <RefreshCw className="w-5 h-5" />
        重新开始
      </button>
      <button
        onClick={onUndo}
        disabled={!hasHistory}
        className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
      >
        <RotateCcw className="w-5 h-5" />
        悔棋
      </button>
      <button
        onClick={onResign}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
      >
        <Flag className="w-5 h-5" />
        认输
      </button>
    </div>
  )
}
