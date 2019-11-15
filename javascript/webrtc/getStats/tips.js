/**
 * statsの整形
 * この時点で取得したstatsはデータ構造が複雑なので、操作しやすくする為に配列に変換。
 */
async function getFixStats(_pc) {
  const stats = _pc.getStats()
  const fixStats = Array.from(stats).map(stat => stat[1])
  
  return stats
}

