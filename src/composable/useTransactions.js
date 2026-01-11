import { ref, computed } from 'vue'

export function useTransactions() {
  const history = ref([])

  const balance = computed(() =>
    history.value.reduce((total, item) =>
      item.type === 'income'
        ? total + item.value
        : total - item.value
    , 0)
  )

  function addTransaction({ amount, type }) {
    history.value.push({
    value: amount,
    type: type,
    timestamp: new Date().toLocaleString()
    })
  }

  return {
    history,
    balance,
    addTransaction
  }
}