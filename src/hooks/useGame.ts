import { useState, useCallback } from 'react'

const BOARD_SIZE = 15
const EMPTY = 0
const BLACK = 1
const WHITE = 2

type Player = typeof BLACK | typeof WHITE
type Board = number[][]

export function useGame() {
  const [board, setBoard] = useState<Board>(() => {
    const b: Board = []
    for (let i = 0; i < BOARD_SIZE; i++) {
      b.push(Array(BOARD_SIZE).fill(EMPTY))
    }
    return b
  })
  const [currentPlayer, setCurrentPlayer] = useState<Player>(BLACK)
  const [winner, setWinner] = useState<Player | null>(null)
  const [history, setHistory] = useState<Board[]>([])

  const checkWin = useCallback((b: Board, row: number, col: number, player: Player): boolean => {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ]

    for (const [dr, dc] of directions) {
      let count = 1
      for (let i = 1; i < 5; i++) {
        const nr = row + dr * i
        const nc = col + dc * i
        if (nr >= 0 && nr < BOARD_SIZE && nc >= 0 && nc < BOARD_SIZE && b[nr][nc] === player) {
          count++
        } else {
          break
        }
      }
      for (let i = 1; i < 5; i++) {
        const nr = row - dr * i
        const nc = col - dc * i
        if (nr >= 0 && nr < BOARD_SIZE && nc >= 0 && nc < BOARD_SIZE && b[nr][nc] === player) {
          count++
        } else {
          break
        }
      }
      if (count >= 5) {
        return true
      }
    }
    return false
  }, [])

  const placeStone = useCallback((row: number, col: number) => {
    if (winner || board[row][col] !== EMPTY) return

    const newBoard = board.map(r => [...r])
    newBoard[row][col] = currentPlayer

    const newHistory = [...history, board]
    setHistory(newHistory)
    setBoard(newBoard)

    if (checkWin(newBoard, row, col, currentPlayer)) {
      setWinner(currentPlayer)
    } else {
      setCurrentPlayer(currentPlayer === BLACK ? WHITE : BLACK)
    }
  }, [board, currentPlayer, winner, history, checkWin])

  const resetGame = useCallback(() => {
    const newBoard: Board = []
    for (let i = 0; i < BOARD_SIZE; i++) {
      newBoard.push(Array(BOARD_SIZE).fill(EMPTY))
    }
    setBoard(newBoard)
    setCurrentPlayer(BLACK)
    setWinner(null)
    setHistory([])
  }, [])

  const undo = useCallback(() => {
    if (history.length === 0) return
    const prevBoard = history[history.length - 1]
    const newHistory = history.slice(0, -1)
    setBoard(prevBoard)
    setHistory(newHistory)
    setWinner(null)
    setCurrentPlayer(currentPlayer === BLACK ? WHITE : BLACK)
  }, [history, currentPlayer])

  const resign = useCallback(() => {
    setWinner(currentPlayer === BLACK ? WHITE : BLACK)
  }, [currentPlayer])

  return {
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
  }
}
