import { ref, onMounted, onUnmounted } from 'vue'

//慣例により、構成可能な関数名は「use」で始まります
export function useMouse() {
  //コンポーザブルによってカプセル化および管理された状態
  const x = ref(0)
  const y = ref(0)

  //コンポーザブルは、時間の経過とともに管理状態を更新できます。
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  //コンポーザブルはその所有者コンポーネントにフックすることもできます
  //副作用を設定および破棄するライフサイクル。
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  //管理状態を戻り値として公開します
  return { x, y }
}
